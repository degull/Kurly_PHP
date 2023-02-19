(($,window,document)=>{

   const SignUp = {

      /* 최상위 변수 : 데이터를 받아 보관 */
      member : {
         아이디 : '',
         아이디중복확인 : false,

         비밀번호 : '',
         비밀번호중복확인 : false,

         이름 : '',

         이메일 : '',
         이메일중복확인 : false,

         휴대폰 : '',
         휴대폰인증번호 : 0,
         분 : 2,
         초 : 59,
         setId : 0,

         주소 : '',
         성별 : '',
         생년월일 : '',
         추가입력사항 : '',
         이용약관동의 : []
      },

      init(){
         this.main();
      },

      main(){
         const that = this;

         // 1. 아이디 입력상자
         $('#userId').on({
            keyup(){    //입력상자에 입력되면

               const regExp1 = /[`~!@#$%^&*()_=+/|\\\[\]\\\{}"';:\/?\.\,>,<]/g;    //특수문자
               const regExp2 = /[가-하ㄱ-ㅎㅏ-ㅣ]/g;    //한글
               const regExp3 = /[A-Za-z]+[0-9]/g;    //영문+숫자 조합
               const regExp4 = /.{6,16}/g;   //모든 글자는.  && 6~16자 이하
               const regExp5 = /(.)\1\1\1/g;    //동일한 연속된 문자 3글자 이상
               const regExp6 = /\s/g;     //공백


               /* 입력된 문자가 특수문자라면 공백으로 치환 */
               $(this).val( $(this).val().replace(regExp1, '') );   
               
               /* 입력된 문자가 한글이라면 &  영문+숫자 조합이 아니라면 & 6~16자 이상이라면 & 동일문자가 3개 이상이라면 & 공백이 있다면*/
               if (regExp2.test($(this).val()) === true || regExp3.test($(this).val()) === false || regExp4.test($(this).val()) === false || regExp5.test($(this).val()) === true || regExp6.test($(this).val()) === true) {
                  $(this).parent().next().addClass('on').text("6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 한글허용안함, 공백허용안함, 동일한 문자 연속 3자 이상 허용 안함");
               }

               else {
                  $(this).parent().next().removeClass('on');
                  that.member.아이디 = $(this).val();
               }

            }
         });


         // 2. 비밀번호 입력상자
         $('#userPass').on({
            keyup(){

               const regExp1 = /([0-9]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+|([A-Za-z]+[0-9]+)+|([A-Za-z]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+/g;    //영문 | 영문+숫자
               const regExp2 = /.{10,}/g;    //10자 이상
               const regExp3 = /[가-하ㄱ-ㅎㅏ-ㅣ]/g;    //한글
               const regExp4 = /\s/g;  //공백
               const regExp5 = /(.)\1\1/g;    //동일한 연속된 글자 3자

               if (regExp1.test( $(this).val() ) === false || regExp2.test( $(this).val() ) === false || regExp3.test( $(this).val() ) === true || regExp4.test( $(this).val()) === true || regExp5.test( $(this).val()) === true) {
                  $(this).parent().next().addClass('on').text('영문/숫자/특수문자만 허용하며, 2게 이상 조합');
               }
               else {
                  $(this).parent().next().removeClass('on');
                  that.member.비밀번호 =  $(this).val();
               }
            }
         });


         // 3. 비밀번호 확인 입력상자
         $('#userPass2').on({
            keyup(){
               if ($('#userPass').val() !== $('#userPass2').val()) {
                  $(this).parent().next().addClass('on').text("동일한 비밀번호를 입력");
               }
               else {
                  $(this).parent().next().removeClass('on');
                  that.member.비밀번호중복확인 = true;
               }
            }
         });


         // 4. 이름입력상자
         $('#userName').on({
            keyup(){
               const regExp1 = /[`~!@#$%^&*()_-+=|\\\[\]\\\{}"':;\/\?/./,<,>]/g;    //특수문자
               const regExp2 = /[A-Za-z0-9가-하ㄱ-ㅎㅏ-ㅣ\s]{1,20}/g;      //영문숫자한글공백


               $(this).val( $(this).val().replace(regExp1, ''));

               if (regExp2.test($(this).val()) === false){
                  $(this).parent().next().addClass('on').text("이름을 입력해주세요");
               }
               else {
                  $(this).parent().next().removeClass('on');
                  that.member.이름 = $(this).val();
               }
            }
         });


         // 5. 이메일 입력상자
         $('#userEmail').on({
            keyup(){
               const regExp1 = /^[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]+[\.]?[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]*@[A-Za-z0-9~\-_\.]+\.[A-Za-z]{2,3}$/g;  // 이메일
               const regExp2 = /\s/g;     //공백

               if ($(this).val()!='') {
                  if (regExp1.test($(this).val()) === false || regExp2.test($(this).val()) === true) {
                     $(this).parent().next().addClass('on').text("이메일 형식으로 입력해주세요");
                  }
                  else {
                     $(this).parent().next().removeClass('on');
                     that.member.이메일 = $(this).val();
                  }
               }

               else {
                  $(this).parent().next().addClass('on').text("이메일을 입력해주세요");
               }
            }
         });


         // 6. 휴대폰 입력상자
         $('#userPhone').on({
            keyup(){
               if ($(this).val().length >= 1) {
                  $('.hp-num-btn').addClass('on').prop('disabled',false);
               }
               else {
                  $('.hp-num-btn').removeClass('on');
                  that.member.휴대폰 = $(this).val();
               }
            }
         });


         // 7. 타이머 카운트다운 알고리즘 구현
         function timerCountDown(){
            that.member.setId = setInterval(function(){
               that.member.초--;
               if (that.member.초 < 0) {
                  that.member.초 = 59;
                  that.member.분--;
                  if (that.member.분 < 0) {
                     clearInterval(that.member.setId);

                     $('#formEventModal').fadeIn(300);
                     $('#formEventModal .msg').html("유효시간이 만료되었습니다. 다시 시도해주세요.");
                     $('.hp2').removeClass('on');
                     that.member.초 = 59;
                     that.member.분 = 2;
                  }
               }

               // 분/초가 두자리로 표시되도록(01:05)
               // 10미만이면 1자리. 따라서 문자열0을 추가
               $('.count-minutes').text( that.member.분 < 10 ? `0${that.member.분}` : that.member.분);
               $('.count-seconds').text( that.member.초 < 10 ? `0${that.member.초}` : that.member.초);
            },1000);
         }


         // 8. 휴대폰 인증번호 받기 이벤트
         $('.hp-num-btn').on({
            click(e){
               e.preventDefault();

               const regExp1 = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;

               if ( regExp1.test( $(this).val()) === false){
                  $('#formEventModal').fadeIn(300);
                  $('#formEventModal .msg').html('잘못된 휴대폰 번호 입니다');
               }

               else {
                  $('.hp2').addClass('on');
                  const randomNum = Math.floor(Math.random() * 90000+100000);

                  $('#formEventModal').fadeIn(300);
                  $('#formEventModal msg').html(`인증번호가 발송되었습니다. ${randomNum}`);
                  that.member.휴대폰인증번호 = randomNum;
                  timerCountDown();
               }
            }
         });



         // 9. 폼 이벤트 모달 닫기 버튼 클릭 이벤트
         $('.msg-modal-close-btn').on({
            click(e){
               e.preventDefault();
               $('#formEventModal').fadeOut(300);
            }
         });


         // 10. 인증번호 입력창 on
         $('#userhpNumBox').on({
            keyup(){
               if ($(this).val().length >= 1) {
                  $('.hp-ok-btn').addClass('on').prop('disabled', false);
               }
               else {
                  $('.hp-ok-btn').removeClass('on').prop('disabled', true);
               }
            }
         });


         // 11. 인증번호 확인 버튼 클릭 이벤트
         // 1) 전송된 인증번호와 입력된 인증번호 비교
         $('.hp-ok-btn').on({
            click(e){
               e.preventDefault();
               //console.log( Number($('#userHpNumBox').val()) );
               //console.log(that.member.휴대폰인증번호);

               if (Number($('#userHpNumBox').val()) === that.member.휴대폰인증번호) {
                  $('#formEventModal').fadeIn(300);
                  $('#formEventModal .msg').html('인증에 성공하였습니다.' );

                  $('.hp-num-btn2').addClass('on');   //다른 번호 인증 버튼 보이기
                  $('.hp-num-btn').addClass('off');   //인증번호 받기 버튼 숨기기
               }
               else {
                  $('#formEventModal').fadeIn(300);
                  $('#formEventModal .msg').html('잘못된 인증코드 입니다.' );
               }
            }
         });


         

         // 12. 다른번호 인증
         $('.hp-num-btn2').on({
            click(e) {
               e.preventDefault();
               $('.hp-num-btn').removeClass('off');   //인증번호 받기 버튼 숨기기
               $('.hp-num-btn2').removeClass('on');   //다른 번호 인증 버튼 보이기
               $('.hp2').removeClass('on');           //인증번호 입력상자, 버튼 모두 숨기기
               clearInterval(that.member.setId);
               that.member.초 = 59;
               that.member.분 = 2;
            }
         });












         // 13 . 주소 검색 버튼 클릭 이벤트 : 카카오 주소 검색 API
         $('.addr-search-btn').on({
            click(e){
               e.preventDefault();
               window.open('./popup.html','_address_search_popup','width:530px, height:569px, top=0, left=0');
            }
         });
      },

   }

   SignUp.init();

})(jQuery,window,document);