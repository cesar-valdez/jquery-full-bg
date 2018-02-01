/*
* jquery-full-bg
* @version 0.0.0-development
* @Cesar Valdez
* @license MIT
*/

(function($){

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
    return $(this);
  };
})(jQuery);
