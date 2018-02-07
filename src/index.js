/*
* jquery-full-bg
* @version 1.0.0
* @Cesar Valdez
* @license MIT
*/

(function(global, $){

  function FullBg(){

  }

  FullBg.prototype.setup = function(clientId){
    this.clientId = clientId;
  };

  $.fn.FullBg = function(options){
    options = options || {};

    $(this).css({
      width:'100%',
      height:'100vh',
      minHeight: options.minHeight || '800px',
      backgroundSize: options.backgroundSize || 'cover',
      backgroundPosition: options.backgroundPosition || 'center',
      backgroundColor: options.backgroundColor || 'black'
    });

    var def = $.Deferred();

    var $self = $(this);
    $.ajax({
      url:'https://api.unsplash.com/photos/random?client_id=' + global.fullBg.clientId,
      success: function(photo){
        $self.css('backgroundImage','url(' + photo.urls.regular + ')');
        return def.resolve($self);
      },
      error: function(){
        $self.css('backgroundImage','url('+ options.backgroundImage + ')');
        return def.reject($self);
      }
    });

    return def.promise();
  };

  global.fullBg = new FullBg();

})(window, jQuery);
