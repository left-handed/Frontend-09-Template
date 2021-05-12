const net = require('net');
class Request {
  constructor (options) {
    this.method = options.method || 'GET';
    this.host = options.host;
    this.port = options.port || '8088';
    this.path = options.path || '/'; 
    this.headers = options.headers;
    this.body = options.body;
    if (!this.headers["Content-Type"]) {
      this.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if (this.headers["Content-Type"] === 'application/json') {
      this.bodyText = JSON.stringify(this.body);
    } else if (this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
      console.log(Object.keys(this.body));
      this.bodyText = Object.keys(this.body).map((key) => {
        return `${key}=${encodeURIComponent(this.body[key])}`
      }).join("&");
    }
    this.headers["Content-Length"] = this.bodyText.length;
  }

  send (connection) {
    return new Promise((resolve, reject) => {
      let parser = new ResponeParser;
      if (connection) {
        connection.write(this.toString());
      } else {
        connection = net.createConnection({
          host: this.host,
          port: this.port
        }, () => {
          connection.write(this.toString());
        });
      }
      connection.on('data', (data) => {
        parser.receive(data.toString());
        if (parser.isFinished) {
          resolve(parser.respones);
          connection.end();
        }
      })

      connection.on('err', (e) => {
        reject(e);
        connection.end();
      });
    })
  }

  /**
   * http报文规则需换行，中间不能有空格、tab
   * @returns string
   */
  toString() {
    return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
\r
${this.bodyText}`;
  }
}

class ResponeParser {
  constructor() {
    this.WAITING_STATUS_LINE = 0;
    this.WAITING_STATUS_LINE_END = 1;
    this.WAILING_HEADER_NAME = 2;   
    this.WAILING_HEADER_SPACE = 3;
    this.WAILING_HEADER_VALUE = 4;
    this.WAILING_HEADER_LINE_END = 5;
    this.WAILING_HEADER_BLOCK_END = 6;
    this.WAILING_BODY = 7;

    this.current = this.WAITING_STATUS_LINE;
    this.statusLine = '';
    this.headers = {};
    this.headerName = '';
    this.headerVlue = '';
    this.bodyParser = null;
  }

  receive(string) {
    for (let i = 0; i < string.length; i++) {
      this.receiveCher(string.charAt(i));
    }
  }

  receiveCher(char) {
    if (this.current === this.WAITING_STATUS_LINE) {
      if (char === '\r') {
        this.current = this.WAITING_STATUS_LINE_END;
      } else {
        this.statusLine += char;
      }
    } else if (this.current === this.WAITING_STATUS_LINE_END) {
      if (char === '\n') {
        this.current = this.WAILING_HEADER_NAME;
      }
    } else if (this.current === this.WAILING_HEADER_NAME) {
      if (char === ':') {
        this.current = this.WAILING_HEADER_SPACE;
      } else if (char === '\r') {
        this.current = this.WAILING_HEADER_BLOCK_END;
      } else {
        this.headerName += char;
      }
    } else if (this.current === this.WAILING_HEADER_SPACE) {
      if (char === ' ') {
        this.current = this.WAILING_HEADER_VALUE;
      }
    } else if (this.current === this.WAILING_HEADER_VALUE) {
      if (char === '\r') {
        this.current = this.WAILING_HEADER_LINE_END;
        this.headers[this.headerName] = this.headerVlue;
        this.headerName = '';
        this.headerVlue = '';
      } else {
        this.headerName += char;
      }
    } else if (this.current === this.WAILING_HEADER_LINE_END) {
      if (char === '\n') {
        this.current = this.WAILING_HEADER_NAME;
      }
    } else if (this.current === this.WAILING_HEADER_BLOCK_END) {
      if (char === '\n') {
        this.current = this.WAILING_HEADER_BODY
      }
    } else if (this.current === this.WAILING_BODY) {
      console.log(char);
    }
  }
}

void async function () {
  let request = new Request({
    method: 'POST',
    host: '127.0.0.1',
    port: '8088',
    path: '/',
    headers: {
      ["X-Foo2"]: 'custom'
    },
    body: {
      name: 'jinze',
      age: '28',
    }
  });
  let respones = await request.send();
  console.log(respones);
}();