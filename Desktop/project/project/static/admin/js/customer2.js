/*$(document).ready(function() {


    $("#add").click(function(){
      document.getElementById("myTable").insertRow(4).innerHTML = '<td>Rahul parmar</td>'+
      '<td><i id="password" class="fa fa-eye" onclick="showPassword(this);">&nbsp;&nbsp;&nbsp;<input type="password" id="text-2" style="border:none;outline:none;pointer-events: none;" value="rahul" ></i></td>'+
      '<td>rahulbparmar@gamilc.om</td>'+
      '<td>Male</td>'+
      '<td>+91034234234</td>'+
      '<td><i class="fa fa-edit" aria-hidden="true" onclick="myUpdate();" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
      '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-50px;"></i><td>';
       });
    $('#myTable tr td i').click(function() {
        if($(this).find("input").attr("type") == "password") {
            $(this).find("input").attr("type",'text')
            }
            else
            {
             $(this).find("input").attr("type",'password') 
            }
    });

});*/

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


function showPassword(CurrentTag)
{
      input=CurrentTag.querySelectorAll('#text-2');
      if(input[0].getAttribute("type") == "password")
      {
        input[0].setAttribute("type","text");
      }
      else
      {
        input[0].setAttribute("type","password");
      }
}
function myUpdate(o)
{
  //td=o.parentNode.parentNode.innerHTML; 
  /*var p=o.parentNode.parentNode;
  p.parentNode.removeChild(p);*/
  /*alert(o.parentNode.parentNode.nodeName);
   document.getElementById("cover").style.display="block";
    document.getElementById("cover").style.opacity="0.3";
    document.getElementById("container").style.display="block";
    document.getElementById("container").style.opacity="1";*/


     //o.parentNode.parentNode.closest("tr").find(".nr").text(); 
}

function openForm()
{
  document.getElementById("cover").style.display="block";
  document.getElementById("cover").style.opacity="0.3";
  document.getElementById("container").style.display="block";
  document.getElementById("container").style.opacity="1";
}

/*function closeForm()
{
  document.getElementById("cover").style.display="none";
  document.getElementById("cover").style.opacity="0";
  document.getElementById("container").style.display="none";
  document.getElementById("container").style.opacity="0";
}*/

