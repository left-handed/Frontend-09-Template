var assert = require('assert');
var add = require('../test/parser-test.js')
// import {add, mul} from '../add.js';
describe('add test', function() {
  it('is should be 3', function() {
    assert.equal(add(1, 3), 4);
  });
});