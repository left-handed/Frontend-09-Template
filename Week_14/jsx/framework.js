export function createElement (type, attr, ...childs) {
  console.log(type, attr, childs);
  let el;
  if (typeof type === 'string') {
    el = new ElementWrapper(type);
  } else {
    el = new type
  }
  for (const k in attr) {
    el.setAttribute(k, attr[k]);
  }
  for (const item of childs) {
    if (typeof item === 'string') {
      item = new TextWrapper(item);
    }
    el.appendChild(item);
  }
  return el;
}

export class Component {
  constructor () {
  }

  setAttribute (name, val) {
    this.root.setAttribute(name, val);
  }

  appendChild (child) {
    child.mountTo(this.root);
  }

  mountTo (parent) {
    parent.appendChild(this.root);
  }
}

class TextWrapper extends Component{
  constructor (text) {
    super();
    this.root = document.createTextNode(text);
  }
}

class ElementWrapper extends Component{
  constructor (type) {
    super();
    this.root = document.createElement(type);
  }
}