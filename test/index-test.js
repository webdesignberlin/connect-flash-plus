var vows = require('vows');
var assert = require('assert');
var flash = require('index');


vows.describe('connect-flash-plus').addBatch({
  
  'module': {
    'should export middleware': function () {
      assert.isFunction(flash);
    },
  },
  
}).export(module);
