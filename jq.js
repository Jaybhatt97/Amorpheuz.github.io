$(document).scroll(function(){
  var height = $(window).scrollTop();
  if (height>100) {
     $('#navbar').css("color","green");
  }
  if(height<100){
    $('#navbar').css("color","red");
  }
});
