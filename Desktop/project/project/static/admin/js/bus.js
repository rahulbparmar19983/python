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
    var bus_no = currow.find("#bus_no").text();
    var bus_type = currow.find("#bus_type").text();
    var bus_capacity = currow.find("#bus_capacity").text(); 
    $("#model2 #bus_no").val(bus_no);
    $("#model2 #bus_type").val(bus_type);
    $("#model2 #bus_capacity").val(bus_capacity);
   });

var currow2
var bus_id
  $('#myTable').on('click', '#delete_btn', function() {
      currow2= $(this).closest('tr');
      bus_id = currow2.find("#bus_id").text();
      $("#model3 #bus_id").text(bus_id);
  });
$('#delete').click(function(){
        var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url:'/admin/bus_delete/',
        data : {csrfmiddlewaretoken : csrftoken ,bus_id : bus_id},
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
  var bus_no = $('#model1 #bus_no').val();
  var bus_type = $('#model1 #bus_type').val();
  var bus_capacity = $('#model1 #bus_capacity').val();
  if(bus_no == ""){
    $('#model1 #alert-2').text('Please enter bus_no !');
    $('#model1 #bus_no').focus();
  }
  else if(bus_type == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter bus_type !');
    $('#model1 #bus_type').focus();      
  }
  else if(bus_capacity == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('Please enter bus_capacity !');
    $('#model1 #bus_capacity').focus();     
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
            url:'/admin/bus_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,bus_no :bus_no ,bus_type : bus_type ,bus_capacity : bus_capacity},
      success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="bus_id">system</td>'+
        '<td id="bus_no">'+bus_no+'</td>'+
        '<td id="bus_type">'+bus_type+'</i></td>'+
        '<td id="bus_capacity">'+bus_capacity+'</td>'+
        '<td class=" small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-100px;"><a href="">delete</a></i><td>';  
    Materialize.toast('Insert success', 5000);
          },
            error:function(msg){
        Materialize.toast('Fail to Insert', 5000);
      },

          });

  }
});


$('#continue').click(function(){
  var bus_no = $('#model1 #bus_no').val();
  var bus_type = $('#model1 #bus_type').val();
  var bus_capacity = $('#model1 #bus_capacity').val();
  if(bus_no == ""){
    $('#model1 #alert-2').text('Please enter bus_no !');
    $('#model1 #bus_no').focus();
  }
  else if(bus_type == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter bus_type !');
    $('#model1 #bus_type').focus();      
  }
  else if(bus_capacity == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('Please enter bus_capacity !');
    $('#model1 #bus_capacity').focus();     
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
            url:'/admin/bus_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,bus_no :bus_no ,bus_type : bus_type ,bus_capacity : bus_capacity},
      success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="bus_id">system</td>'+
        '<td id="bus_no">'+bus_no+'</td>'+
        '<td id="bus_type">'+bus_type+'</i></td>'+
        '<td id="bus_capacity">'+bus_capacity+'</td>'+
        '<td class=" small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-100px;"><a href="">delete</a></i><td>';  
    Materialize.toast('Insert success', 5000);
          },
            error:function(msg){
        Materialize.toast('Fail to Insert', 5000);
      },

          });

  }
});

$('#update').click(function(){
    var bus_id = currow.find("#bus_id").text();
    var bus_no = $('#model2 #bus_no').val();
    var bus_type = $('#model2 #bus_type').val();
    var bus_capacity = $('#model2 #bus_capacity').val();
  if(bus_no == ""){
    $('#model1 #alert-2').text('Please enter bus_no !');
    $('#model1 #bus_no').focus();
  }
  else if(bus_type == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter bus_type !');
    $('#model1 #bus_type').focus();      
  }
  else if(bus_capacity == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('Please enter bus_capacity !');
    $('#model1 #bus_capacity').focus();     
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
            url:'/admin/bus_update/',
            data:{csrfmiddlewaretoken: csrftoken ,bus_id:bus_id,bus_no :bus_no ,bus_type: bus_type ,bus_capacity : bus_capacity},
            success:function(msg){     
          $("#model2 #cancel").click();
          currow.find("#bus_id").text(bus_id);
          currow.find("#bus_no").text(bus_no);
          currow.find("#bus_type").text(bus_type);
          currow.find("#bus_capacity").text(bus_capacity);
          Materialize.toast('Update Success', 5000);
                          },
            error:function(msg){
        Materialize.toast('Fail to Update', 5000);
      },

          });
    }
});

});