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

open = false;
$('.question').on('click',function(){
	if($(this).hasClass('collapsed')){
		open = true;
		console.log('made it on open')
		$(this).parent().parent().find('.arrow-down').addClass('hide');
		$(this).parent().parent().find('.arrow-up').removeClass('hide');
	}else{
		open = false;
		console.log('made it on close')
		$(this).parent().parent().find('.arrow-down').removeClass('hide');
		$(this).parent().parent().find('.arrow-up').addClass('hide');
	}
}); 

// Fix for floating text bug (safari only) on howitworks page section 3
var is_safari = (navigator.userAgent.indexOf('Safari') != -1) && (navigator.userAgent.indexOf('Chrome') == -1);

$(window).resize(function(){
    if (is_safari) {
        if ($(window).width() > 767) {
          $('.howitworks-section-three-meta').addClass('howitworks-section-three-meta-safari');
        } else {
          $('.howitworks-section-three-meta').removeClass('howitworks-section-three-meta-safari');
        }
    }
});
$(document).ready(function(){
    if (is_safari) {
        if ($(window).width() > 767) {
          $('.howitworks-section-three-meta').addClass('howitworks-section-three-meta-safari');
        } else {
           $('.howitworks-section-three-meta').removeClass('howitworks-section-three-meta-safari');
        }
    }
});
