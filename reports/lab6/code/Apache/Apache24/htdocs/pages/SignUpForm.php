<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Create Account</title>
		<link rel="stylesheet" href="../assets/styles/Account.css">
		<link rel="stylesheet" href="../assets/styles/style.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,800;0,900;1,100;1,200;1,800&display=swap"> 
	</head>
	<body>
		<div class="header">
			<div class="container">
				<div class="header_inner">            
					<a href="../index.html"><div class="logo"> SearchUp! </div></a>
				</div>
			</div>
		</div>
		
		<div class="space"></div>

		<div class = "registration">
			<form method="POST" action="">
				<p>
					<h4>Nickname :
					<input class="text-field" name="nickname"></h4>
				</p>
				<p>
					<h4>First name :
					<input class="text-field" name="first name"></h4>
				</p>
				<p>
					<h4>Second name :
					<input class="text-field" name="second name"></h4>
				</p>
				<p>
					<h4>Email :
					<input class="text-field" name="email"></h4>
				</p>
				<p>
					<h4>Password :
					<input class="text-field" name="password" type = "password"></h4>
				</p>
				<p>
					<h4>Password more one :
					<input class="text-field" name="password check" type = "password"></h4>
				</p>
				<p>
					<h4>Gender :
					<input name="dzen" type="radio" value="nedzen"> <span>Male</span>
					<input name="dzen" type="radio" value="dzen"> <span>Female</span>
					</h4>
				</p>
				<p>
					<h4>Birthday :
					<input type="date" name="calendar"></h4>
				</p>
				<p>
					<h4>Phone :
					<input type="tel" name="tel" pattern="+380[0-9]{9}"></h4>
				</p>

				<p><h4>Choose interesting activities for you :</h4></p>
					<p><input type="checkbox" name="board games" value="board games"> <span>board games</span> </p>
					<p><input type="checkbox" name="karaoke" value="karaoke" > <span>karaoke</span> </p>
					<p><input type="checkbox" name="night club" value="night club" onclick="age_alert(this)"> <span>evening at a night club</span> </p>
					<p><input type="checkbox" name="active games" value="active games"> <span>active games outside</span> </p>
					<p><input type="checkbox" name="literatury evening" value="literatury evening"> <span>literature evenings</span> </p>

				<p><input id="send-button" type="submit" value = "Send"></p>
			</form>
			
			<?php
				if(isset($_POST["submit"])){
					echo "hello";
				}
			?>

		</div>
		
		<div class="space"></div>
		
		<div class="footer">
			<div class="container">
				<div class="footer_inner">
					<nav class="footer_nav">
						<a href="AboutUs.html" class="nav_link">About us</a>
						<a href="AboutProject.html" class="nav_link">About project</a>
					</nav>
				</div>
			</div>
		</div>

		<script>
			function age_alert(checkbox){
				if(checkbox.checked == true) {
					let isAdult = confirm("Вибираючи цю опцію, ви підтверджуєте, що вам вже виповнилося 18 років");
					if(!isAdult)
						checkbox.checked = false;
				}
			}
		</script>
	</body>
</html>