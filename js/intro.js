(function($){

   let Kurly = {
      init : function(){   
         this.topModal();
         this.header();
         this.section1();
         this.section2();
         //this.section3();   //banner
         this.section4();
         //this.section5();   //banner
         this.section6();
         //this.section7();   //banner
         this.section8();  
         //this.section9();   //banner
         this.introModal();
         this.quickMenu();
         this.goTop();
      },

      topModal : function(){
         
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
      },

      introModal : function(){
        
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

      header: function(){

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

      section1: function(){
         //0. 가변 변수설정 / 불변변수
         let   cnt               = 0;
         let   setId             = 0;
         const $slideWrap        = $('#section1 .slide-wrap');
         const $currentPage      = $('#section1 .current-page');
         const $slideContainer   = $('#section1 .slide-container');
         const $arrow            = $('#section1 .arrow');   //좌우화살표
         const $arrowRightBtn    = $('#section1 .arrow-right-btn');
         const $arrowLeftBtn     = $('#section1 .arrow-left-btn');


         
         //1. 메인슬라이드함수
         function mainSlide(){ // 1 ~ 17
            $slideWrap.stop().animate({left: `${-100 * cnt}%` }, 600, 'easeInOutExpo', function(){
               if(cnt>17){cnt=0}   // 끝이면 처음으로 0
               if(cnt< 0){cnt=17}  // 처음이면 끝으로 17
               $slideWrap.stop().animate({left: `${-100 * cnt}%` }, 0); //순간이동 처음으로
            });
            $currentPage.text( cnt+1===19 ? 1 : (cnt+1===0 ? 18 : cnt+1) );

            // 슬라이드 왼쪽 좌표값 변경 상태 확인
            // console.log( $slideWrap.offset().left ); //좌우이동슬라이드
            // console.log( $slideWrap.offset().top );  상하이동슬라이드
         }

         //2. 다음카운트함수
         function nextCount(){
            cnt++; //1 
            mainSlide();
         }
         //2. 이전카운트함수
         function prevCount(){
            cnt--;
            mainSlide();
         }


         //3. 자동타이머함수
         function autoTimer(){
            clearInterval(setId); // 이전 셋팅된 메모리 내용 삭제
            setId=setInterval(nextCount, 4000); // 현재 셋팅된 메모리 실행
         }
         //4. 자동타이머함수실행
         autoTimer();


         //5. 슬라이드 컨테이너에 마우스 이벤트(Mouse Event)
         //   mouseenter: 화살버튼 부드럽게 나타난다. 페이드 인(fadeIn(1000)) / 슬라이드 정지
         //   mouseleave: 화살버튼 기본은 페이드 아웃(fadeOut(1000)) / 슬라이드 플레이
         $slideContainer.on({
            mouseenter: function(){
               $arrow.stop().fadeIn(600);
               clearInterval(setId); // 슬라이드 일시정지
            },
            mouseleave: function(){
               $arrow.stop().fadeOut(600);
               autoTimer(); // 슬라이드 플레이(타이머호출)
            }
         });

         //6-1. 다음화살버튼 클릭이벤트 : 일시 정지된 슬라이드  다음슬라이드
         $arrowRightBtn.on({
            click: function(e){
               e.preventDefault();
               nextCount();
            }
         });

         //6-2. 이전화살버튼 클릭이벤트 : 일시 정지된 슬라이드  이전슬라이드
         $arrowLeftBtn.on({
            click: function(e){
               e.preventDefault();
               prevCount();   
            }
         });


         //7. 터치 스와이프 : 선택자 슬라이드 콘테이터를 이용한다.         
         //   마우스의 터치  시작 위치와 터치가 끝나는 위치를 이용하여
         //   다음슬라이드와 이전슬라이드 판단하여 실행한다.
         let touchStart = null;
         let touchEnd = null;

         let mouseDown = false;  // 마우스 다운 상태를 기억 변수 0

         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         
         $slideContainer.on({
            mousedown: function(e){
               // winW = $(window).width();
               winW = $(window).innerWidth();
               // winW = $(window).outerWidth();
               touchStart = e.clientX; // 터치 시작
               dragStart = e.clientX-$slideWrap.offset().left-winW;  // 드래그 시작 - 슬라이드박스.offset().left-winW(창너비)
               mouseDown = true; // 터치 스와이프를 시작한다. 뜻 1
            },
            mouseup: function(e){ // 영역을 떠나고 마우스업을 하면 마우스 업 이벤트가 없다. 그래서 아래에 마우스리브 추가
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  // 다음슬라이드
                  nextCount();
               }
               if( touchStart-touchEnd < 0 ){
                  // 이전슬라이드
                  prevCount();
               }
               mouseDown = false; // 마우스다운을 초기화
            },                       
            mouseleave: function(e){ // 마우스가 영역을 떠나면 마우스 업 이벤트로 간주한다.
               // 마우스 다운이 아닌상태이면 절대 마우스리브 이벤트가 실행하면안된다.
               if(mouseDown===false) return; //리턴 종료
               
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  nextCount();   // 다음슬라이드
               }
               if( touchStart-touchEnd < 0 ){
                  prevCount();   // 이전슬라이드
               }
               mouseDown = false; // 마우스다운을 초기화

            },            
            mousemove: function(e){  // 마우스를 따라다니는 슬라이드 => 드래그 앤 드롭
               if( mouseDown===false ) return;  // 반드시 마우스 다운 상태에서만 드래그 앤 드롭
               dragEnd = e.clientX;  // 드래그 끝

               // 메인슬라이드 박스를 잡고 이동 그리고 놓기 => 드래그 앤 드롭
               $slideWrap.css({left: dragEnd-dragStart });  // 드래그 이동 거리 만큼 이동
            }

         });

      },

      section2: function(){
         let cnt=0;
         const $arrowRight       = $('#section2 .arrow-right');
         const $arrowLeft        = $('#section2 .arrow-left');
         const $slideContainer   = $('#section2 .slide-container');
         const $slideWrap        = $('#section2 .slide-wrap');
               

         // 1. 메인슬라이드함수
         mainSlide(); //초기실행
         function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%` }, 600,'easeInOutExpo');

            // 좌우 화살 버튼 
            cnt < 1 ? $arrowLeft.stop().fadeOut(300)  : $arrowLeft.stop().fadeIn(300);
            cnt > 3 ? $arrowRight.stop().fadeOut(300) : $arrowRight.stop().fadeIn(300);
         }

         // 2. 다음카운트함수
         function nextCount(){
            cnt++;
            if(cnt>4) cnt=4;
            mainSlide();
         }
         function prevCount(){
            cnt--;
            if(cnt<0) cnt=0;
            mainSlide();
         }

         // 3. 다음버튼클릭이벤트
         $arrowRight.on({
            click: function(e){
               e.preventDefault();
               nextCount();
            }
         });
         $arrowLeft.on({
            click: function(e){
               e.preventDefault();
               prevCount();
            }
         });

         
         
         // 터치 스와이프 & 드래그앤 드롭
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false;
         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         let conW = $slideContainer.innerWidth();
         
         $slideContainer.on({
            mousedown: function(e){
               winW = $(window).innerWidth();
               conW = $slideContainer.innerWidth();
               touchStart = e.clientX;
               // 섹션1 슬라이드 앞뒤 추가된거 그래서 -창너비
               // 섹션2 슬라이드 앞뒤 추가된게 없어요 그래서 창너비 빼면 안된다.
               // 슬라이드박스가 좌우 여백이 있는 경우 + (창너비-슬라이드박스너비)/2
               dragStart = e.clientX-$slideWrap.offset().left + (winW-conW)/2;
               mouseDown = true;
            },
            mouseup: function(e){
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  nextCount();
               }
               if( touchStart-touchEnd < 0 ){
                  prevCount();
               }
               mouseDown = false;
            },                       
            mouseleave: function(e){
               if(mouseDown===false) return;               
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  nextCount();
               }
               if( touchStart-touchEnd < 0 ){
                  prevCount();
               }
               mouseDown = false;
            },            
            mousemove: function(e){
               if( mouseDown===false ) return;
               dragEnd = e.clientX;
               $slideWrap.css({left: dragEnd-dragStart });
            }

         });


 
      },

      section4: function(){
         let cnt=0;
         const $arrowRight       = $('#section4 .arrow-right');
         const $arrowLeft        = $('#section4 .arrow-left');
         const $slideContainer   = $('#section4 .slide-container');
         const $slideWrap        = $('#section4 .slide-wrap');
               

         // 1. 메인슬라이드함수
         mainSlide(); //초기실행
         function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%` }, 600,'easeInOutExpo');

            // 좌우 화살 버튼 
            cnt < 1 ? $arrowLeft.stop().fadeOut(300)  : $arrowLeft.stop().fadeIn(300);
            cnt > 3 ? $arrowRight.stop().fadeOut(300) : $arrowRight.stop().fadeIn(300);
         }

         // 2. 다음카운트함수
         function nextCount(){
            cnt++;
            if(cnt>4) cnt=4;
            mainSlide();
         }
         function prevCount(){
            cnt--;
            if(cnt<0) cnt=0;
            mainSlide();
         }

         // 3. 다음버튼클릭이벤트
         $arrowRight.on({
            click: function(e){
               e.preventDefault();
               nextCount();
            }
         });
         $arrowLeft.on({
            click: function(e){
               e.preventDefault();
               prevCount();
            }
         });

         
         
         // 터치 스와이프 & 드래그앤 드롭
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false;
         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         let conW = $slideContainer.innerWidth();
         
         $slideContainer.on({
            mousedown: function(e){
               winW = $(window).innerWidth();
               conW = $slideContainer.innerWidth();
               touchStart = e.clientX;
               // 섹션1 슬라이드 앞뒤 추가된거 그래서 -창너비
               // 섹션2 슬라이드 앞뒤 추가된게 없어요 그래서 창너비 빼면 안된다.
               // 슬라이드박스가 좌우 여백이 있는 경우 + (창너비-슬라이드박스너비)/2
               dragStart = e.clientX-$slideWrap.offset().left + (winW-conW)/2;
               mouseDown = true;
            },
            mouseup: function(e){
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  nextCount();
               }
               if( touchStart-touchEnd < 0 ){
                  prevCount();
               }
               mouseDown = false;
            },                       
            mouseleave: function(e){
               if(mouseDown===false) return;               
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  nextCount();
               }
               if( touchStart-touchEnd < 0 ){
                  prevCount();
               }
               mouseDown = false;
            },            
            mousemove: function(e){
               if( mouseDown===false ) return;
               dragEnd = e.clientX;
               $slideWrap.css({left: dragEnd-dragStart });
            }

         });
      },

      section6: function(){
         let cnt=0;
         const $arrowRight       = $('#section6 .arrow-right');
         const $arrowLeft        = $('#section6 .arrow-left');
         const $slideContainer   = $('#section6 .slide-container');
         const $slideWrap        = $('#section6 .slide-wrap');
               

         // 1. 메인슬라이드함수
         mainSlide(); //초기실행
         function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%` }, 600,'easeInOutExpo');

            // 좌우 화살 버튼 
            cnt < 1 ? $arrowLeft.stop().fadeOut(300)  : $arrowLeft.stop().fadeIn(300);
            cnt > 3 ? $arrowRight.stop().fadeOut(300) : $arrowRight.stop().fadeIn(300);
         }

         // 2. 다음카운트함수
         function nextCount(){
            cnt++;
            if(cnt>4) cnt=4;
            mainSlide();
         }
         function prevCount(){
            cnt--;
            if(cnt<0) cnt=0;
            mainSlide();
         }

         // 3. 다음버튼클릭이벤트
         $arrowRight.on({
            click: function(e){
               e.preventDefault();
               nextCount();
            }
         });
         $arrowLeft.on({
            click: function(e){
               e.preventDefault();
               prevCount();
            }
         });

         
         
         // 터치 스와이프 & 드래그앤 드롭
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false;
         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         let conW = $slideContainer.innerWidth();
         
         $slideContainer.on({
            mousedown: function(e){
               winW = $(window).innerWidth();
               conW = $slideContainer.innerWidth();
               touchStart = e.clientX;
               // 섹션1 슬라이드 앞뒤 추가된거 그래서 -창너비
               // 섹션2 슬라이드 앞뒤 추가된게 없어요 그래서 창너비 빼면 안된다.
               // 슬라이드박스가 좌우 여백이 있는 경우 + (창너비-슬라이드박스너비)/2
               dragStart = e.clientX-$slideWrap.offset().left + (winW-conW)/2;
               mouseDown = true;
            },
            mouseup: function(e){
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  nextCount();
               }
               if( touchStart-touchEnd < 0 ){
                  prevCount();
               }
               mouseDown = false;
            },                       
            mouseleave: function(e){
               if(mouseDown===false) return;               
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  nextCount();
               }
               if( touchStart-touchEnd < 0 ){
                  prevCount();
               }
               mouseDown = false;
            },            
            mousemove: function(e){
               if( mouseDown===false ) return;
               dragEnd = e.clientX;
               $slideWrap.css({left: dragEnd-dragStart });
            }

         });
      },

      section8: function(){
         let cnt=0;
         const $arrowRight       = $('#section8 .arrow-right');
         const $arrowLeft        = $('#section8 .arrow-left');
         const $slideContainer   = $('#section8 .slide-container');
         const $slideWrap        = $('#section8 .slide-wrap');
               

         // 1. 메인슬라이드함수
         mainSlide(); //초기실행
         function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%` }, 600,'easeInOutExpo');

            // 좌우 화살 버튼 
            cnt < 1 ? $arrowLeft.stop().fadeOut(300)  : $arrowLeft.stop().fadeIn(300);
            cnt > 3 ? $arrowRight.stop().fadeOut(300) : $arrowRight.stop().fadeIn(300);
         }

         // 2. 다음카운트함수
         function nextCount(){
            cnt++;
            if(cnt>4) cnt=4;
            mainSlide();
         }
         function prevCount(){
            cnt--;
            if(cnt<0) cnt=0;
            mainSlide();
         }

         // 3. 다음버튼클릭이벤트
         $arrowRight.on({
            click: function(e){
               e.preventDefault();
               nextCount();
            }
         });
         $arrowLeft.on({
            click: function(e){
               e.preventDefault();
               prevCount();
            }
         });

         
         
         // 터치 스와이프 & 드래그앤 드롭
         let touchStart = null;
         let touchEnd = null;
         let mouseDown = false;
         let dragStart = null;
         let dragEnd = null;
         let winW = 1903;
         let conW = $slideContainer.innerWidth();
         
         $slideContainer.on({
            mousedown: function(e){
               winW = $(window).innerWidth();
               conW = $slideContainer.innerWidth();
               touchStart = e.clientX;
               // 섹션1 슬라이드 앞뒤 추가된거 그래서 -창너비
               // 섹션2 슬라이드 앞뒤 추가된게 없어요 그래서 창너비 빼면 안된다.
               // 슬라이드박스가 좌우 여백이 있는 경우 + (창너비-슬라이드박스너비)/2
               dragStart = e.clientX-$slideWrap.offset().left + (winW-conW)/2;
               mouseDown = true;
            },
            mouseup: function(e){
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  nextCount();
               }
               if( touchStart-touchEnd < 0 ){
                  prevCount();
               }
               mouseDown = false;
            },                       
            mouseleave: function(e){
               if(mouseDown===false) return;               
               touchEnd = e.clientX;
               if( touchStart-touchEnd > 0 ){
                  nextCount();
               }
               if( touchStart-touchEnd < 0 ){
                  prevCount();
               }
               mouseDown = false;
            },            
            mousemove: function(e){
               if( mouseDown===false ) return;
               dragEnd = e.clientX;
               $slideWrap.css({left: dragEnd-dragStart });
            }

         });
      },

      quickMenu: function(){

         //scrollTop 값이 300px 이상아면 고정하는 이벤트
         $(window).scroll(function(){
            if( $(window).scrollTop() >= 300 ){
               $('#quickMenu').addClass('on');
            }
            else {
               $('#quickMenu').removeClass('on');
            }
         })
      },

      goTop: function(){
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

   Kurly.init();

})(jQuery);