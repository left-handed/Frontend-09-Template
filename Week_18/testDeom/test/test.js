var assert = require('assert');
import {add, mul} from '../add.js';
describe('add test', function() {
  it('is should be 3', function() {
    assert.equal(add(1, 3), 4);
  });
});