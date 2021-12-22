<!DOCTYPE html>
<head>
	<meta name="viewport" content="width=1280" />
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Photo Gallery</title>
	<link type="text/css" rel="stylesheet" href="css/style.css" />
	<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.touchSwipe.min.js"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.min.js"></script>
	<script type="text/javascript" src="js/slider-reverse-min.js"></script>
</head>

<body>


	<script>
       $(document).ready(function () {
	             $.ajax({
	                 url: 'xml2.xml',
	                 type: 'GET',
	                 dataType: "xml",
	                 error: function () {
	                     $('.slider-wrapper').text("Ошибка!");
	                 },
	                 success: function (xml) {
	                     $(xml).find('list').each(function () {
	                         $(this).find('path').each(function () {
	                             $('.slider-wrapper').append('<div class="slider-box" style="background-image: url(\'' + $(this).text() + '\');"></div>');
															 $('.gallery-wrapper').append('<img style = "width: 400px; height: 200px; padding-left : 10px; 	padding-right: 10px;" src="' + $(this).text() + '">');
	                         });
	                     });
	                 }
	             });

							 window.setTimeout(function(){
								 $('.slider-wrapper').show();
							 }, 100);

							 window.setTimeout(function(){
					 			$(".slider-wrapper").sliderReverse({
					 				animateType   : false,
					 				autoPlaySpeed : 1500,
					 				btnsText      : {
					 					next      : "",
					 					prev      : "",
					 					play      : "",
					 					pause     : ""
					 				},
					 				hoverPause    : true,
					 				navigation    : true,
					 				speed         : "normal",
					 				swipe         : true,
					 				swipeLimit    : 100,
					 				responsive    : false,
					 				width         : "800px"
					 			});
					 		}, 1000);
         });
  </script>
	<br><br>
	<h1><center>Фото - слайдер</center></h1>
	<div class="slider-wrapper">

	</div>
	<br><br>
	<h1><center>Фото - галерея</center></h1>
	<br><br>
	<div class="gallery-wrapper">

	</div>

<br><br><br>	<br><br><br>





<br><br><br>	<br><br><br>
					<h1><center>Робота з фотографіями</center></h1>
          <br>
          <br>
					<div style="padding-left: 400px;">
		          <form id= "myform" method="POST">
		                  <p>
		                      <h4>Ведіть назву картинки<input type = "name" id="input-img" name="img"></h4>
		                  </p>

		                  <h4><input id="send-button" type="submit" value = "Додати"></h4>
		          </form>
					</div>

          <?php
              $img0 = $_POST["img"];
              $img = "img/" . $img0;
              if($img != "img/"){
                  $temp = file_get_contents("xml2.xml");
                  $list = new SimpleXMLElement($temp);
                  $array = array();
                  foreach ($list->path as $path) {
                      array_push($array, (string)$path);
                  }
                  array_push($array, $img);
									$array = array_flip($array);
									$array = array_flip($array);
                  $finalXml = "<list>\n";
									foreach ($array as &$value) {
											$finalXml .= "  <path>" . $value . "</path>\n";
									}
                  $finalXml .= "</list>";
                  $xml = fopen('xml2.xml', 'w');
                  fwrite($xml, $finalXml);
                  fclose($xml);
              }
          ?>
					<br><br><br><br>
					<div style="padding-left: 400px;">
							<form id= "myform2" method="POST">
											<p>
													<h4>Ведіть назву картинки<input type = "name" id="input-img2" name="img2"></h4>
											</p>

											<h4><input id="send-button2" type="submit" value = "Видалити"></h4>
							</form>
					</div>

					<?php
							$img0 = $_POST["img2"];
							$img = "img/" . $img0;
							if($img != "img/"){
									$temp = file_get_contents("xml2.xml");
									$list = new SimpleXMLElement($temp);
									$array = array();
									foreach ($list->path as $path) {
											array_push($array, (string)$path);
									}
									$array = array_flip($array);
									$index = $array[$img];
									$array = array_flip($array);
									unset ($array[$index]) ;
									$finalXml = "<list>\n";
									foreach ($array as &$value) {
											$finalXml .= "  <path>" . $value . "</path>\n";
									}
									$finalXml .= "</list>";
									$xml = fopen('xml2.xml', 'w');
									fwrite($xml, $finalXml);
									fclose($xml);
							}
					?>

<br><br><br><br><br><br><br><br>
</body>
</html>
