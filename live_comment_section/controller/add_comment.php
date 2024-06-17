<?php
//AUTHOR:	Julian Schübel
//CONTACT:	julian.schubel@sanlam.co.za
//TITLE:	Academy TV Comment Section (add_comment.php)
//DATE:		13/07/2020

/**
 * @copyright  2020 Sanlam GTI
 */

global $CFG, $DB, $USER;
require(__DIR__.'/../../../config.php');

$response = "";
$comment_id = $_POST["comment_id"];
$comment_name = $_POST["comment_name"];
$comment_content = $_POST["comment_content"];
$comment_date = date("Y-m-d H:i:s", time());

$connect = new PDO('mysql:host="";dbname=""','<username>', '<password>');

if($response == "")
{
	$sql = "INSERT INTO tbl_comment (parent_comment_id, comment, comment_sender_name, comment_date)
			VALUES (:parent_comment_id, :comment, :comment_sender_name, :comment_date)";
	$insert = $connect->prepare($sql);
	$insert->execute(
		array( 
		":parent_comment_id" => $comment_id, 
		":comment" => $comment_content, 
		":comment_sender_name" => $comment_name, 
		":comment_date" => $comment_date
		)
	);
	$response = 'Comment Added';
}

echo $response;
?>
