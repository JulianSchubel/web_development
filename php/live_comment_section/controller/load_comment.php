<?php
//AUTHOR: 	Julian Schübel
//CONTACT:	julian.schubel@sanlam.co.za
//TITLE:	Academy TV Comment Section (load_comment.php)
//DATE:		15/07/2020

/**
 * @copyright  2020 Sanlam GTI
 */

require("../model/classes/locallib.php");

$connect = new PDO('mysql:host="";dbname=""','<username>', '<password>');

$sql = "SELECT * FROM tbl_comment
		WHERE parent_comment_id = '0'
		ORDER BY comment_id DESC";
$query = $connect->prepare($sql);
$query->execute();
$results = $query->fetchAll();
$output = "";
foreach($results as $record)
{	
	$output .= '
		<div class="panel panel-default">
			<div class="panel-heading">
				By <b>'.$record["comment_sender_name"].'</b> on <i>'.$record["comment_date"].'</i>
			</div>
			<div class="panel panel-body">
				'.$record["comment"].'
			</div>
			<div class="panel panel-footer" align="right">
				<button type="button" class="btn btn-default reply" id="'.$record["comment_id"].'" align="right">Reply</button>
			</div>
		</div>
	';
	$output .= get_comment_reply($connect, $record["comment_id"]);
}

echo $output;
?>
