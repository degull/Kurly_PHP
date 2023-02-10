<!DOCTYPE html>
<html lang="ko">

<?php
   include_once('./config.php');
?>


<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>마켓컬리</title>
   <link rel="stylesheet" href="./css/style.css">
   <script src="./js/lib/jquery-2.2.4.min.js "></script>
   <script src="./js/lib/jquery.easing.1.3.js "></script>
</head>
<body>

   <div id="wrap">

   <?php
      include_once($home_path. 'top_modal.php');
      include_once($home_path. 'header.php');
      include_once($home_path. 'main.php');
      include_once($home_path. 'footer.php');
      include_once($home_path. 'intro_modal.php');
      include_once($home_path. 'quick_menu.php');
      include_once($home_path. 'go_top.php');
   ?>

   </div>

<script src="./js/intro.js"></script>
</body>
</html>

