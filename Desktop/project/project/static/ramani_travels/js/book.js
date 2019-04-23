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

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}
  function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
  }
var seats 
var bus_type = GetURLParameter('bus_type');
var distance = GetURLParameter('distance');
distance = parseInt(distance.replace('KM',''));
  $("input[type='checkbox']").click(function(){
    seats = [];    
    var $boxes = $('input[type=checkbox]:checked');
    if($boxes.length == 0)
    {
      $("#msg").text('Please select seat');
      $("#msg1").text('Please select seat');
    }
    else if($boxes.length >= 5)
    {
      $(this).prop('checked', false);
      $("#msg").text('you can select maximum 4 Seats');
      $("#msg1").text('you can select maximum 4 Seats');
      $("input:checkbox:checked").map(function(){
        seats.push($(this).val());
        $("#seat-no").text('Seat-Number : ' + seats);
        $("#payment").text("Payment : "+payment+"RS");
        $("#payment-option").html
      });      
    }
    else{
      var payment = 0
      if(bus_type == "non-ac"){
          payment = distance * 6;
          payment = payment * $boxes.length;
      }
      else{
        payment = distance * 10;
        payment = payment * $boxes.length; 
      }
     /* var stripe = Stripe('pk_test_gC7vFimDN0s7nArRMhI1c8NE');
      var paymentRequest = stripe.paymentRequest({
            country: 'INDIA',
            currency: 'rupees',
            total: {
              label: 'Demo total',
              amount: 1000,
            },
            requestPayerName: true,
            requestPayerEmail: true,
          });*/
      $("#book").show();
      $("input:checkbox:checked").map(function(){
        seats.push($(this).val());
        $("#seat-no").text('Seat-Number : ' + seats);
        $("#payment").text("Payment : "+payment+"RS");
        $("#payment-option").html
      });
     }
  });
    $('#submit').click(function(event){
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    var $boxes = $('input[type=checkbox]:checked');
    if($boxes.length == 0)
    {
      $("#msg").text('Please select seat');
      $("#msg1").text('Please select seat');
    }
    else if(username == "")
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
      seats = [];
      $("input:checkbox:checked").map(function(){
        seats.push(parseInt($(this).val()));
      });
      seats = JSON.stringify(seats);
      //seats = seats.split("[");
      var d = GetURLParameter('date');
      var t_id = GetURLParameter('t_id');
      $.ajax({
        method:'post',
        url:'/book_seat/',
        data:{csrfmiddlewaretoken:csrftoken , username : username , password :password ,seats : seats , d : d , t_id : t_id}, 
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
            window.location.href="http://localhost:8000/user_view/"
          }
        },
        error:function(msg){alert('fail'+msg);},
      });
    }
  });
    $('#submit2').click(function(event){
    event.preventDefault();
    var username = $('#username').text();
    var password = $('#password').text();
    var $boxes = $('input[type=checkbox]:checked');
    if($boxes.length == 0)
    {
      $("#msg").text('Please select seat');
      $("#msg1").text('Please select seat');
    }
    else
    {
      var csrftoken = getCookie('csrftoken');
      seats =JSON.stringify(seats);
      var d = GetURLParameter('date');
      var t_id = GetURLParameter('t_id');
      seats = [];
      $("input:checkbox:checked").map(function(){
        seats.push(parseInt($(this).val()));
      });
      seats = JSON.stringify(seats);
     $.ajax({
        method:'post',
        url:'/book_seat/',
        data:{csrfmiddlewaretoken:csrftoken , username : username , password :password ,seats : seats , d : d , t_id : t_id}, 
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
            //alert("success"+msg);
            window.location.href="http://localhost:8000/user_view/"
          }
        },
        error:function(msg){alert('fail'+msg);},
      });
  }
});

$("#waiting").click(function(event){
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
      var d = GetURLParameter('date');
      var t_id = GetURLParameter('t_id');
      $.ajax({
        method:'post',
        url:'/waiting/',
        data:{csrfmiddlewaretoken:csrftoken , username : username , password :password ,d : d , t_id : t_id}, 
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
            window.location.href="http://localhost:8000/user_view/"
          }
        },
        error:function(msg){alert('fail'+msg);},
      });
    }
    });

  $('#waiting2').click(function(){
    var username = $('#username').text();
    var password = $("#password").text();
      var csrftoken = getCookie('csrftoken');
      username = $("#username").val();
      password = $("#password").val(); 
      var d = GetURLParameter('date');
      var t_id = GetURLParameter('t_id');
      $.ajax({
        method:'post',
        url:'/waiting/',
        data:{csrfmiddlewaretoken:csrftoken , username : username , password :password ,d : d , t_id : t_id}, 
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
            window.location.href="http://localhost:8000/user_view/"
          }
        },
        error:function(msg){alert('fail'+msg);},
      });    
  });
});