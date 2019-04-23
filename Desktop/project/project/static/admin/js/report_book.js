function getCookie(name) {
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
  	$(document).ready(function() {
  		var csrftoken = getCookie('csrftoken');
  		$('#submit').click(function(event){
  			event.preventDefault();
  			var date1 = $("#date1").val();
  			var date2 = $("#date2").val();
  			if(date1 == ""){
  				alert("alert");
  				$("#date1").click();
  			}
  			else if(date2 == ""){
  				alert("alert");
  				$("#date2").click();
  			}
  			else {
  			/*$.ajax({
  				method:'post',
  				url : '/admin/report_book_search/',
  				data:{csrfmiddlewaretoken : csrftoken, date1 : date1 , date2 : date2},
  				success:function(msg){
  					$("#myTable tbody").html(msg);
  					$("#display").slideDown();
  				},
  				error:function(msg){
  					alert(msg);
  				}
  			});*/
        var win = window.open('/admin/report_book_search/?date1='+date1+'&date2='+date2, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
  		}
  		});
  	});
