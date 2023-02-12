(function($){

   const obj = {
      init : function(){
         this.main();
      },

      main : function(){

         const sec6Top = $('#section6').offset().top;    //section6의 값이 되면 goTop 이미지 생성

         $(window).scroll(function(){
            if ( $(window).scrollTop() >= sec6Top ) {
               $('#goTop').addClass('on');
            }
            else {
               $('#goTop').removeClass('on');
            }
         })
      },
   }
   obj.init();
   
});