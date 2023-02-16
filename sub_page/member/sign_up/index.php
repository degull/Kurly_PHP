<!DOCTYPE html>
<html lang="ko">

<?php
   include_once('../config.php');
?>


<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>마켓컬리 | 회원가입</title>
   <link rel="stylesheet" href="<?=$home_path?>css/style.css">
   <link rel="stylesheet" href="./css/style.css">
   <script src="<?=$home_path?>js/lib/jquery-2.2.4.min.js"></script>
   <script src="<?=$home_path?>js/lib/jquery.easing.1.3.js"></script>
</head>
<body>

   <div id="wrap">

   <?php
      include_once($home_path. 'top_modal.php');         /* top_modal.php */
      include_once($home_path. 'header.php');            /* header.php */
   ?>

   <main id="mainSignUp">
      <section id="signUpsection">
         <div class="container">
            <div class="title">
               <h2>회원가입</h2>
               <span><i>*</i>필수입력사항</span>
            </div>

            <div class="content">
               <form action="./sign_up.php" name="signup_form" id="signUpForm" method="post">
                  <ul>
                     <li>
                        <div>
                           <em>아이디<i>*</i></em>
                           <input type="text" name="" id="" maxlength="16" placeholder="아이디를 입력해주세요.">
                           <button class="id-ok-btn">중복확인</button>
                        </div>
                        <p class="isError"></p>
                     </li>

                     <li>
                        <div>
                           <em>비밀번호<i>*</i></em>
                           <input type="text" name="" id="" maxlength="16" placeholder="비밀번호를 입력해주세요.">
                        </div>
                        <p class="isError"></p>
                     </li>

                     <li>
                        <div>
                           <em>비밀번호확인<i>*</i></em>
                           <input type="text" name="" id="" maxlength="16" placeholder="비밀번호를 한번 더 입력해주세요.">
                        </div>
                        <p class="isError"></p>
                     </li>

                     <li>
                        <div>
                           <em>이름<i>*</i></em>
                           <input type="text" name="" id="" maxlength="16" placeholder="이름을 입력해주세요.">
                        </div>
                        <p class="isError"></p>
                     </li>

                     <li>
                        <div>
                           <em>이메일<i>*</i></em>
                           <input type="text" name="" id="" maxlength="16" placeholder="예: marketkurly@kurly.com">
                           <button class="email-ok-btn">중복확인</button>
                        </div>
                        <p class="isError"></p>
                     </li>

                     <li class= "hp hp1">
                        <div>
                           <em>휴대폰<i>*</i></em>
                           <input type="text" name="" id="" maxlength="16" placeholder="숫자만 입력해주세요.">
                           <button class="hp-num-btn">인증번호 받기</button>
                           <button class="hp-num-btn2">다른번호 인증</button>
                        </div>
                     </li>

                     <li class= "hp hp2"> <!-- 인증번호 성공 시 -->
                        <div>
                           <input type="text" name="" id="" placeholder="인증번호를 입력해주세요.">
                           <span class="hp-count"><i class="count-minutes">02</i>:<i class="count-seconds">59</i></span>
                           <button class="hp-ok-btn">인증번호 확인</button>
                        </div>
                     </li>

                     <li class="addr addr1">
                        <div>
                           <em>주소<i>*</i></em>
                           <input type="text" name="" id="" placeholder="주소검색 API">
                           <button class="addr-research-btn"><img src="./img/ico_search.svg" alt="">재검색</button>
                        </div>
                     </li>

                     <li class="addr addr2">
                        <div>
                           <input type="text" name="" id="" placeholder="나머지 주소를 입력해주세요.">
                        </div>
                     </li>

                     <li class="addr addr3">
                        <div>
                           <em>주소<i>*</i></em>
                           <button class="addr-search-btn"><img src="./img/ico_search.svg" alt="">주소검색</button>
                        </div>
                     </li>

                     <li class="addr addr4">
                        <div>
                           <strong>샛별배송</strong>
                           <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
                        </div>
                     </li>

                     <li class="radio">
                        <div>
                           <em>성별</em>
                           <label for="male"><input type="radio" name="gender" id="male" value="남성">남성</label>
                           <label for="female"><input type="radio" name="gender" id="female" value="여성">여성</label>
                           <label for="none"><input type="radio" name="gender" id="none" value="선택안함">선택안함</label>
                        </div>
                     </li>

                     <li class="birth">
                        <div>
                           <em>생년월일</em>
                           <ul class="birth-box">
                              <li><input type="text" name="birth_year" id="birthYear" placeholder="YYYY"></li>
                              <li>/</li>
                              <li><input type="text" name="birth_month" id="birthMonth" placeholder="MM"></li>
                              <li>/</li>
                              <li><input type="text" name="birth_date" id="birthDate" placeholder="DD"></li>
                           </ul>
                        </div>
                     </li>

                     <li class="radio">
                        <div>
                           <em>추가입력 사항</em>
                           <label for="addInput1"><input type="radio" name="addInput" id="addInput1" value="친구초대 추천인 아이디">친구초대 추천인 아이디</label>
                           <label for="addInput2"><input type="radio" name="addInput" id="addInput2" value="참여 이벤트명">참여 이밴트명</label>
                        </div>
                     </li>

                     <li class="radio add-input">
                        <div>
                           <input type="text" name="add_input_box" id="addInputBox1" placeholder="추천인 아이디를 입력해 주세요">
                           <input type="text" name="add_input_box" id="addInputBox2" placeholder="참여 이벤트명을 입력해 주세요">
                           <button class="id-search-btn"><img src="./img/ico_search.svg" alt="">아이디 확인</button>
                        </div>
                     </li>

                     <li class="radio add-input">
                        <div>
                           <p class="add-input-p1">
                              가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.
                           </p>
                           <p class="add-input-p2">
                              추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br>
                              가입 이후는 수정이 불가능 합니다.<br>
                              대소문자 및 띄어쓰기에 유의해주세요.
                           </p>
                        </div>
                     </li>

                     <li class="row-line">
                        <div>
                           <hr>
                        </div>
                     </li>

                     <li class="service service-all">
                        <div>
                           <em>이용약관동의<i>*</i></em>
                           <label for="checkAll"><input type="checkbox" name="check_all" id="checkAll" value="전체 동의합니다.">전체 동의합니다.</label>
                           <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                        </div>
                     </li>

                     <li class="service">
                        <div>
                           <label for="check1"><input type="checkbox" name="check_1" id="check1" value="이용약관 동의">이용약관 동의 <i>(필수)</i></label>
                        </div>
                     </li>

                     <li class="service">
                        <div>
                           <label for="check2"><input type="checkbox" name="check_2" id="check2" value="개인정보 수집∙이용 동의(필수)">개인정보 수집∙이용 동의 <i>(필수)</i></label>
                        </div>
                     </li>

                     <li class="service">
                        <div>
                           <label for="check3"><input type="checkbox" name="check_3" id="check3" value="개인정보 수집∙이용 동의(선택)">개인정보 수집∙이용 동의 <i>(선택)</i></label>
                        </div>
                     </li>

                     <li class="service">
                        <div>
                           <label for="check4"><input type="checkbox" name="check_4" id="check4" value="무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)">무료배송, 할인쿠폰 등 혜택/정보 수신 동의 <i>(선택)</i></label>
                        </div>
                     </li>

                     <li class="service check56">
                        <div>
                           <label for="check5"><input type="checkbox" name="check_5" id="check5" value="SNS">SNS</label>
                           <label for="check6"><input type="checkbox" name="check_6" id="check6" value="이메일">이메일</label>
                           <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                        </div>
                     </li>

                     <li class="service">
                        <div>
                           <label for="check7"><input type="checkbox" name="check_7" id="check7" value="본인은 만 14세 이상입니다.(필수)">본인은 만 14세 이상입니다. <i>(필수)</i></label>
                        </div>
                     </li>

                     <li class="row-line bottom-line">
                        <div>
                           <hr>
                        </div>
                     </li>

                     <li class="button-box">
                        <div>
                           <button type="submit" class="submit-btn">가입하기</button>
                        </div>
                     </li>


                  </ul>
               </form>
            </div>
         </div>
      </section>
   </main>





<?php
      include_once($home_path. 'footer.php');            /* footer.php */
      include_once($home_path. 'intro_modal.php');       /* intro_modal.php */
      include_once($home_path. 'quick_menu.php');        /* quick_menu.php */
      include_once($home_path. 'go_top.php');            /* go_top.php */
?>

   </div>



   <!-- js 연결 -->
<script scr = "./js/signUP.js"></script>

<script src = "<?=$home_path?>js/intro.js"></script>
<script src = "<?=$home_path?>js/top_modal.js"></script>
<script src = "<?=$home_path?>js/intro_modal.js"></script>
<script src = "<?=$home_path?>js/header.js"></script>
<script src = "<?=$home_path?>js/quick_menu.js"></script>
<script src = "<?=$home_path?>js/go_top.js"></script>



</body>
</html>

