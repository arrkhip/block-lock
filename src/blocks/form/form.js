
$('.form input[type="checkbox"]').on('change', function(){
  if($(this).prop('checked')){
 $('.form .btn').attr('disabled', false);
  }else{
 $('.form .btn').attr('disabled', true);
  }
 });



