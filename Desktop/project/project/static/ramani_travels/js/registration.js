$(document).ready(function(){

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

    $("#submit").click(
      function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var contact_no = $("#contact_no").val();
        var email = $("#email").val();
        var password=$("#password").val();
        var confirm = $("#confirm").val();
        var gender = '';
        if(username == ""){
          $("#alert-1").text("Please enter username !");
          $('#username').focus();
        }
        else if(username.length <5){
          $("#alert-1").text("Enter at least 5 character !");
          $('#username').focus();
        }
         else if(contact_no == ""){
          $("#alert-2").text("Please enter contact_no !");
          $('#contact_no').focus();
          $("#alert-1").text('');
        }
         else if(contact_no.length <=10){
          $("#alert-2").text("Please enter valid contact !");
          $('#contact_no').focus();
          $("#alert-1").text('');
        }        
        else if(email == ""){
          $("#alert-3").text("Please enter emailaddress !");
          $('#email').focus();
          $("#alert-1").text('');
          $("#alert-2").text('');
        }
        else if( !validateEmail(email))
        {
          $("#alert-3").text("Please enter valid emailaddress ! (xyz@gmail.com)");
          $('#email').focus();
          $("#alert-1").text('');
          $("#alert-2").text('');
        }
        else if(password == ""){
          $("#alert-4").text("Please enter password !");
          $('#password').focus();
          $("#alert-1").text('');
          $("#alert-2").text('');
          $("#alert-3").text('');
        }
        else if(password.length < 8){
          $("#alert-4").text("Please enter at least 8 charater ")
        }
        else if(confirm == ""){
          $('#alert-5').text("Please enter confirm password !");
          $("#confirm").focus();
          $("#alert-1").text('');
          $("#alert-2").text('');
          $("#alert-3").text('');
          $("#alert-4").text('');
        }
        else if(password != confirm){
          $("#alert-4").text("Password did't match !");
          $('#alert-5').text("Password did't match !");
          $("#confirm").focus();
          $("#alert-1").text('');
          $("#alert-2").text('');
          $("#alert-3").text('');

        }
        else if($('input[name="gender"]:checked').length == 0){
          $('#alert-6').text("Please select gender !");
          $("#alert-1").text('');
          $("#alert-2").text('');
          $("#alert-3").text('');
          $("#alert-4").text('');
          $("#alert-5").text('');
          gender = $('input[name="gender"]:checked').val();
        }
        else{
          gender = $('input[name="gender"]:checked').val();
          //alert(gender + "gender");
          $("#alert-1").text('');
          $("#alert-2").text('');
          $("#alert-3").text('');
          $("#alert-4").text("");
          $("#alert-5").text("");          
          $("#alert-6").text("");
          
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
          });
        }
      });
    $("#submit2").click(
      function(event) {
        event.preventDefault();
        var otp = $('#otp').val();
        var username = $('#username').val();
        var contact_no = $("#contact_no").val();
        var email = $("#email").val();
        var password=$("#password").val();
        var confirm = $("#confirm").val();
        var gender = '';
        if(otp == ""){
          $("#otp_alert").text("Please enter username !");
          $('#otp').focus();
        }
        else{
          gender = $('input[name="gender"]:checked').val();
          //alert(gender + "gender");
          $("#alert-1").text('');
          $("#alert-2").text('');
          $("#alert-3").text('');
          $("#alert-4").text("");
          $("#alert-5").text("");          
          $("#alert-6").text("");
          
          var csrftoken = getCookie('csrftoken');
          $.ajax({
            method:'post',
            url:'/register_user/',
            data:{csrfmiddlewaretoken:csrftoken ,otp : otp ,email : email , username : username ,conatact_no : contact_no , password : password ,gender : gender , contact_no :contact_no},
            success:function(msg)
            {
              if (msg==0){
                $("#otp_alert").text("Please Enter valid otp number !");
                $('#otp').focus();
              }
              else if(msg == 1){
                $("#otp_alert").text("Please enter username !");
                $('#otp').focus();
              }
              else{
                $('#otp').val('');
                  window.location="/user_view/";
             }
            },
            error:function(msg){
              alert('error');
            },
          });
        }
      });    
   $('.input').keypress(function(e) {
        if(e.which == 13) {
            $('#submit').focus().click();
        }
    });

});