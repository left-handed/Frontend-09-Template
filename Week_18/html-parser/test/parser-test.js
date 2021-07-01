var assert = require('assert');
import {parseHTML} from '../src/parser.js'
describe('parser html', function() {
  it('<a></a>', function() {
    let tree = parseHTML("<a></a>");
    assert.equal(tree.childern[0].tagName, "a");
    assert.equal(tree.childern[0].childern.length, 0);
  });
  it('<a href="www.baidu.com"></a>', function() {
    let tree = parseHTML('<a href="www.baidu.com"></a>');
    console.log(tree);
    assert.equal(tree.childern[0].tagName, "a");
    assert.equal(tree.childern[0].childern.length, 0);
  });
});