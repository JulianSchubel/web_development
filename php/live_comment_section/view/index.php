<?PHP
//AUTHOR: 	Julian Schübel (comment section)
//CONTACT:	julian.schubel@sanlam.co.za
//TITLE:	Academy TV (index.php)
//DATE:		13/07/2020

/**
 * @copyright  2020 Sanlam GTI
 */

global $CFG, $DB, $USER;
require(__DIR__.'/../../../config.php');
$username = fullname($USER);

require_login();

?>

<!DOCTYPE html>
<html>
<!--**************************************************HEAD****************************************************** -->
<head>
	<title>Explore</title>
	<meta name="viewport" content="width=device-width"/>
	<!--meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/-->
	<meta http-equiv="pragma" content="no-cache"/>
	<!--LINKS-->
	<link href="../resources/css/comments_style.css" type="text/css" rel="stylesheet"/>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
</head>
<!--**************************************************BODY****************************************************** -->
<body>
<nav class="navbar navbar-default">
  	<div class="container">
	    <div class="navbar-header">
	      	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#Nav">
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
	      	</button>
	    </div>

    	<div class="collapse navbar-collapse" id="Nav">
      		<div class="row">
	   			<img class="img-responsive;"style="padding-left:0px;width:10%;height:60px;"src="../resources/images/logo2.png">
 				<nav class="navbar navbar-right">
	   				<ul class="nav navbar-nav">
				        <li><a style="color:white;" href="#">Home</a></li>
				        <li><a style="color:white;" href="#">Library</a></li>
				        <li><a style="color:white;" href="#">My CPD</a></li>
				        <li><a style="color:white;" href="#">Course Booking System</a></li>
	   				</ul>
				    <nav class="navbar navbar-right">
				        <div class="container-fluid">
				        	<img class="img-responsive;"style="height:60px;width:60px;"src="../resources/images/sanlam logo1.png">
				        </div>
					</nav>
				</nav>
    		</div>
  		</div>
  	</div>
</nav>

<a href="index.php" data-toggle="tooltip" data-placement="top" title="">
<strong>PREVIOUS PAGE</strong></a>
<br><br>

<img class="img-responsive;"style="padding-left:120px;width:20%;height:70px;"src="../resources/images/acadlogo.jpg">

<div class="container-fluid" id="background-image"></div>
<br>

<p>Watch interviews, get expert insight and the latest opinions here</p>
<hr width="400" style="border: 1px dotted" color="#333e48" size="4"></hr>
<br>

<div class="container">
  	<div class="row">

		<div style = "padding-left:70px;"class="col-sm-4">
			<a href="insurance unusual.php" ><img class="img-responsive;"style="width:80%;height:90%;"src="../resources/images/Interest.png"></a>
		</div>

		<div style = "padding-left:70px;"class="col-sm-4">
			<a href="interviews.php" ><img class="img-responsive;"style="width:80%;height:90%;"src="../resources/images/Interest.png"></a>
		</div>

		<div style = "padding-left:70px;"class="col-sm-4">
			<a href="explore extra.php" ><img class="img-responsive;"style="width:80%;height:90%;"src="../resources/images/Interest.png"></a>
		</div>
  	</div>
</div>

<!--COMMENT SECTION-->
<div class="container">
	<form id="comment_form" method="POST">
		<div class="form_group">
			<input type="text" name="comment_name" id="comment_name" class="form-control" value="<?PHP echo $username ?>" readonly/>
		</div>
		<br/>
		<div class="form_group">
			<textarea type ="text" name="comment_content" id="comment_content" class="form-control" rows="5" placeholder="Enter Comment..."></textarea >
		</div>
		<br/>
		<div class="form_group">
			<input type="hidden" name="comment_id" id="comment_id" value="0"/> 
			<input type="submit" name="submit" class="btn btn-info" id="submit" value="Submit" disabled/>
		</div>
	</form>
	<div>
		<br/>
		<span class="errMsg" id="username_message"></span>
		<br/>
		<span class="errMsg" id="comment_message"></span>
	</div>
	<hr/>
	<div  class="comment_list" id="comment_output">		
	</div>
	<!--EXTERNAL SCRIPTS-->
	<script src="../resources/js/jquery-3.5.1.min.js" type="text/javascript"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
	<script src="../resources/js/comments_script.js" type="text/javascript"></script>
</div>
</body>
<br/><br/>
<!--**************************************************FOOTER****************************************************** -->
<footer class="text-center" style="margin-top:none; background-color:#0075c9;color:#ffffff;">Copyright © 2020. All rights reserved.</footer>
<footer class="text-center" style="margin-top:none; background-color:#0075c9;color:#ffffff;">Sanlam Life Insurance Limited is a Licensed Financial Services Provider and a Registered Credit Provider.</footer>
</html>