(function($){

   const obj = {
      init : function(){
         this.main();
      },

      main : function(){

         const $topModalClose = $('#topModal .top-modal-close');

         // 1. 탑모달 닫기 & 쿠키설정(일정기간동안 안열림)
         $($topModalClose).on({
            click : function(){
               $('#topModal').fadeOut(0);
               let newDate = new Date();
               newDate.setDate(newDate.getDate()+7);

               document.cookie = `KURLYTOPMODAL=shkurlytopmodal; path=/; expires = ${newDate.toUTCString()};`;
            }
         });

         function getCookie(){
            const cookie = document.cookie.split(';');   //쿠키를 세미콜론 단위로 나누어 처리
            let arr = [];

            //배열에 속성별 저장하기
            cookie.map((item, idx)=>{
               arr[idx] = {
                  쿠키이름 : item.split('=')[0].trim(),
                  쿠키값 : item.split('=')[1]
               }
            })

            // 쿠키 이름, 쿠기값이 일치한 쿠키를 찾는다
            arr.map((item)=>{

               if(item.쿠키이름==='KURLYTOPMODAL' && item.쿠키값==='shkurlytopmodal'){
                  $('#topModal').fadeOut(0);
                  return;
               }
               
            })
         }
         getCookie();
         
      }
   }
   obj.init();
   
})(jQuery);