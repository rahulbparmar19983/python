	$(document).ready(function(){

    $('.collapsible').collapsible();
    $('select').material_select();
    $('.modal-trigger').leanModal();



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
 
	$('#add').click(function(){
	
	});
var currow	
	 $('#myTable').on('click', '#update_btn', function() {
		currow= $(this).closest('tr');
		var name = currow.find("#name").text();
		var contact_no = currow.find("#contact").text();
		var password = currow.find("#password").text();
		var email = currow.find("#email").text();
		var gender = currow.find("#gender").text();
		$("#model2 #username").val(name);
		$("#model2 #contact_no").val(contact_no);
		$("#model2 #pass").val(password);
		$("#model2 #confirm").val(password);
		$("#model2 #emailaddress").val(email);
		$("#model2 #emailaddress").val(email);
		if(gender == "male"){
			$("#model2 input[id='male']").attr('checked',true);
		}
		if(gender == "female"){
			$("#model2 input[id='female']").attr('checked',true);
		}
   });
    $("#submit").click(
      function(event) {
        event.preventDefault();
        var username = $('#model1 #username').val();
        var contact_no = $("#model1 #contact_no").val();
        var email = $("#model1 #emailaddress").val();
        var password=$("#model1 #pass").val();
        var confirm = $("#model1 #confirm").val();
        var gender = '';
        if(username == ""){
          $("#model1 #alert-1").text("Please enter username !");
          $('#model1 #username').focus();
        }
        else if(username.length <5){
          $("#model1 #alert-1").text("Enter at least 5 character !");
          $('#username').focus();
        }
         else if(contact_no == ""){
          $("#model1 #alert-2").text("Please enter contact_no !");
          $('#model1 #contact_no').focus();
          $("#model1 #alert-1").text('');
        }
         else if(contact_no.length <=9){
          $("#model1 #alert-2").text("Please enter valid contact !");
          $('#model1 #contact_no').focus();
          $("#model1 #alert-1").text('');
        }        
        else if(email == ""){
          $("#model1 #alert-3").text("Please enter emailaddress !");
          $('#model1 #emailaddress').focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
        }
        else if( !validateEmail(email))
        {
          $("#model1 #alert-3").text("Please enter valid emailaddress ! (xyz@gmail.com)");
          $('#model1 #emailaddress').focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
        }
        else if(password == ""){
          $("#model1 #alert-4").text("Please enter password !");
          $('#model1 #pass').focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');
        }
        else if(password.length <= 7){
          $("#model1 #alert-4").text("Please enter at least 8 charater ");
          $('#model1 #pass').focus();
        }
        else if(confirm == ""){
          $('#model1 #alert-5').text("Please enter confirm password !");
          $("#model1 #confirm").focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');
          $("#model1 #alert-4").text('');
        }
        else if(password != confirm){
          $("#model1 #alert-4").text("Password did't match !");
          $('#model1 #alert-5').text("Password did't match !");
          $("#model1 #confirm").focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');

        }
        else if($('#model1 input[name="gender"]:checked').length == 0){
          $('#model1#alert-6').text("Please select gender !");
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');
          $("#model1 #alert-4").text('');
          $("#model1 #alert-5").text('');
          gender = $('#model1 input[name="gender"]:checked').val();
        }
        else{
          gender = $('#model1 input[name="gender"]:checked').val();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');
          $("#model1 #alert-4").text("");
          $("#model1 #alert-5").text("");          
          $("#model1 #alert-6").text("");
      var csrftoken = getCookie('csrftoken');      
            $.ajax({ method:'post',url:'/admin/add/',
            data:{csrfmiddlewaretoken: csrftoken , name : username , password : password , email : email , gender :gender , contact_no : contact_no},
            success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="c_id">system</td>'+
        '<td id="name">'+username+'</td>'+
        '<td id="password">'+password+'</i></td>'+
        '<td id="email">'+email+'</td>'+
        '<td id="gender">'+gender+'</td>'+
        '<td id="contact">'+contact_no+'</td>'+
        '<td class=" center small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-50px;"><a href="">delete</a></i><td>';  
            },
            error:function(msg){
              alert('error');
            } });
				$('#cancel').click();
          }
      });


    $("#continue").click(
      function(event) {
        event.preventDefault();
        var username = $('#model1 #username').val();
        var contact_no = $("#model1 #contact_no").val();
        var email = $("#model1 #emailaddress").val();
        var password=$("#model1 #pass").val();
        var confirm = $("#model1 #confirm").val();
        var gender = '';
        if(username == ""){
          $("#model1 #alert-1").text("Please enter username !");
          $('#model1 #username').focus();
        }
        else if(username.length <5){
          $("#model1 #alert-1").text("Enter at least 5 character !");
          $('#username').focus();
        }
         else if(contact_no == ""){
          $("#model1 #alert-2").text("Please enter contact_no !");
          $('#model1 #contact_no').focus();
          $("#model1 #alert-1").text('');
        }
         else if(contact_no.length <=9){
          $("#model1 #alert-2").text("Please enter valid contact !");
          $('#model1 #contact_no').focus();
          $("#model1 #alert-1").text('');
        }        
        else if(email == ""){
          $("#model1 #alert-3").text("Please enter emailaddress !");
          $('#model1 #emailaddress').focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
        }
        else if( !validateEmail(email))
        {
          $("#model1 #alert-3").text("Please enter valid emailaddress ! (xyz@gmail.com)");
          $('#model1 #emailaddress').focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
        }
        else if(password == ""){
          $("#model1 #alert-4").text("Please enter password !");
          $('#model1 #pass').focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');
        }
        else if(password.length <= 7){
          $("#model1 #alert-4").text("Please enter at least 8 charater ");
          $('#model1 #pass').focus();
        }
        else if(confirm == ""){
          $('#model1 #alert-5').text("Please enter confirm password !");
          $("#model1 #confirm").focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');
          $("#model1 #alert-4").text('');
        }
        else if(password != confirm){
          $("#model1 #alert-4").text("Password did't match !");
          $('#model1 #alert-5').text("Password did't match !");
          $("#model1 #confirm").focus();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');

        }
        else if($('#model1 input[name="gender"]:checked').length == 0){
          $('#model1#alert-6').text("Please select gender !");
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');
          $("#model1 #alert-4").text('');
          $("#model1 #alert-5").text('');
          gender = $('#model1 input[name="gender"]:checked').val();
        }
        else{
          gender = $('#model1 input[name="gender"]:checked').val();
          $("#model1 #alert-1").text('');
          $("#model1 #alert-2").text('');
          $("#model1 #alert-3").text('');
          $("#model1 #alert-4").text("");
          $("#model1 #alert-5").text("");          
          $("#model1 #alert-6").text("");
      var csrftoken = getCookie('csrftoken');      
            $.ajax({ method:'post',url:'/admin/add/',
            data:{csrfmiddlewaretoken: csrftoken , name : username , password : password , email : email , gender :gender , contact_no : contact_no},
            success:function(msg){
        document.getElementById("myTable").insertRow(1).innerHTML = '<td id="c_id">'+system+'</td>'+
        '<td id="name">'+username+'</td>'+
        '<td id="password">'+password+'</i></td>'+
        '<td id="email">'+email+'</td>'+
        '<td id="gender">'+gender+'</td>'+
        '<td id="contact">'+contact_no+'</td>'+
        '<td class=" center small"><i class="material-icons"><a href="#img2" class="modal-trigger">system_update_alt</a></i><td>'+
        '<td class="small"><i class="material-icons" style="margin-left:-50px;"><a href="">delete</a></i><td>';          
            },
            error:function(msg){
              alert('error');
            } });
        var username = $('#username').val();
        var contact_no = $("#contact_no").val();
        var email = $("#emailaddress").val();
        var password=$("#pass").val();
        var confirm = $("#confirm").val();
        var gender = '';				
          }
      });	  
   $('.input').keypress(function(e) {
        if(e.which == 13) {
            $('#submit').focus().click();
        }
    });
	$('#update').click(function(){
	    event.preventDefault();
        var username = $('#model2 #username').val();
        var contact_no = $("#model2 #contact_no").val();
        var email = $("#model2 #emailaddress").val();
        var password=$("#model2 #pass").val();
        var confirm = $("#model2 #confirm").val();
        var gender = '';
        if(username == ""){
          $("#model2 #alert-1").text("Please enter username !");
          $('#model2 #username').focus();
        }
        else if(username.length <5){
          $("#model2 #alert-1").text("Enter at least 5 character !");
          $('#model2 #username').focus();
        }
         else if(contact_no == ""){
          $("#model2 #alert-2").text("Please enter contact_no !");
          $('#model2 #contact_no').focus();
          $("#model2 #alert-1").text('');
        }
         else if(contact_no.length <=9){
          $("#model2 #alert-2").text("Please enter valid contact !");
          $('#model2 #contact_no').focus();
          $("#model2 #alert-1").text('');
        }        
        else if(email == ""){
          $("#model2 #alert-3").text("Please enter emailaddress !");
          $('#model2 #emailaddress').focus();
          $("#model2 #alert-1").text('');
          $("#model2 #alert-2").text('');
        }
        else if( !validateEmail(email))
        {
          $("#model2 #alert-3").text("Please enter valid emailaddress ! (xyz@gmail.com)");
          $('#model2 #emailaddress').focus();
          $("#model2 #alert-1").text('');
          $("#model2 #alert-2").text('');
        }
        else if(password == ""){
          $("#model2 #alert-4").text("Please enter password !");
          $('#model2 #pass').focus();
          $("#model2 #alert-1").text('');
          $("#model2 #alert-2").text('');
          $("#model2 #alert-3").text('');
        }
        else if(password.length <= 7){
          $("#model2 #alert-4").text("Please enter at least 8 charater ");
          $('#model2 #pass').focus();
        }
        else if(confirm == ""){
          $('#model2 #alert-5').text("Please enter confirm password !");
          $("#model2 #confirm").focus();
          $("#model2 #alert-1").text('');
          $("#model2 #alert-2").text('');
          $("#model2 #alert-3").text('');
          $("#model2 #alert-4").text('');
        }
        else if(password != confirm){
          $("#model2 #alert-4").text("Password did't match !");
          $('#model2 #alert-5').text("Password did't match !");
          $("#model2 #confirm").focus();
          $("#model2 #alert-1").text('');
          $("#model2 #alert-2").text('');
          $("#model2 #alert-3").text('');

        }
        else if($('#model2 input[name="gender"]:checked').length == 0){
          $('#model2 #alert-6').text("Please select gender !");
          $("#model2 #alert-1").text('');
          $("#model2 #alert-2").text('');
          $("#model2 #alert-3").text('');
          $("#model2 #alert-4").text('');
          $("#model2 #alert-5").text('');
          gender = $('#model2 input[name="gender"]:checked').val();
        }
        else{
          gender = $('#model2 input[name="gender"]:checked').val();
          $("#model2 #alert-1").text('');
          $("#model2 #alert-2").text('');
          $("#model2 #alert-3").text('');
          $("#model2 #alert-4").text("");
          $("#model2 #alert-5").text("");          
          $("#model2 #alert-6").text("");
			currow.find("#name").text(username);
			currow.find("#contact").text(contact_no);
			currow.find("#password").text(password);
			currow.find("#email").text(email);
			currow.find("#gender").text(gender);
			 var csrftoken = getCookie('csrftoken');
			 var c_id = currow.find("#c_id").text();
		  $.ajax({
			method:'post',
			url: '/admin/update/',
			//data:{csrfmiddlewaretoken: $(:"input[name='csrfmiddlewaretoken']").val()},
			data:{csrfmiddlewaretoken: csrftoken,c_id : c_id , name :username ,password : password , email : email , gender : gender , contact : contact_no},
			success:function(msg){
			 //var url=window.location.href
			  //window.location = "http://localhost:8000/admin/customer";
			 $('#model2 #cancel').click();
			 Materialize.toast('Update success', 5000);
			},
			error:function(msg)
			{
				Materialize.toast('Fail to update', 5000);
			}
		  });
		}
	});
	var currow2	
	$('#delete').click(function(){
	var csrftoken = getCookie('csrftoken');
	var c_id = currow2.find('#c_id').text();
      $.ajax({
        method:'post',
        url: '/admin/customer_delete/',
        //data:{csrfmiddlewaretoken: $(:"input[name='csrfmiddlewaretoken']").val()},
        data:{csrfmiddlewaretoken: csrftoken, c_id : c_id},
        success:function(msg){
			$("#model3 #cancel").click();
			Materialize.toast('delete success', 5000);
			currow2.remove();
        },
		error:function(){
			$("#model3 #cancel").click();
			Materialize.toast('fail to delete', 5000);		
		}
      });
	});
	$('#myTable').on('click','#delete_btn',function(){
		currow2= $(this).closest('tr');
		var c_id = currow2.find('#c_id').text();
		var name = currow2.find('#name').text();
		$('#model3 #name').text(name);
	});
});