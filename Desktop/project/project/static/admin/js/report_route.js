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
  			var depature_station = $("#depature_station").val();
  			var arrival_station = $("#arrival_station").val();
  			if(depature_station == ""){
  				alert("alert");
  				$("#depature_station").click();
  			}
  			else if(arrival_station == ""){
  				alert("alert");
  				$("#arrival_station").click();
  			}
  			else {
          window.open('/admin/report_route_search/?depature_station='+depature_station+'&arrival_station='+arrival_station,'_blank');
  			/*$.ajax({
  				method:'post',
  				url : '/admin/report_route_search/',
  				data:{csrfmiddlewaretoken : csrftoken, depature_station : depature_station , arrival_station : arrival_station},
  				success:function(msg){
  					$("#myTable tbody").html(msg);
  					$("#display").slideDown();
  				},
  				error:function(msg){
  					alert(msg);
  				}
  			});*/
  		}
  		});
  	});
