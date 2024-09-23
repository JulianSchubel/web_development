<?php
//AUTHOR: 	Julian Schübel
//CONTACT:	julian.schubel@sanlam.co.za
//TITLE:	Academy TV Comment Section (locallib.php)
//DATE:		15/07/2020

function get_comment_reply($connect, $parent_id = 0, $margin_left = 0)
{
	
	$sql = "SELECT * FROM tbl_comment
			WHERE parent_comment_id = '".$parent_id."'
			";
	$query = $connect->prepare($sql);
	$query->execute();
	$results = $query->fetchAll();
	$count = $query->rowCount();
	if($parent_id == 0)
	{
		$margin_left = 0;
	}
	else
	{
		$margin_left = $margin_left + 48;
	}
	if($count > 0)
	{
		foreach($results as $record)
		{
			$output .= '
				<div class="panel panel-default" style="margin-left: '.$margin_left.'px">
					<div class="panel panel-heading">
						By <b>'.$record["comment_sender_name"].'</b> on <i>'.$record["comment_date"].'</i>
					</div>
					<div class="panel-body">
						'.$record["comment"].'
					</div>
					<div class="panel-footer" align="right">
						<button type="button" class="btn btn-default reply" id="'.$record["comment_id"].'">Reply</button> 
					</div>
				</div>
			';
			$output .= get_comment_reply($connect, $record["comment_id"], $margin_left);
		}
	}
	return $output;
}

?>