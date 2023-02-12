(function($){
   const obj = {
      init : function(){
         this.main();
      },

      main : function(){


         const  $serviceCenterBtn  =  $('#header .service-center-btn');
         const  $serviceBox        =  $('#header .service-box');
         const  $mapTooltipBtn     =  $('#header .map-tooltip-btn');
         const  $mapTooltipBox     =  $('#header .map-tooltip-box');
         const  $topTooltip        =  $('#header .top-tooltip');
         const  $mapTooltipMenu    =  $('#header .map-tooltip-menu');

         
         // 고객센터 버튼에 마우스 올리면
         $serviceCenterBtn.on({
            mouseenter: function(){
               $topTooltip.show();
            }
         });

         // 해당칸을 마우스가 떠나면 툴팁메뉴 숨김
         $serviceBox.on({
            mouseleave: function(){
               $topTooltip.hide();
            }
         });

         // 배송지 마우스 오버 이벤트
         $mapTooltipBtn.on({
            mouseenter: function(){
               $mapTooltipMenu.show();
            }
         });

         // 배송지 박스 영역을 떠나면 툴팁메뉴 숨김
         $mapTooltipBox.on({
            mouseleave: function(){
               $mapTooltipMenu.hide();
            }
         })

         //윈도우 스크롤 이벤트
         //scroll top 값이 100px 이상이면 헤더영역 scroll event 발생(row3 고정)
         $(window).scroll(function(){
            if( $(window).scrollTop() >= 100 ){
               $('#header .row3').addClass('on');
            }
            else {
               $('#header .row3').removeClass('on');
            }
         })

      },
   }
   obj.init();
   
})(jQuery);