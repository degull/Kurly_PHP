(function($){

   const obj = {
      init : function(){
         this.main();
      },

      main : function(){
        
         const $closeOpenNoneBtn = ('.introModal .close-open-none-btn');
         const $closeBtn         = ('.introModal .close-btn');

         $($closeBtn).on({    //just 닫기
            click : function(e){
               e.preventDefault();
               $('.introModal').fadeOut(600);
            }
         });

         $($closeOpenNoneBtn).on({  //영원히 닫기
            click : function(e){
               e.preventDefault();
               $('.introModal').fadeOut(600);
               //로컬스토리지(영원히 닫기)
               localStorage.setItem('KURLYINTROMODAL' , 'shkurlyintromodal');
            }

         });

         if(localStorage.getItem('KURLYINTROMODAL') != null) {
            $('.introModal').fadeOut(600);
         }
         else {
            $('.introModal').fadeIn(600);
         }
      },
   }
   
   obj.init();
   

})(jQuery);