$("#myplay1").click(function(){
  $("#playit1").show();
  $(".carousel-indicators").css("display", "none");
  $('body').css('overflow-y', 'hidden');
});

$("#playit1").click(function(){
  $("#playit1").hide();
  $(".carousel-indicators").css("display", "block");
  $('body').css('overflow-y', 'auto');
});

active = false;
$('.hamburger--squeeze').on('click',function(){
	if(active == false){
		$(this).addClass('is-active');
		active = true;
	} else {
		$(this).removeClass('is-active');
		active = false;
	}
});
