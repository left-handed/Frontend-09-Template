export class TextWrapper {
  constructor (text) {
    this.root = document.createTextNode(text);
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

export class ElementWrapper {
  constructor (type) {
    this.root = document.createElement(type);
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

export class Div {
  constructor () {
    this.root = document.createElement('div');
  }

  setAttribute (name, val) {
    this.root.setAttribute(name, val);
  }

  appendChild (child) {
    child.mountTo(this.root)
  }

  mountTo (parent) {
    parent.appendChild(this.root);
  }
}