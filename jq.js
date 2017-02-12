$(document).scroll(function(){
  var height = $(window).scrollTop();
  if (height>650) {
     $('.navb').css("background-color","#1DE9B6");
  }
  else if(height<650){
    $('.navb').css("background-color","#B2FF59");
  }
});
function reloadForm() {
  var iframe = document.getElementById('#regForm');
  iframe.src = iframe.src;
}
