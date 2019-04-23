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
    else if( !validateEmail(username))
    {
          $("#alert-1").text("Please enter valid emailaddress ! (xyz@gmail.com)");
          $('#username').focus();
    }    
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
      username = $("#username").val();
      password = $("#password").val(); 
      $.ajax({
        method:'post',
        url:'/login_user/',
        data:{csrfmiddlewaretoken:csrftoken , username : username , password :password}, 
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
            window.location="http://localhost:8000/user_view/"
          }
        },
        error:function(msg){alert('fail'+msg);},
      });
    }
  });


   $('.input').keypress(function(e) {
        if(e.which == 13) {
            $('#submit').focus().click();
        }
    });
   $("#forgot").click(function(event){
    event.preventDefault();
    var email = $("#username").val();
    if(email == ""){
      $('#alert-1').text("Pleas enter email address !");
      $("#username").focus();
    }
    else{
          var csrftoken = getCookie('csrftoken');
          $.ajax({
            method:'post',
            url:'/send_otp/',
            data:{csrfmiddlewaretoken:csrftoken , email : email},
            success:function(msg)
            {
              if (msg==0){
                    $("#alert-3").text("This Email is already Registered");
                    $('#email').focus();
              }
              else if(msg == 1){
                    $("#alert-3").text("Please Enter Valid emailaddress!");
                    $('#email').focus();                
              }
              else{
                    $('#modal').modal();
                    $('#modal').modal('open');
              }
            },
            error:function(msg){
              alert('error');
            },
          })      
    }
   });
});