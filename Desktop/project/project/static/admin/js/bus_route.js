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



$('#submit').click(function(event){
  event.preventDefault();
  var bus_id = $('#model1 #bus_id').val();
  var route_id = $('#model1 #route_id').val();
  if(bus_id == ""){
    $('#model1 #alert-2').text('Please enter bus_id !');
    $('#model1 #bus_id').focus();
  }
  else if(route_id == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter route_id !');
    $('#model1 #route_id').focus();      
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
            url:'/admin/bus_route_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,bus_id :bus_id ,route_id : route_id},
      success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="book_id">system</td>'+
        '<td id="bus_id">'+bus_id+'</td>'+
        '<td id="route_id">'+route_id+'</td>'+
        '<td class=" small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-130px;"><a href="">delete</a></i><td>';  
    Materialize.toast('Insert success', 5000);
          },
            error:function(msg){
        Materialize.toast('Fail to Insert', 5000);
      },

          });

  }
});



$('#continue').click(function(){
  var bus_id = $('#model1 #bus_id').val();
  var route_id = $('#model1 #route_id').val();
  if(bus_id == ""){
    $('#model1 #alert-2').text('Please enter bus_id !');
    $('#model1 #bus_id').focus();
  }
  else if(route_id == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter route_id !');
    $('#model1 #route_id').focus();      
  }    
  else{
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('');
    $('#model1 #alert-5').text('');
    $('#model1 #alert-6').text('');
    var csrftoken = getCookie('csrftoken');
          $.ajax({
            method:'post',
            url:'/admin/bus_route_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,bus_id :bus_id ,route_id : route_id},
      success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="book_id">system</td>'+
        '<td id="bus_id">'+bus_id+'</td>'+
        '<td id="route_id">'+route_id+'</td>'+
        '<td class=" small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-130px;"><a href="">delete</a></i><td>';  
    Materialize.toast('Insert success', 5000);
          },
            error:function(msg){
        Materialize.toast('Fail to Insert', 5000);
      },

          });

  }
});


var currow2
var bus_route_id
  $('#myTable').on('click', '#delete_btn', function() {
      currow2= $(this).closest('tr');
      bus_route_id = currow2.find("#bus_route_id").text();
      $("#model3 #bus_route_id").text(bus_route_id);
  });
$('#delete').click(function(){
        var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url:'/admin/bus_route_delete/',
        data : {csrfmiddlewaretoken : csrftoken ,bus_route_id : bus_route_id},
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
var currow  
   $('#myTable').on('click', '#update_btn', function() {
    currow= $(this).closest('tr');
    var bus_route_id = currow.find("#bus_route_id").text();
    var bus_id = currow.find("#bus_id").text();
    var route_id = currow.find("#route_id").text();
    $("#model2 #bus_id").val(bus_id);
    $("#model2 #route_id").val(route_id);
    });


$('#update').click(function(){
    var bus_route_id= currow.find("#bus_route_id").text();
    var bus_id= $('#model2 #bus_id').val();
    var route_id = $('#model2 #route_id').val();
  if(bus_id == ""){
    $('#model2 #alert-2').text('Please enter bus_id !');
    $('#model2 #bus_id').focus();
  }
  else if(route_id == ""){
    $('#model2 #alert-2').text('');
    $('#model2 #alert-3').text('Please enter route_id !');
    $('#model2 #route_id').focus();      
  }
  else{
      var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url:'/admin/bus_route_update/',
        data : {csrfmiddlewaretoken : csrftoken ,bus_route_id : bus_route_id ,bus_id :bus_id ,route_id :route_id},
        success:function(msg)
        {
            currow.find("#bus_id").text(bus_id);
            currow.find("#route_id").text(route_id);
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