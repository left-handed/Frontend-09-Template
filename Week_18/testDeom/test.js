var assert = require('assert');
var add = require('./add.js');
describe('add test', function() {
  it('is should be 3', function() {
    assert.equal(add(1, 3), 4);
  });
  it('is should be 6', function() {
    assert.equal(add(3, 3), 6);
  });
  it('is should be 3', function() {
    assert.equal(add(-5, 3), -2);
  });
});