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

$(document).ready(function(){
	alert('hello');
    $('#logout').click(function(){
    	alert("hello-qq");
    var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url: '/admin/logout/',
        data:{csrfmiddlewaretoken: csrftoken},
        success:function(msg){
          window.location = "http://localhost:8000/admin";
        }
      });


    });

 });