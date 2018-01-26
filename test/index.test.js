var expect = require('expect.js');
var jsdom = require('jsdom');

var dom = new jsdom.JSDOM('<html><body><section></section></body></html>');

var $ = global.jQuery = require('jquery')(dom.window);

// buscar el archivo js donde esta nuestra logica
require('../src');

describe('jquery-full-bg', function(){
  it('should have a width of 100%', function(){
    $('section').FullBg();
    expect($('section').css('width')).to.be('100%');
  });
});
