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