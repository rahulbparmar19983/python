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

    $('.collapsible').collapsible();
    $('select').material_select();
    $('.modal-trigger').leanModal();
var currow  
   $('#myTable').on('click', '#update_btn', function() {
    currow= $(this).closest('tr');
    var book_id = currow.find("#route_id").text();
    var deapture_station = currow.find("#deapture_station").text();
    var arrival_station = currow.find("#arrival_station").text();
    var pickup_station = currow.find("#pickup_station").text();
    var distance = currow.find("#distance").text();
    $("#model2 #deapture_station").val(deapture_station);
    $("#model2 #arrival_station").val(arrival_station);
    $("#model2 #pickup_station").val(pickup_station);
    $("#model2 #distance").val(distance);
    });
var currow2
var route_id
  $('#myTable').on('click', '#delete_btn', function() {
      currow2= $(this).closest('tr');
      route_id = currow2.find("#route_id").text();
      $("#model3 #route_id").text(route_id);
  });
$('#delete').click(function(){
        var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url:'/admin/route_delete/',
        data : {csrfmiddlewaretoken : csrftoken ,route_id : route_id},
        success:function(msg)
        {
        currow2.remove();
        Materialize.toast('Delete Success', 5000);
        $('#model3 #cancel').click();
        },
        error:function(msg){
            Materialize.toast('Fail to Delete', 5000);
      $('#model3 #cancel').click();          
        },
      });
});

$('#submit').click(function(event){
  event.preventDefault();
  var deapture_station = $('#model1 #deapture_station').val();
  var arrival_station = $('#model1 #arrival_station').val();
  var pickup_station = $('#model1 #pickup_station').val();
  var distance = $("#model1 #distance").val();
  if(deapture_station == ""){
    $('#model1 #alert-2').text('Please enter deapture_station !');
    $('#model1 #seat_no').focus();
  }
  else if(arrival_station == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter arrival_station !');
    $('#model1 #customer_id').focus();      
  }
  else if(pickup_station == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('Please enter pickup_station !');
    $('#model1 #bus_route_id').focus();     
  } 
  else if(distance == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text(''); 
    $('#model1 #alert-5').text('Please enter distance !');
    $('#model1 #journey_date').focus();     
  }    
  else{
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('');
    $('#model1 #alert-5').text('');
    $('#model1 #alert-6').text('');
    $('#model1 #cancel').click();
    var csrftoken = getCookie('csrftoken');
          $.ajax({
            method:'post',
            url:'/admin/route_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,deapture_station :deapture_station ,arrival_station : arrival_station ,pickup_station : pickup_station ,distance :distance},
      success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="book_id">system</td>'+
        '<td id="deapture_station">'+deapture_station+'</td>'+
        '<td id="arrival_station">'+arrival_station+'</i></td>'+
        '<td id="pickup_station">'+pickup_station+'</td>'+
        '<td id="distance">'+distance+'</td>'+
        '<td class=" small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-80px;"><a href="">delete</a></i><td>';  
    Materialize.toast('Insert success', 5000);
          },
            error:function(msg){
        Materialize.toast('Fail to Insert', 5000);
      },

          });

  }
});   

$('#continue').click(function(){
  var deapture_station = $('#model1 #deapture_station').val();
  var arrival_station = $('#model1 #arrival_station').val();
  var pickup_station = $('#model1 #pickup_station').val();
  var distance = $("#model1 #distance").val();
  if(deapture_station == ""){
    $('#model1 #alert-2').text('Please enter deapture_station !');
    $('#model1 #seat_no').focus();
  }
  else if(arrival_station == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter arrival_station !');
    $('#model1 #customer_id').focus();      
  }
  else if(pickup_station == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('Please enter pickup_station !');
    $('#model1 #bus_route_id').focus();     
  } 
  else if(distance == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text(''); 
    $('#model1 #alert-5').text('Please enter distance !');
    $('#model1 #journey_date').focus();     
  }    
  else{
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('');
    $('#model1 #alert-5').text('');
    $('#model1 #alert-6').text('');
    $('#model1 #cancel').click();
    var csrftoken = getCookie('csrftoken');
          $.ajax({
            method:'post',
            url:'/admin/route_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,deapture_station :deapture_station ,arrival_station : arrival_station ,pickup_station : pickup_station ,distance :distance},
      success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="book_id">system</td>'+
        '<td id="deapture_station">'+deapture_station+'</td>'+
        '<td id="arrival_station">'+arrival_station+'</i></td>'+
        '<td id="pickup_station">'+pickup_station+'</td>'+
        '<td id="distance">'+distance+'</td>'+
        '<td class=" small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-80px;"><a href="">delete</a></i><td>';  
    Materialize.toast('Insert success', 5000);
          },
            error:function(msg){
        Materialize.toast('Fail to Insert', 5000);
      },

          });

  }
});


$('#update').click(function(){
    var route_id= currow.find("#route_id").text();
    var deapture_station= $('#model2 #deapture_station').val();
    var arrival_station = $('#model2 #arrival_station').val();
    var pickup_station = $('#model2 #pickup_station').val();
    var distance = $('#model2 #distance').val();
  if(deapture_station == ""){
    $('#model2 #alert-2').text('Please enter deapture_station !');
    $('#model2 #deapture_station').focus();
  }
  else if(arrival_station == ""){
    $('#model2 #alert-2').text('');
    $('#model2 #alert-3').text('Please enter arrival_station !');
    $('#model2 #arrival_station').focus();      
  }
  else if(pickup_station == ""){
    $('#model2 #alert-2').text('');
    $('#model2 #alert-3').text('');
    $('#model2 #alert-4').text('Please enter pickup_station !');
    $('#model2 #pickup_station').focus();     
  } 
  else if(distance == ""){
    $('#model2 #alert-2').text('');
    $('#model2 #alert-3').text('');
    $('#model2 #alert-4').text(''); 
    $('#model2 #alert-5').text('Please enter distance !');
    $('#model2 #distance').focus();     
  } 
  else{
      var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url:'/admin/route_update/',
        data : {csrfmiddlewaretoken : csrftoken ,route_id : route_id ,deapture_station :deapture_station ,arrival_station :arrival_station , pickup_station : pickup_station , distance:distance},
        success:function(msg)
        {
            currow.find("#distance_station").text(deapture_station);
            currow.find("#arrival_station").text(arrival_station);
            currow.find("#pickup_station").text(pickup_station);
            currow.find("#distance").text(distance);
            $('#model2 #cancel').click();
            Materialize.toast('Update Success', 5000);
        },
        error:function(msg){
          Materialize.toast('Fail to Update', 5000);
        },
      });
    }
});
});
