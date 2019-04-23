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

  	$(document).ready(function() {
  		//$('.button-collapse').sideNav();
		$('.collapsible').collapsible();
		$('select').material_select();
		$('.modal-trigger').leanModal();
var currow	
	 $('#myTable').on('click', '#update_btn', function() {
		currow= $(this).closest('tr');
		var book_id = currow.find("#book_id").text();
		var seat_no = currow.find("#seat_no").text();
		var customer_id = currow.find("#customer_id").text();
		var time_table_id = currow.find("#time_table_id").text();
		var journey_date = currow.find("#journey_date").text();
		var journey_time = currow.find("#journey_time").text();
		$("#model2 #book_id").val(book_id);
		$("#model2 #seat_no").val(seat_no);
		$("#model2 #customer_id").val(customer_id);
		$("#model2 #time_table_id").val(time_table_id);
		$("#model2 #journey_date").val(journey_date);
		$("#model2 #journey_time").val(journey_time);
   });
var currow2
var book_id
	$('#myTable').on('click', '#delete_btn', function() {
			currow2= $(this).closest('tr');
			book_id = currow2.find("#book_id").text();
			$("#model3 #book_id").text(book_id);
	});
$('#delete').click(function(){
	      var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url:'/admin/book_delete/',
        data : {csrfmiddlewaretoken : csrftoken ,book_id : book_id},
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
$('#submit').click(function(){
	var seat_no = $('#model1 #seat_no').val();
	var customer_id = $('#model1 #customer_id').val();
	var time_table_id = $('#model1 #time_table_id').val();
	var journey_date = $("#model1 #journey_date").val();
	var journey_time = $("#model1 #journey_time").val();
	if(seat_no == ""){
		$('#model1 #alert-2').text('Please enter seat_no !');
		$('#model1 #seat_no').focus();
	}
	else if(customer_id == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('Please enter customer_no !');
		$('#model1 #customer_id').focus();			
	}
	else if(time_table_id == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('');
		$('#model1 #alert-4').text('Please enter time_table_id !');
		$('#model1 #time_table_id').focus();			
	}	
	else if(journey_date == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('');
		$('#model1 #alert-4').text('');	
		$('#model1 #alert-5').text('Please enter journey_date !');
		$('#model1 #journey_date').focus();			
	}	
	else if(journey_time == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('');
		$('#model1 #alert-4').text('');
		$('#model1 #alert-5').text('');	
		$('#model1 #alert-6').text('Please enter journey_time !');
		$('#model1 #journey_time').focus();			
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
            url:'/admin/book_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,seat_no :seat_no ,c_id : customer_id ,t_id : time_table_id ,journey_date : journey_date ,journey_time : journey_time},
			success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="book_id">system</td>'+
        '<td id="saet_no">'+seat_no+'</td>'+
        '<td id="c_id">'+customer_id+'</i></td>'+
        '<td id="time_table_id">'+time_table_id+'</td>'+
        '<td id="journey_date">'+journey_date+'</td>'+
        '<td id="journey_time">'+journey_time+'</td>'+
        '<td class=" center small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-50px;"><a href="">delete</a></i><td>';  
		Materialize.toast('Insert success', 5000);
          },
            error:function(msg){
				Materialize.toast('Fail to Insert', 5000);
			},

          });

	}
});
$('#continue').click(function(event){
	event.preventDefault();
	var seat_no = $('#model1 #seat_no').val();
	var customer_id = $('#model1 #customer_id').val();
	var time_table_id = $('#model1 #time_table_id').val();
	var journey_date = $("#model1 #journey_date").val();
	var journey_time = $("#model1 #journey_time").val();
	alert(seat_no);
	if(seat_no == ""){
		$('#model1 #alert-2').text('Please enter seat_no !');
		$('#model1 #seat_no').focus();
	}
	else if(customer_id == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('Please enter customer_no !');
		$('#model1 #customer_id').focus();			
	}
	else if(time_table_id == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('');
		$('#model1 #alert-4').text('Please enter time_table_id !');
		$('#model1 #time_table_id').focus();			
	}	
	else if(journey_date == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('');
		$('#model1 #alert-4').text('');	
		$('#model1 #alert-5').text('Please enter journey_date !');
		$('#model1 #journey_date').focus();			
	}	
	else if(journey_time == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('');
		$('#model1 #alert-4').text('');
		$('#model1 #alert-5').text('');	
		$('#model1 #alert-6').text('Please enter journey_time !');
		$('#model1 #journey_time').focus();			
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
            url:'/admin/book_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,seat_no :seat_no ,c_id : customer_id ,t_id : time_table_id ,journey_date : journey_date ,journey_time : journey_time},
			success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="book_id">system</td>'+
        '<td id="saet_no">'+seat_no+'</td>'+
        '<td id="c_id">'+customer_id+'</i></td>'+
        '<td id="time_table_id">'+time_table_id+'</td>'+
        '<td id="journey_date">'+journey_date+'</td>'+
        '<td id="journey_time">'+journey_time+'</td>'+
        '<td class=" center small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
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
		var book_id = currow.find("#book_id").text();
		var seat_no = $('#model2 #seat_no').val();
		var customer_id = $('#model2 #customer_id').val();
		var time_table_id = $('#model2 #time_table_id').val();
		var journey_date = $('#model2 #journey_date').val();
		var journey_time = $('#model2 #journey_time').val();;
	if(seat_no == ""){
		$('#model1 #alert-2').text('Please enter seat_no !');
		$('#model1 #seat_no').focus();
	}
	else if(customer_id == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('Please enter customer_no !');
		$('#model1 #customer_id').focus();			
	}
	else if(time_table_id == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('');
		$('#model1 #alert-4').text('Please enter time_table_id !');
		$('#model1 #time_table_id').focus();			
	}	
	else if(journey_date == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('');
		$('#model1 #alert-4').text('');	
		$('#model1 #alert-5').text('Please enter journey_date !');
		$('#model1 #journey_date').focus();			
	}	
	else if(journey_time == ""){
		$('#model1 #alert-2').text('');
		$('#model1 #alert-3').text('');
		$('#model1 #alert-4').text('');
		$('#model1 #alert-5').text('');	
		$('#model1 #alert-6').text('Please enter journey_time !');
		$('#model1 #journey_time').focus();			
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
            url:'/admin/book_update/',
            data:{csrfmiddlewaretoken: csrftoken ,book_id:book_id,seat_no :seat_no ,c_id : customer_id ,t_id : time_table_id ,journey_date : journey_date , journey_time : journey_time},
            success:function(msg){     
					$("#model2 #cancel").click();
					Materialize.toast('Update Success', 5000);
					$('#model2 #cancel').click();   
					currow.find("#book_id").text(book_id);
					currow.find("#seat_no").text(seat_no);
					currow.find("#customer_id").text(customer_id);
					currow.find("#time_table_id").text(time_table_id);
					currow.find("#journey_date").text(journey_date);
					currow.find("#journey_time").text(journey_time);
                          },
            error:function(msg){
				Materialize.toast('Fail to Update', 5000);
				$('#model2 #cancel').click();   
			},

          });
		}
});
  	});
