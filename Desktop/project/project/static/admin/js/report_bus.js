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
  			var bus_no = $("#bus_no").val();
  			if(bus_no == ""){
  				$("#bus_no").focus();
  			}
  			else {
        var win = window.open('/admin/report_bus_search/?bus_no='+bus_no, '_blank');
        /*if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }*/
        //bus_no = str(bus_no);
  			/*$.ajax({
  				method:'post',
  				url : '/admin/report_bus_search/',
  				data:{csrfmiddlewaretoken : csrftoken, bus_no : bus_no},
  				success:function(msg){
  					$("#myTable tbody").html(msg);
  					$("#display").slideDown();
  				},
  				error:function(msg){
  					alert('fail');
  				}
  			});*/
  		}
  		});
  	});
