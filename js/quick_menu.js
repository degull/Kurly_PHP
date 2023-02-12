(function($){

   const obj = {
      init : function(){
         this.main();
      },

      main : function(){
         

         //scrollTop 값이 300px 이상아면 고정하는 이벤트
         $(window).scroll(function(){
            if( $(window).scrollTop() >= 300 ){
               $('#quickMenu').addClass('on');
            }
            else {
               $('#quickMenu').removeClass('on');
            }
         })
         
      }
   }
   obj.init();

})(jQuery);