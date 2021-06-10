import {Component, createElement} from './framework.js';
class Carousel extends Component{
  constructor () {
    super();
    this.attributes = Object.create(null);
  }

  setAttribute (name, val) {
    this.attributes[name] = val;
  }

  render () {
    this.root = document.createElement('div');
    this.root.classList = 'img-content'
    for (const item of this.attributes.src) {
      let divImg = document.createElement('div');
      divImg.classList = 'img-item';
      divImg.style.backgroundImage = `url(${item})`;
      this.root.appendChild(divImg);
    }
    let index = 0;
    setInterval(() => {
      let childs = this.root.children;
      ++index;
      for (const child of childs) {
        child.style.transform = `translateX(-${index * 100}%)`
      }
    }, 3000)
    return this.root;
  }

  mountTo (parent) {
    parent.appendChild(this.render())
  }
}

let imgArr = [
  'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
  'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
  'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
  'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg'
];

let jsx = <Carousel src={imgArr}/>

jsx.mountTo(document.body)

