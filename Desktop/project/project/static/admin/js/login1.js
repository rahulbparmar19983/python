$(document).ready(function(){

    $('i').click(function(){
    $(this).toggleClass('fa-eye-slash   fa-eye')
    if($("#text2").attr("type") == "text")
    {
    	$("#text2").attr("type","password");
    	$("i").css({"color":"#999"});
    }
    else
    {
    	$("#text2").attr("type","text");	
    	$("i").css({"color":"#4285f4"});
    }
    $("#text2").focus();
    });
    $(".edit_button").click(function(event){
  		var text1=document.getElementById("text1").value;
		var text2=document.getElementById("text2").value;
		if(text1 == "")
		{
			$("#bar1").removeClass("bar");
	    	$("#bar1").addClass("baractive");
	    	$("#label1").css({"color":"red"});
			document.getElementById("text1").focus();
		}
	 	else if(text2 == "")
	 	{
	 		$("#bar2").removeClass("bar");
	    	$("#bar2").addClass("baractive");
	    	$("#label2").css({"color":"red"});
	 		document.getElementById("text2").focus();
	 		$("#bar1").removeClass("baractive");
	 		$("#bar1").addClass("bar");
	 		$("#label1").css({"color":"#4285f4"});
	 	}
	 	else{
	 		$("#bar1").removeClass("baractive");
	 		$("#bar1").addClass("bar");
	 		$("#label1").css({"color":"#4285f4"});
	 		$("#bar2").removeClass("baractive");
	 		$("#bar2").addClass("bar");
	 		$("label").css({"color":"#4285f4"});
	 		event.preventDefault();

	 	/*function getCookie(name) {
	        var cookieValue = null;
	        if (document.cookie && document.cookie !== '') {
	            var cookies = document.cookie.split(';');
	            for (var i = 0; i < cookies.length; i++) {
	                var cookie = jQuery.trim(cookies[i]);
	                // Does this cookie string begin with the name we want?
	                if (cookie.substring(0, name.length + 1) === (name + '=')) {
	                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                    break;
	        		        }
	          			  }
     			   }
       				 return cookieValue;
    					}
   			 var csrftoken = getCookie('csrftoken');*/
			$.ajax({
				url:"/admin/login/",
				method:"post",
				data:{csrfmiddlewaretoken: $("input[name='csrfmiddlewaretoken']").val(),
				//data:{csrfmiddlewaretoken: csrftoken},
				adminname:text1,
				password:text2},
				dataType:"text",

				success:function(msg){
					if(msg == "0")
					{
						$('div #msg-1').text('invalide adminname or password');
						$('#msg-1').css({'color':'red'});
					}
					/*else if(msg =="2")
					{
						$('#msg-2').text('invalide password');
						$('#msg-2').css({'color':'red'});
						$('#msg-1').text('');
					}*/
					else
					{
						window.location = "http://localhost:8000/admin/customer";
						$('#msg-1').text('');
					}
				},
				error:function(msg){
					alert('error');
				},
			});
	 	}
});

 });