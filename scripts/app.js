$('.carousel').carousel()

$("#myplay1").click(function(){
  $("#playit1").show();
  $(".carousel-indicators").css("display", "none");
  $('body').css('overflow-y', 'hidden');
});

$("#playit1").click(function(){
  $("#playit1").hide();
});

$("#myplay1").click(function(event){
  $("#playit1").show();
  $(".carousel-indicators").css("display", "none");
  $('body').css('overflow-y', 'hidden');
});

$("#playit1").click(function(event){
  $("#playit1").hide();
  event.preventDefault()
});
