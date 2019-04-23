$(document).ready(function(){
// start carrousel

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
   $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
     });
     function autoplay() {
 $('.carousel').carousel('next');
 setTimeout(autoplay, 4000);
}    
setTimeout(autoplay, 4000);
   // move next carousel
   $('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
   });

   // move prev carousel
   $('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
   });
  $('#search').click(function(){
                  $('html, body').animate({
                    scrollTop: $("#search_bus").offset().top
                }, 2000);
              $('.carousel').carousel('next');});
  $('.datepicker').datepicker({
    format: 'dd/mm/yyyy',
    minDate: new Date()
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
  $("#date").focus(function(){
      $("#date").click();
    });
  $('#book').click(function(){
    alert('alert');
  });
});