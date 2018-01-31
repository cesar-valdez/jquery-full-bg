/*
* jquery-full-bg
* @version 0.0.0-development
* @Cesar Valdez
* @license MIT
*/

(function($){

  $.fn.FullBg = function(){
    $(this).css({
      width:'100%',
      height:'100vh',
      minHeight:'800px'
    });
    return $(this);
  };
})(jQuery);
