$(".carousel").carousel(),$("#myplay1").click(function(){$("#playit1").show(),$(".carousel-indicators").css("display","none"),$("body").css("overflow-y","hidden")}),$("#playit1").click(function(){$("#playit1").hide()}),active=!1,$(".hamburger--squeeze").on("click",function(){0==active?($(this).addClass("is-active"),active=!0):($(this).removeClass("is-active"),active=!1)});