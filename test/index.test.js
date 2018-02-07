var expect = require('expect.js');
var jsdom = require('jsdom');
require('dotenv').config();

var dom = new jsdom.JSDOM('<html><body><section></section></body></html>');

var $ = global.jQuery = require('jquery')(dom.window);

// buscar el archivo js donde esta nuestra logica
require('jsdom-global')();
require('../src');

describe('jquery-full-bg', function(){

  var $section;
  var CLIENT_ID=process.env.CLIENT_ID;

  beforeEach(function(){
    window.fullBg.setup('123');
    $section = $('section');
    $section.FullBg();
  });


  it('should set client id attr', function(){
    expect(window.fullBg.clientId).to.be('123');
  });

  it('should have defined values', function(){
    $section.FullBg({
      minHeight:'600px',
      backgroundSize:'contain',
      backgroundPosition:'top center',
      backgroundColor:'red'
    });
    expect($section.css('minHeight')).to.be('600px');
    expect($section.css('backgroundSize')).to.be('contain');
    expect($section.css('backgroundPosition')).to.be('top center');
    expect($section.css('backgroundColor')).to.be('red');
  });

  it('should have default values', function(){
    expect($section.css('width')).to.be('100%');
    expect($section.css('minHeight')).to.be('800px');
    expect($section.css('backgroundSize')).to.be('cover');
    expect($section.css('backgroundPosition')).to.be('center');
    expect($section.css('backgroundColor')).to.be('black');
  });

  it('should set and a random images from unsplash', function(){
    window.fullBg.setup(CLIENT_ID);
    return $section.FullBg({
      backgroundImage: 'path/image.jpg',
    })
      .then(function($this){
        expect($this.css('backgroundImage')).not.to.contain('path/image.jpg');
      })
      .catch(function($this){
        expect($this.css('backgroundImage')).to.contain('path/image.jpg');
      });
  });

  it('should set default image', function(){
    window.fullBg.setup('CLIENT_ID');
    return $section.FullBg({
      backgroundImage: 'path/image.jpg',
    })
      .catch(function($this){
        expect($this.css('backgroundImage')).to.contain('path/image.jpg');
      });
  });
});
