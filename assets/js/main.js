dynamicBackground();


function showPassword(){
  var passwordField = $('#password');
  var passwordFieldType = $(passwordField).attr('type');
  if(passwordFieldType == "password"){
    passwordField.attr('type','text');
  }else{
    passwordField.attr('type','password');
  }
}

$('.st-showPassword').click(function(){
  showPassword();
  $(this).toggleClass('active');
});

$('.st-social-icons.st-style2 a').mouseenter(function(){
  $(this).addClass('active').siblings().removeClass('active');
});



// dynamic bg 
function dynamicBackground() {
  // Background images
  $('.st-dynamic-bg').each(function() {
      var src = $(this).attr('data-src');
      $(this).css({
          'background-image': 'url(' + src + ')'
      });
  });
}