$('.carousel').carousel();

$(document).ready(function() {  
    
    // Using TouchSwipe plugin to enable carousel swiping
    // Code snippet from: https://lazcreative.com/blog/adding-swipe-support-to-bootstrap-carousel-3-0

    //Enable swiping...
    $(".carousel-inner").swipe( {
    	//Generic swipe handler for all directions
    	swipeLeft:function(event, direction, distance, duration, fingerCount) {
    		$(this).parent().carousel('next'); 
    	},
    	swipeRight: function() {
    		$(this).parent().carousel('prev'); 
    	},
    	//Default is 75px, set to 0 for demo so any distance triggers swipe
    	threshold:0
    },{passive:true});
});