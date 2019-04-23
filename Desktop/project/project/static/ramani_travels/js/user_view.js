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
var currow 
var b_id 

  $('.striped').on('click','.model-trigger',function(){
            $('#modal2').modal();
            $('#modal2').modal('open');
            currow = $(this).closest('tr');
            b_id =currow.find('.b_id').text();
            $('#modal2').find('#text1').text(currow.find('.bus_no').text());
            $('#modal2').find('#text2').text(currow.find('.deapture_station').text());
            $('#modal2').find('#text3').text(currow.find('.arrival_station').text());
            $('#modal2').find('#text4').text(currow.find('.seat_no').text());
            $('#modal2').find('#text5').text(currow.find('.journey_date').text());
            $('#modal2').find('#text6').text(currow.find('.journey_time').text());
  });
  $('#cancel').click(function(){
    var bus_no =  $('#text1').text();
    var deapture_station =  $('#text2').text();
    var arrival_station =  $('#text3').text();
    var seat_no =  $('#text4').text();
    var journey_date =  $('#text5').text();
    var journey_time =  $('#text6').text();
    var csrftoken = getCookie('csrftoken');
    $.ajax({
      method:'post',
      url:'/cancel_booking/',
      data:{
          csrfmiddlewaretoken:csrftoken ,
          b_id : b_id ,
      },
      success:function(msg){
      $('#modal2').modal('close');
      M.toast({html: 'Cancel'});
      currow.remove();
      },
      error:function(msg){
        alert('fail');
      }
    });
  });  
  $('.datepicker').datepicker({
    format: 'dd/mm/yyyy',
    minDate: new Date()
  });
    $("#date").focus(function(){
      $("#date").click();
    });
  $('#search').click(function(){
    $("#panel1").slideToggle();
  });
 $('#search_button').click(function(event){
    event.preventDefault();
    if($("#to").val() == "")
    {
      $("#to").focus();
    }
    else if($("#from").val() == "")
    {
      $("#from").focus();
    }
    else if($("#date").val() == "")
    {
      $("#date").click();
    }    
    else{
        var to = $('#to').val();
        var from = $('#from').val();
        var date = $('#date').val();
        var csrftoken = getCookie('csrftoken');
        $.ajax({
          method:'post',
          url:'/search_bus/',
          data:{csrfmiddlewaretoken : csrftoken , to : to , from : from , date : date },
          success:function(msg){
            $('.striped').html(msg);
            $('#modal1').modal();
            $('#modal1').modal('open');
          },
          error:function(msg){
          }
        });      
    }
  });  
 
});