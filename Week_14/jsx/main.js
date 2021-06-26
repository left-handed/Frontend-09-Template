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
    this.root.classList = 'img-content';
    for (const item of this.attributes.src) {
      let divImg = document.createElement('div');
      divImg.classList = 'img-item';
      divImg.style.backgroundImage = `url(${item})`;
      this.root.appendChild(divImg);
    }
    let position = 0;
    this.root.addEventListener('mousedown', (event) => {
      console.log('down');
      let childArr = this.root.children;
      let xStart = event.clientX;
      let w = childArr[0].getClientRects()[0].width
      let move = (event) => {
        let x = event.clientX - xStart;
        let current = position - ((x - x % w) / w);  // *****
        for (const offset of [-1, 0, 1]) {
          let pos = offset + current;
          pos = (pos + childArr.length) % childArr.length; // 取余
          childArr[pos].style.transition = 'none';
          childArr[pos].style.transform = `translateX(${-pos * w + offset * w + x % w}px)`;
        }
      }
      let up = (event) => {
        console.log('up');
        let x = event.clientX - xStart;
        position = position - Math.round(x / w);
        for (const offset of [0, - Math.sign(Math.round(x / w) - x + 250 * Math.sign(x))]) {
          let pos = offset + position;
          pos = (pos + childArr.length) % childArr.length; // 取余
          childArr[pos].style.transition = '';
          childArr[pos].style.transform = `translateX(${-pos * w + offset * w}px)`;
        }

        // for (const child of childArr) {
        //   child.style.transition = '';
        //   child.style.transform = `translateX(${- position * w}px)`;
        // }
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      }
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    })

    /*let currentIndex = 0;
    setInterval(() => {
      let childs = this.root.children;
      let nextIndex = (currentIndex + 1) % childs.length;
      let current = childs[currentIndex];
      let nextCurrent = childs[nextIndex];
      nextCurrent.style.transtion = "none";
      nextCurrent.style.transform = `translateX(${100 - nextIndex * 100}%)`;
      
      setTimeout(() => {
        nextCurrent.style.transtion = "";
        current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
        nextCurrent.style.transform = `translateX(${- nextIndex * 100}%)`;
      }, 16);

      currentIndex = nextIndex;

      // for (const child of childs) {
      //   child.style.transform = `translateX(-${key * 100}%)`
      // }
    }, 3000)*/
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