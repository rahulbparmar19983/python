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

function myDelete(o)
{
  var p=o.parentNode.parentNode;
  p.parentNode.removeChild(p);
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
    var bus_id = $('.container .group-1 .sub-group-1 .text-1').val() ;
    var route_id = $('.container .group-1 .sub-group-2 .text-2').val() ;
  
     if(bus_id == "")
      { 
          $('.container .group-1 .sub-group-1 .text-1').focus();
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'red'});
      }
      else if (route_id== "")
       {
          $('.container .group-1 .sub-group-2 .text-2').focus();
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
       else
       {
       /*document.getElementById("myTable").insertRow(4).innerHTML = '<td id="route_id">'+route_id+'</td>'+
      '<td id="deapture_station">'+deapture_station+'</td>'+
      '<td id="arrival_station">'+arrival_station+'</td>'+
      '<td><i class="fa fa-edit" aria-hidden="true" id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
      '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-75px;"></i><td>';*/

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
            document.getElementById("container").style.opacity="0";

            $('.container .group-1 .sub-group-1 .text-1').val('');
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
           var row = document.getElementById("myTable");
          var pk =$('#myTable tr:eq(4) td:eq(0)').text();
          pk= parseInt(pk)+1;
          //alert(row..find('#seat_id').val());
          var csrftoken = getCookie('csrftoken');
          $.ajax({
            method:'post',
            url:'/admin/bus_route_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,b_id : bus_id , r_id : route_id},
            success:function(msg){   
            document.getElementById("myTable").insertRow(4).innerHTML = '<td id="bus_route_id">'+pk+'</td>'+
            '<td id="bus_id">'+bus_id+'</td>'+
            '<td id="route_id">'+route_id+'</td>'+
            '<td><i class="fa fa-edit" aria-hidden="true" id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
            '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-50px;"></i><td>';
                          
             document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";

            $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-2 .text-2').val('');
            $('.container .group-3 .text-1').val('');


          },
            error:function(msg){alert('fail')},

           });

     }
     
      });

