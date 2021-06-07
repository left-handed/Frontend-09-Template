import {} from "./framework.js"
function createElement (type, attr, ...childs) {
  console.log(type, attr, childs);
  let el;
  if (typeof type === 'string') {
    console.log(type, '444444');
    el = new ElementWrapper(type);
  } else {
    el = new Div()
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

let jsx = <div id="dom"><span>1</span><span>2</span><span>3</span></div>;

jsx.mountTo(document.body)