$(document).ready(function(){


  $('.btn-0').click(function(){
        $('.btn-1').css({'display':'inline-block'});
    $('.btn-2').css({'display':'inline-block'});
    $('.btn-update').css({'display':'none'});
  })

  $('.btn-1').click(function(){
    var name = $('.container .group-1 .sub-group-1 .text-1').val() ;
    var contact = $('.container .group-1 .sub-group-2 .text-2').val() ;
    var email = $('.container .group-2 .text-1').val();
    var password = $('.container .group-3 .text-1').val();
    var confirm =  $('.container .group-3 .text-2').val();
     if(name == "")
      { 
          $('.container .group-1 .sub-group-1 .text-1').focus();
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'red'});
      }
      else if (contact == "")
       {
          $('.container .group-1 .sub-group-2 .text-2').focus();
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
      else if(email == "")
      {
          $('.container .group-2 .text-1').focus();
          $('.container .group-2 .text-1').css({'border':'2px solid red'});
          $('.container .group-2 .label-1').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
      else if(password == "")
      {
          $('.container .group-3 .text-1').focus();
          $('.container .group-3 .text-1').css({'border':'2px solid red'});
          $('.container .group-3 .label-1').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});      
      }
      else if(confirm == "")
      {
          $('.container .group-3 .text-2').focus();
          $('.container .group-3 .text-2').css({'border':'2px solid red'});
          $('.container .group-3 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});    
           $('.container .group-3 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-1').css({'color':'#4285f4'});  
      }
       else
       {
          $('.container .group-3 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});    
           $('.container .group-3 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-1').css({'color':'#4285f4'});  


            document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";

            $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-3 .text-1').val('');
            $('.container .group-3 .text-2').val('');



          $('.container .group-3 .text-2').css({'border':'1px solid #d9d9d9'});
          $('.container .group-3 .label-2').css({'color':'#999'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'1px solid #d9d9d9'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#999'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#999'});  
          $('.container .group-2 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-2 .label-1').css({'color':'#999'});    
           $('.container .group-3 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-3 .label-1').css({'color':'#999'});  
         
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
    var csrftoken = getCookie('csrftoken');
          $.ajax({ method:'post',url:'/admin/add/',data:{csrfmiddlewaretoken: csrftoken , name : name , password : password , email : email , gender :'male' , contact_no : contact},
          success:function(msg){
      document.getElementById("myTable").insertRow(4).innerHTML = '<td id="name">'+name+'</td>'+
      '<td><i id="password" class="fa fa-eye" onclick="showPassword(this);">&nbsp;&nbsp;&nbsp;<input type="password" id="text-2" style="border:none;outline:none;pointer-events: none;" value="'+password+'" ></i></td>'+
      '<td id="email">'+email+'</td>'+
      '<td id="gender">Male</td>'+
      '<td id="contact">'+contact+'</td>'+
      '<td><i class="fa fa-edit" aria-hidden="true" id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
      '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-50px;"></i><td>';
          },
          error:function(msg){} });
      /*  method:'post',
        url: '/admin/add/',
        data:{csrfmiddlewaretoken: $(:"input[name='csrfmiddlewaretoken']").val()},
        //data:{csrfmiddlewaretoken: csrftoken},
        success:function(msg){
         //var url=window.location.href;
         alert('hello3');
          window.location = "http://localhost:8000/admin";
        }
      });*/

     }
});

$('.btn-2').click(function(){

    var name = $('.container .group-1 .sub-group-1 .text-1').val() ;
    var contact = $('.container .group-1 .sub-group-2 .text-2').val() ;
    var email = $('.container .group-2 .text-1').val();
    var password = $('.container .group-3 .text-1').val();
    var confirm =  $('.container .group-3 .text-2').val();

     if(name == "")
      { 
          $('.container .group-1 .sub-group-1 .text-1').focus();
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'red'});
      }
      else if (contact == "")
       {
          $('.container .group-1 .sub-group-2 .text-2').focus();
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
      else if(email == "")
      {
          $('.container .group-2 .text-1').focus();
          $('.container .group-2 .text-1').css({'border':'2px solid red'});
          $('.container .group-2 .label-1').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
      else if(password == "")
      {
          $('.container .group-3 .text-1').focus();
          $('.container .group-3 .text-1').css({'border':'2px solid red'});
          $('.container .group-3 .label-1').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});      
      }
      else if(confirm == "")
      {

          $('.container .group-3 .text-2').focus();
          $('.container .group-3 .text-2').css({'border':'2px solid red'});
          $('.container .group-3 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});    
           $('.container .group-3 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-1').css({'color':'#4285f4'});  
      }
       else
       {
      document.getElementById("myTable").insertRow(4).innerHTML = '<td id="name">'+name+'</td>'+
      '<td><i id="password" class="fa fa-eye" onclick="showPassword(this);">&nbsp;&nbsp;&nbsp;<input type="password" id="text-2" style="border:none;outline:none;pointer-events: none;" value="'+password+'" ></i></td>'+
      '<td id="email">'+email+'</td>'+
      '<td id="gender">Male</td>'+
      '<td id="contact">'+contact+'</td>'+
      '<td><i class="fa fa-edit" aria-hidden="true" id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
      '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-50px;"></i><td>';



          $('.container .group-3 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});    
           $('.container .group-3 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-1').css({'color':'#4285f4'});  


            /*document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";*/

            $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-3 .text-1').val('');
            $('.container .group-3 .text-2').val('');



          $('.container .group-3 .text-2').css({'border':'1px solid #d9d9d9'});
          $('.container .group-3 .label-2').css({'color':'#999'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'1px solid #d9d9d9'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#999'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#999'});  
          $('.container .group-2 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-2 .label-1').css({'color':'#999'});    
           $('.container .group-3 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-3 .label-1').css({'color':'#999'});  

     }
});

    $('.btn-3').click(function(){
          //alert("hello")
            $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-3 .text-1').val('');
            $('.container .group-3 .text-2').val('');


            document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";

    });

    $('#myTable tr td #password').click(function() {
        if($(this).find("input").attr("type") == "password") {
            $(this).find("input").attr("type",'text')
            }
            else
            {
             $(this).find("input").attr("type",'password') 
            }
  });

 $('.container .group-1 .sub-group-1 .text-1').focus(function(){
    $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
    $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
  });

 $('.container .group-1 .sub-group-2 .text-2').focus(function(){
    $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
    $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
  });

 $('.container .group-2 .text-1').focus(function(){
    $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
    $('.container .group-2 .label-1').css({'color':'#4285f4'});
  });

 $('.container .group-3 .sub-group-1 .text-1').focus(function(){
    $('.container .group-3 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
    $('.container .group-3 .sub-group-1 .label-1').css({'color':'#4285f4'});
  });

 $('.container .group-3 .sub-group-2 .text-2').focus(function(){
    $('.container .group-3 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
    $('.container .group-3 .sub-group-2 .label-2').css({'color':'#4285f4'});
  });

 //--------------------------------------------------------------------------------------


  $('.container .group-1 .sub-group-1 .text-1').focusout(function(){
    $('.container .group-1 .sub-group-1 .text-1').css({'border':'1px solid #d9d9d9'});
    $('.container .group-1 .sub-group-1 .label-1').css({'color':'#999'});
  });

 $('.container .group-1 .sub-group-2 .text-2').focusout(function(){
    $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #d9d9d9'});
    $('.container .group-1 .sub-group-2 .label-2').css({'color':'#999'});
  });

 $('.container .group-2 .text-1').focusout(function(){
    $('.container .group-2 .text-1').css({'border':'2px solid #d9d9d9'});
    $('.container .group-2 .label-1').css({'color':'#999'});
  });

 $('.container .group-3 .sub-group-1 .text-1').focusout(function(){
    $('.container .group-3 .sub-group-1 .text-1').css({'border':'2px solid #d9d9d9'});
    $('.container .group-3 .sub-group-1 .label-1').css({'color':'#999'});
  });

 $('.container .group-3 .sub-group-2 .text-2').focusout(function(){
    $('.container .group-3 .sub-group-2 .text-2').css({'border':'2px solid #d9d9d9'});
    $('.container .group-3 .sub-group-2 .label-2').css({'color':'#999'});
  });


/*$('table').on('click' , '#update' ,function(){
    var currow = $(this).closest('tr');
    var name = currow.find('#name').text();
    var password = currow.find('#text-2').val();
    var email = currow.find('#email').text();
    var contact = currow.find('#contact').text();
    alert(email);
});*/


var currow
var oldemail
var name 
var password
var email
var contact



  $('table' ).on('click' , '#update',function(){
   // update
   //alert('adfad');
    //$("#resultas").append(id); // Testing: append the contents of the td to a div
    document.getElementById("cover").style.display="block";
    document.getElementById("cover").style.opacity="0.3";
    document.getElementById("container").style.display="block";
    document.getElementById("container").style.opacity="1";
    //var currow = $(this).closest('tr');
    currow = $(this).closest('tr');
    name = currow.find('#name').text();
    password = currow.find('#text-2').val();
    email = currow.find('#email').text();
    oldemail = currow.find('#email').text();
    contact = currow.find('#contact').text();
    $('.btn-1').css({'display':'none'});
    $('.btn-2').css({'display':'none'});
    $('.btn-update').css({'display':'inline-block'});
    //alert(password);
    /*var name = $('.container .group-1 .sub-group-1 .text-1').val(currow.find('#name').text() ;
    var contact = $('.container .group-1 .sub-group-2 .text-2').val(password) ;
    var email = $('.container .group-2 .text-1').val();
    var password = $('.container .group-3 .text-1').val();
    var confirm =  $('.container .group-3 .text-2').val();*/

    $('.container .group-1 .sub-group-1 .text-1').val(name);
    $('.container .group-1 .sub-group-2 .text-2').val(contact);
    $('.container .group-2 .text-1').val(email);
    $('.container .group-3 .sub-group-1 .text-1').val(password);
    $('.container .group-3 .sub-group-2 .text-2').val(password);

     if(name == "")
      { 
          $('.container .group-1 .sub-group-1 .text-1').focus();
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'red'});
      }
      else if (contact == "")
       {
          $('.container .group-1 .sub-group-2 .text-2').focus();
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
      else if(email == "")
      {
          $('.container .group-2 .text-1').focus();
          $('.container .group-2 .text-1').css({'border':'2px solid red'});
          $('.container .group-2 .label-1').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
      else if(password == "")
      {
          $('.container .group-3 .text-1').focus();
          $('.container .group-3 .text-1').css({'border':'2px solid red'});
          $('.container .group-3 .label-1').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});      
      }
      else if(confirm == "")
      {
          $('.container .group-3 .text-2').focus();
          $('.container .group-3 .text-2').css({'border':'2px solid red'});
          $('.container .group-3 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});    
           $('.container .group-3 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-1').css({'color':'#4285f4'});  
      }
       else
       {
     /* document.getElementById("myTable").insertRow(4).innerHTML = '<td>'+name+'</td>'+
      '<td><i id="password" class="fa fa-eye" onclick="showPassword(this);">&nbsp;&nbsp;&nbsp;<input type="password" id="text-2" style="border:none;outline:none;pointer-events: none;" value="'+password+'" ></i></td>'+
      '<td>'+email+'</td>'+
      '<td>Male</td>'+
      '<td>'+contact+'</td>'+
      '<td><i class="fa fa-edit" aria-hidden="true" id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
      '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-50px;"></i><td>';*/



          $('.container .group-3 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});    
           $('.container .group-3 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-1').css({'color':'#4285f4'});  


          /*  document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";*/

           /*$('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-3 .text-1').val('');
            $('.container .group-3 .text-2').val('');*/



          $('.container .group-3 .text-2').css({'border':'1px solid #d9d9d9'});
          $('.container .group-3 .label-2').css({'color':'#999'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'1px solid #d9d9d9'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#999'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#999'});  
          $('.container .group-2 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-2 .label-1').css({'color':'#999'});    
          $('.container .group-3 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-3 .label-1').css({'color':'#999'});  


         
              }
      });

  
    $('.btn-update').click(function(){
      //alert(currow);
      name = $('.container .group-1 .sub-group-1 .text-1').val();
      contact = $('.container .group-1 .sub-group-2 .text-2').val();
      email = $('.container .group-2 .text-1').val();
      password = $('.container .group-3 .text-1').val()
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
    var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url: '/admin/update/',
        //data:{csrfmiddlewaretoken: $(:"input[name='csrfmiddlewaretoken']").val()},
        data:{csrfmiddlewaretoken: csrftoken,name :name ,password : password , email : email , oldemail : oldemail, gender : 'male' , contact : contact},
        success:function(msg){
         //var url=window.location.href
          //window.location = "http://localhost:8000/admin/customer";
           currow.css({'background':'red'});
            setTimeout(function() {
                        currow.css({'background':'white','transition':'0.5s'}); 
                    }, 1000); 
        }
      });
      currow.find('#name').text($('.container .group-1 .sub-group-1 .text-1').val());
      currow.find('#text-2').val($('.container .group-3 .text-1').val());
      currow.find('#email').text($('.container .group-2 .text-1').val());
      currow.find('#contact').text($('.container .group-1 .sub-group-2 .text-2').val());

      //currow.nextNode()

        $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-3 .text-1').val('');
            $('.container .group-3 .text-2').val('');

        document.getElementById("cover").style.display="none";
        document.getElementById("cover").style.opacity="0";
        document.getElementById("container").style.display="none";
        document.getElementById("container").style.opacity="0";
        
        //setTimeout(function(){currow.style.background('white');},3000);
       


    });


    $('#logout').click(function(){

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url: '/admin/logout/',
        data:{csrfmiddlewaretoken: csrftoken},
        success:function(msg){
          window.location = "http://localhost:8000/admin";
        }
      });


    });
var p
var name
var email
    $('table' ).on('click' , '#delete',function(){
        var  currow = $(this).closest('tr');
        name = currow.find('#name').text();
        email = currow.find('#email').text();
        $("#name").text(name);
        document.getElementById("cover").style.display="block";
        document.getElementById("cover").style.opacity="0.3";
        document.getElementById("container-2").style.display="block";
        document.getElementById("container-2").style.opacity="1";
        p=this.parentNode.parentNode;
    });
       $('#cancel').click(function(){
        document.getElementById("cover").style.display="none";
        document.getElementById("cover").style.opacity="0";
        document.getElementById("container-2").style.display="none";
        document.getElementById("container-2").style.opacity="0";
    });
      $('#deleteRow').click(function(){
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
    var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url: '/admin/customer_delete/',
        //data:{csrfmiddlewaretoken: $(:"input[name='csrfmiddlewaretoken']").val()},
        data:{csrfmiddlewaretoken: csrftoken, email : email},
        success:function(msg){
         //var url=window.location.href;
        p.parentNode.removeChild(p);
        document.getElementById("cover").style.display="none";
        document.getElementById("cover").style.opacity="0";
        document.getElementById("container-2").style.display="none";
        document.getElementById("container-2").style.opacity="0";
        }
      });
      });

});

   $('table' ).on('keyup' , '#search',function(){
      var csrftoken = getCookie('csrftoken');
      var search_data = $("#search").val();
      alert('alert');
      $.ajax({
        method:'post',
        url:'/admin/customer_search/',
        data : {csrfmiddlewaretoken : csrftoken ,search_data : search_data},
        success:function(msg)
        {
          //alert(msg);
          $('#myTable tr').remove();
          $('#myTable').append(msg);
          $("#search").val(search_data);
          //alert($("#search").val);
          $("#search").focus();
        },
        error:function(msg){
          $("#search").val(search_data);
          //alert('fail');
        },
      });
    });

/*$(document).ready(function(){
  $('#update').click(function(){
    alert('alert');
    var name = $('.container .group-1 .sub-group-1 .text-1').val() ;
    var contact = $('.container .group-1 .sub-group-2 .text-2').val() ;
    var email = $('.container .group-2 .text-1').val();
    var password = $('.container .group-3 .text-1').val();
    var confirm =  $('.container .group-3 .text-2').val();
     if(name == "")
      { 
          $('.container .group-1 .sub-group-1 .text-1').focus();
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'red'});
      }
      else if (contact == "")
       {
          $('.container .group-1 .sub-group-2 .text-2').focus();
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
      else if(email == "")
      {
          $('.container .group-2 .text-1').focus();
          $('.container .group-2 .text-1').css({'border':'2px solid red'});
          $('.container .group-2 .label-1').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
      else if(password == "")
      {
          $('.container .group-3 .text-1').focus();
          $('.container .group-3 .text-1').css({'border':'2px solid red'});
          $('.container .group-3 .label-1').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});      
      }
      else if(confirm == "")
      {
          $('.container .group-3 .text-2').focus();
          $('.container .group-3 .text-2').css({'border':'2px solid red'});
          $('.container .group-3 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});    
           $('.container .group-3 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-1').css({'color':'#4285f4'});  
      }
       else
       {
      document.getElementById("myTable").insertRow(4).innerHTML = '<td>'+name+'</td>'+
      '<td><i id="password" class="fa fa-eye" onclick="showPassword(this);">&nbsp;&nbsp;&nbsp;<input type="password" id="text-2" style="border:none;outline:none;pointer-events: none;" value="'+password+'" ></i></td>'+
      '<td>'+email+'</td>'+
      '<td>Male</td>'+
      '<td>'+contact+'</td>'+
      '<td><i class="fa fa-edit" aria-hidden="true" id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
      '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-50px;"></i><td>';



          $('.container .group-3 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});  
          $('.container .group-2 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-1').css({'color':'#4285f4'});    
           $('.container .group-3 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-3 .label-1').css({'color':'#4285f4'});  


            document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";

            $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-3 .text-1').val('');
            $('.container .group-3 .text-2').val('');



          $('.container .group-3 .text-2').css({'border':'1px solid #d9d9d9'});
          $('.container .group-3 .label-2').css({'color':'#999'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'1px solid #d9d9d9'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#999'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#999'});  
          $('.container .group-2 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-2 .label-1').css({'color':'#999'});    
           $('.container .group-3 .text-1').css({'border':'1px solid #d9d9d9'});
          $('.container .group-3 .label-1').css({'color':'#999'});  

     }
      });*/