$('.btn-2').click(function(){

        var bus_id = $('.container .group-1 .sub-group-1 .text-1').val() ;
    var route_id = $('.container .group-1 .sub-group-2 .text-2').val() ;
     if(bus_id == "")
      { 
          $('.container .group-1 .sub-group-1 .text-1').focus();
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'red'});
      }
      else if (route_id == "")
       {
          $('.container .group-1 .sub-group-2 .text-2').focus();
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
       else
       {
      /* document.getElementById("myTable").insertRow(4).innerHTML = '<td id="route_id">'+route_id+'</td>'+
      '<td id="deapture_station">'+deapture_station+'</td>'+
      '<td id="arrival_station">'+arrival_station+'</td>'+
      '<td><i class="fa fa-edit" aria-hidden="true" id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
      '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-75px;"></i><td>';*/



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
                     var row = document.getElementById("myTable");
          var pk =$('#myTable tr:eq(4) td:eq(0)').text();
          pk= parseInt(pk)+1;
          //alert(row..find('#seat_id').val());
          var csrftoken = getCookie('csrftoken');
          $.ajax({
            method:'post',
            url:'/admin/bus_route_insert/',
            data:{csrfmiddlewaretoken: csrftoken ,b_id : bus_id , r_id : route_id},
            success:function(msg){   
            document.getElementById("myTable").insertRow(4).innerHTML = '<td id="bus_route_id">'+pk+'</td>'+
            '<td id="bus_id">'+bus_id+'</td>'+
            '<td id="route_id">'+route_id+'</td>'+
            '<td><i class="fa fa-edit" aria-hidden="true" id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
            '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-50px;"></i><td>';
                          
           /*  document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";*/

            $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-2 .text-2').val('');
            $('.container .group-3 .text-1').val('');


          },
            error:function(msg){alert('fail')},

           }); 

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
var bus_route_id
var bus_id
var route_id




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
    bus_route_id = currow.find('#bus_route_id').text();
    bus_id = currow.find('#bus_id').text();
    route_id = currow.find('#route_id').text();
    $('.btn-1').css({'display':'none'});
    $('.btn-2').css({'display':'none'});
    $('.btn-update').css({'display':'inline-block'});
    //alert(password);
    /*var name = $('.container .group-1 .sub-group-1 .text-1').val(currow.find('#name').text() ;
    var contact = $('.container .group-1 .sub-group-2 .text-2').val(password) ;
    var email = $('.container .group-2 .text-1').val();
    var password = $('.container .group-3 .text-1').val();
    var confirm =  $('.container .group-3 .text-2').val();*/

    $('.container .group-1 .sub-group-1 .text-1').val(bus_id);
    $('.container .group-1 .sub-group-2 .text-2').val(route_id);
    //$('.container .group-3 .sub-group-2 .text-2').val(journey_date);
     if(bus_route_id == "")
      { 
          $('.container .group-1 .sub-group-1 .text-1').focus();
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'red'});
      }
      else if (bus_id == "")
       {
          $('.container .group-1 .sub-group-2 .text-2').focus();
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid red'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'red'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
      else if(route_id == "")
      {
          $('.container .group-2 .text-1').focus();
          $('.container .group-2 .text-1').css({'border':'2px solid red'});
          $('.container .group-2 .label-1').css({'color':'red'});
          $('.container .group-1 .sub-group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-2 .label-2').css({'color':'#4285f4'});
          $('.container .group-1 .sub-group-1 .text-1').css({'border':'2px solid #4285f4'});
          $('.container .group-1 .sub-group-1 .label-1').css({'color':'#4285f4'});
      }
       else
       {
      /* document.getElementById("myTable").insertRow(4).innerHTML = '<td id="route_id">'+seat_id+'</td>'+
      '<td id="deapture_station">'+seat_no+'</td>'+
      '<td id="arrival_station">'+customer_id+'</td>'+
      '<td id="pickup_station">'+bus_id+'</td>'+
      '<td id="distance">'+journey_date+'</td>'+
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
           $('.container .group-2 .text-2').css({'border':'2px solid #4285f4'});
          $('.container .group-2 .label-2').css({'color':'#4285f4'});  


          /*  document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";

            $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-2 .text-2').val('');
            $('.container .group-3 .text-1').val('');*/



          $('.container .group-2 .text-2').css({'border':'1px solid #d9d9d9'});
          $('.container .group-2 .label-2').css({'color':'#999'});
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
      

       bus_id=$('.container .group-1 .sub-group-1 .text-1').val();
      route_id=$('.container .group-1 .sub-group-2 .text-2').val();

//alert(currow);
       /*var seat_id=currow.find('#seat_id').text($('.container .group-1 .sub-group-1 .text-1').val());
      var seat_no=currow.find('#seat_no').text($('.container .group-1 .sub-group-2 .text-2').val());
      var customer_id=currow.find('#customer_id').text($('.container .group-2 .text-1').val());
      var bus_id=currow.find('#bus_id').text($('.container .group-2 .text-2').val());
      var journey_date=currow.find('#journey_date').text($('.container .group-3 .text-1').val());*/


      //alert(bus_route_id)
          var csrftoken = getCookie('csrftoken');
          $.ajax({
            method:'post',
            url:'/admin/bus_route_update/',
            data:{csrfmiddlewaretoken: csrftoken ,bus_route_id : bus_route_id , bus_id : bus_id , route_id : route_id },
            success:function(msg){           
             document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";

            $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-2 .text-2').val('');
            $('.container .group-3 .text-1').val('');



            /*document.getElementById("myTable").insertRow(4).innerHTML = '<td id="seat_id">'+pk+'</td>'+
            '<td id="seat_no">'+seat_no+'</td>'+
            '<td id="customer_id">'+customer_id+'</td>'+
            '<td id="bus_id">'+bus_id+'</td>'+
            '<td id="journey_date">'+journey_date+'</td>'+
            '<td><i class="fa fa-edit" aria-hidden="true" id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>'+
            '<td><i class="fa fa-trash" onclick="myDelete(this);" aria-hidden="true" style="font-size:20px;margin-left:-50px;"></i><td>';*/

      currow.find('#bus_route_id').text(bus_route_id);
      currow.find('#bus_id').text(bus_id);
      currow.find('#route_id').text(route_id);
      //currow.find('#journey_date').text($('.container .group-3 .text-2').val());



        $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-2 .text-2').val('');
            $('.container .group-3 .text-1').val('');

        document.getElementById("cover").style.display="none";
        document.getElementById("cover").style.opacity="0";
        document.getElementById("container").style.display="none";
        document.getElementById("container").style.opacity="0";
         currow.css({'background':'red'}); 
        //setTimeout(function(){currow.style.background('white');},3000);
        setTimeout(function() {
                        currow.css({'background':'white','transition':'0.5s'}); 
                    }, 1000);
                          },
            error:function(msg){alert('fail')},

          });

    });


});
var p
var bus_route_id


    $('table' ).on('click' , '#delete',function(){
        var  currow = $(this).closest('tr');
        bus_route_id = currow.find('#bus_route_id').text();
        $("#name").text(bus_route_id);
        document.getElementById("cover").style.display="block";
        document.getElementById("cover").style.opacity="0.3";
        document.getElementById("container-2").style.display="block";
        document.getElementById("container-2").style.opacity="1";
        p=this.parentNode.parentNode;
        alert(bus_route_id)
    });
      $('#cancel').click(function(){
        document.getElementById("cover").style.display="none";
        document.getElementById("cover").style.opacity="0";
        document.getElementById("container-2").style.display="none";
        document.getElementById("container-2").style.opacity="0";
    });
    $('#deleteRow').click(function(){
      var csrftoken = getCookie('csrftoken');
      $.ajax({
        method:'post',
        url:'/admin/bus_route_delete/',
        data : {csrfmiddlewaretoken : csrftoken ,bus_route_id : bus_route_id},
        success:function(msg)
        {
        p.parentNode.removeChild(p);
        document.getElementById("cover").style.display="none";
        document.getElementById("cover").style.opacity="0";
        document.getElementById("container-2").style.display="none";
        document.getElementById("container-2").style.opacity="0";
        },
        error:function(msg){
          alert('error');
        },
      });

    });

  
  /*  $('.btn-update').click(function(){
      //alert(currow);

          var csrftoken = getCookie('csrftoken');
          $.ajax({
            method:'post',
            url:'/admin/bus_route_update/',
            data:{csrfmiddlewaretoken: csrftoken ,bus_route_id : bus_route_id ,b_id : bus_id , r_id : route_id},
            success:function(msg){   
            
                          
           /*  document.getElementById("cover").style.display="none";
            document.getElementById("cover").style.opacity="0";
            document.getElementById("container").style.display="none";
            document.getElementById("container").style.opacity="0";

            $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-2 .text-2').val('');
            $('.container .group-3 .text-1').val('');


          currow.find('#bus_route_id').text(bus_route_id);
          currow.find('#bus_id').text(bus_id);
          currow.find('#route_id').text(route_id);



        $('.container .group-1 .sub-group-1 .text-1').val('');
            $('.container .group-1 .sub-group-2 .text-2').val('');
            $('.container .group-2 .text-1').val('');
            $('.container .group-3 .text-1').val('');
            $('.container .group-3 .text-2').val('');

        document.getElementById("cover").style.display="none";
        document.getElementById("cover").style.opacity="0";
        document.getElementById("container").style.display="none";
        document.getElementById("container").style.opacity="0";
         currow.css({'background':'red'}); 
        //setTimeout(function(){currow.style.background('white');},3000);
        setTimeout(function() {
                        currow.css({'background':'white','transition':'0.5s'}); 
                    }, 1000);


    });

    },
            error:function(msg){alert('fail')},

           }); 
});*/


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