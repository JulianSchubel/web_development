//AUTHOR: 	Julian Schübel
//CONTACT:	julian.schubel@sanlam.co.za
//TITLE:	Academy TV Comment Section (comments_script.js)
//DATE:		15/07/2020

$(function() 
{
	function load_comment() 
	{
		var $content = $("#comment_output");
		$.ajax({
			url: "../controller/load_comment.php",
			success: function(data) 
			{
				$content.html(data);
			}
		})
	}

	load_comment();

	function checkUsername() 
	{
		var elMsg = document.getElementById("username_message");
		if (this.value.length == 0) {
			elMsg.textContent = "Name is required";
			$("#submit").prop("disabled", true);
		} else {
			elMsg.textContent = "";
			$("#submit").prop("disabled", false);
		}
	}

	var elUsername = document.getElementById("comment_name");
	elUsername.addEventListener('input', checkUsername, false);

	function checkCommentMessage() 
	{
		var elMsg = document.getElementById("comment_message");
		if(this.value.length == 0) {
			elMsg.textContent = "Comment is required";
			$("#submit").prop("disabled", true);
		} else {
			elMsg.textContent = "";
			$("#submit").prop("disabled", false);
		}
	}

	var elComment = document.getElementById("comment_content");
	elComment.addEventListener("input", checkCommentMessage, false);

	$("#comment_form").on("submit", function(e) 
	{
		e.preventDefault();
		var url = "../controller/add_comment.php";
		var $content = $("#comment_message");
		var formData = $("#comment_form").serialize();
		$.ajax({
			method: "POST",
			url: "../controller/add_comment.php",
			data: formData,
			timeout: 2000,
			beforeSend: function() 
			{
				$content.append('<div id="sending">Sending</div>');
			},
			complete: function() 
			{
				$("#sending").remove();
			},
			success: function(data) 
			{
				if(data != "")
				{
					$("#comment_form")[0].reset();
					$content.html(data);
					load_comment();
					$("#comment_id").attr("value", 0);
				}
			},
			error: function() 
			{
				$content.html('<div id="container">Unable to send comment</div>');
			}
		});
	});

	$(document).on("click", ".reply", function() 
	{
		var comment_id = $(this).attr("id");
		$("#comment_id").attr("value", comment_id);
		$("#comment_content").focus();
	});
});