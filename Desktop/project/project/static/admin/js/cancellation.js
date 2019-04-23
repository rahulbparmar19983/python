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
    var c_id = currow.find("#c_id").text();
    var can_date = currow.find("#can_date").text();
    var refund = currow.find("#refund").text(); 
    $("#model2 #c_id").val(c_id);
    $("#model2 #can_date").val(can_date);
    $("#model2 #refund").val(refund);
   });

var currow2
var bus_id
  $('#myTable').on('click', '#delete_btn', function() {
      currow2= $(this).closest('tr');
      can_id = currow2.find("#can_id").text();
      $("#model3 #can_id").text(can_id);
  });
$('#delete').click(function(){
        var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url:'/admin/cancellation_delete/',
        data : {csrfmiddlewaretoken : csrftoken ,can_id : can_id},
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
  var c_id = $('#model1 #c_id').val();
  var can_date = $('#model1 #can_date').val();
  var refund = $('#model1 #refund').val();
  if(c_id == ""){
    $('#model1 #alert-2').text('Please enter c_id !');
    $('#model1 #c_id').focus();
  }
  else if(can_date == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter can_date !');
    $('#model1 #can_date').focus();      
  }
  else if(refund == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('Please enter refund !');
    $('#model1 #refund').focus();     
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
            url:'/admin/cancellation_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,c_id :c_id ,can_date : can_date ,refund : refund},
      success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="can_id">system</td>'+
        '<td id="c_id">'+c_id+'</td>'+
        '<td id="can_date">'+can_date+'</i></td>'+
        '<td id="refund">'+refund+'</td>'+
        '<td class=" small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-100px;"><a href="">delete</a></i><td>';  
    Materialize.toast('Insert success', 5000);
    $('#model1 #cancel').click();
          },
            error:function(msg){
        Materialize.toast('Fail to Insert', 5000);
      },

          });

  }
});


$('#continue').click(function(){
  var c_id = $('#model1 #c_id').val();
  var can_date = $('#model1 #can_date').val();
  var refund = $('#model1 #refund').val();
  if(c_id == ""){
    $('#model1 #alert-2').text('Please enter c_id !');
    $('#model1 #c_id').focus();
  }
  else if(can_date == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter can_date !');
    $('#model1 #can_date').focus();      
  }
  else if(refund == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('Please enter refund !');
    $('#model1 #refund').focus();     
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
            url:'/admin/cancellation_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,c_id :c_id ,can_date : can_date ,refund : refund},
      success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="can_id">system</td>'+
        '<td id="c_id">'+c_id+'</td>'+
        '<td id="can_date">'+can_date+'</i></td>'+
        '<td id="refund">'+refund+'</td>'+
        '<td class=" small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-50px;"><a href="">delete</a></i><td>';  
    Materialize.toast('Insert success', 5000);
          },
            error:function(msg){
        Materialize.toast('Fail to Insert', 5000);
      },

          });

  }
});

$('#update').click(function(){
    var can_id = currow.find("#can_id").text();
    var c_id = $('#model2 #c_id').val();
    var can_date = $('#model2 #can_date').val();
    var refund = $('#model2 #refund').val();
  if(c_id == ""){
    $('#model1 #alert-2').text('Please enter c_id !');
    $('#model1 #c_id').focus();
  }
  else if(can_date == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('Please enter can_date !');
    $('#model1 #can_date').focus();      
  }
  else if(refund == ""){
    $('#model1 #alert-2').text('');
    $('#model1 #alert-3').text('');
    $('#model1 #alert-4').text('Please enter refund !');
    $('#model1 #refund').focus();     
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
            url:'/admin/cancellation_update/',
            data:{csrfmiddlewaretoken: csrftoken ,can_id : can_id , c_id :c_id ,can_date : can_date ,refund : refund},
            success:function(msg){     
          $("#model2 #cancel").click();
          currow.find("#can_id").text(can_id);
          currow.find("#refund").text(refund);
          currow.find("#can_date").text(can_date);
          Materialize.toast('Update Success', 5000);
                          },
            error:function(msg){
        Materialize.toast('Fail to Update', 5000);
      },

          });
    }
});

});