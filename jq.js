$(document).scroll(function(){
  var height = $(window).scrollTop();
  if (height>650) {
     $('.navb').css("background-color","#1DE9B6");
  }
  else if(height<650){
    $('.navb').css("background-color","#B2FF59");
  }
});
