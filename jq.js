$(document).scroll(function(){
  var height = $(window).scrollTop();
  if (height>100) {
     $('.navb').css("background-color","#86c440");
  }
  if(height<100){
    $('.navb').css("background-color","#2fbbab");
  }
});
