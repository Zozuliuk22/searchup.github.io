<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
	Hello, <?php echo $_POST["nickname"]; ?>!<br>
	Your email is <?php echo $_POST["email"]; ?>!<br>
	Your password is <?php echo $_POST["password"]; ?>!<br>
	<br>
    <?php        
		date_default_timezone_set('Europe/Kiev');
        echo "Time: " . date('m/d/Y h:i:s a');
    ?>
	<br>
	Right?
</body>
</html>