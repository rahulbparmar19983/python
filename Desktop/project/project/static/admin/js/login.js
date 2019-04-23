$(document).ready(function() {

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

  function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
  }

  $('#submit').click(function(event){
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    if(username == "")
    {
      $('#alert-1').text("Pleas enter email address !");
      $("#username").focus();
    }
    /*else if( !validateEmail(username))
    {
          $("#alert-1").text("Please enter valid emailaddress ! (xyz@gmail.com)");
          $('#username').focus();
    }  */  
    else if(password == "")
    {
      $('#alert-2').text("Please enter Password !");
      $('#password').focus();
      $('#alert-1').text('');

    }
    else
    {
      $('#alert-1').text('');
      $('#alert-2').text('');
      var csrftoken = getCookie('csrftoken');
      adminname = $("#username").val();
      password = $("#password").val(); 
     /*       $.ajax({
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
          }
          else
          {
            window.location = "http://localhost:8000/admin/customer";
            $('#msg-1').text('');
          }
        },
        error:function(msg){
          alert('error');
        },
      });*/
      $.ajax({
        method:'post',
        url:"/admin/login/",
        data:{csrfmiddlewaretoken:csrftoken , adminname : adminname , password :password},
        success:function(msg){
          if(msg == "0"){
            $("#alert-1").text('Please Enter valid email address !');
            $("#username").focus();
          }
          else if(msg == "1"){
            $("#alert-2").text('Please Enter valid password !');
            $("#password").focus();
          }
          else{
            window.location = "http://localhost:8000/admin";
          }
        },
        error:function(msg){alert('error');},
      });
    }
  });
   $('.input').keypress(function(e) {
        if(e.which == 13) {
            $('#submit').focus().click();
        }
    });
});