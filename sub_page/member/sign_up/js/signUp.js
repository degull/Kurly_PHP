(function($){

   const signUp = {

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
               
            }
         });
      }

   }

   signUp.init();

})(jQuery,window);