function columnHeight(){var a=$("#section-three").find(".img-container").outerHeight();$(".section-three-meta-container").css({height:a})}$(".carousel").carousel(),$(document).ready(function(){$(".carousel-inner").swipe({swipeLeft:function(a,b,c,d,e){$(this).parent().carousel("next")},swipeRight:function(){$(this).parent().carousel("prev")},threshold:0})}),$("#myplay1").click(function(){$("#playit1").show(),$(".carousel-indicators").css("display","none"),$("body").css("overflow-y","hidden")}),$("#playit1").click(function(){$("#playit1").hide(),$(".carousel-indicators").css("display","block"),$("body").css("overflow-y","auto")}),active=!1,$(".hamburger--squeeze").on("click",function(){0==active?($(this).addClass("is-active"),active=!0):($(this).removeClass("is-active"),active=!1)}),open=!1,$(".question").on("click",function(){$(this).hasClass("collapsed")?(open=!0,console.log("made it on open"),$(this).parent().parent().find(".arrow-down").addClass("hide"),$(this).parent().parent().find(".arrow-up").removeClass("hide")):(open=!1,console.log("made it on close"),$(this).parent().parent().find(".arrow-down").removeClass("hide"),$(this).parent().parent().find(".arrow-up").addClass("hide"))}),$(window).resize(function(){$(window).width()>767&&columnHeight()}),$(document).ready(function(){$(window).width()>767&&columnHeight()});