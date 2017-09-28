$(document).ready(function(){

	// Toggle for dropdown
	$(".dropbtn").click(function () {
		$("nav").slideToggle();
		$(this).toggleClass("transform");
		$("header").toggleClass("headerbg");		
	});

    // Get window scroll position
    var scrollPosition = $(window).scrollTop();

    // Function to add background if scrolled
    function checkScroll(){
        var startY = $("header").height() + 10;
        if($(window).scrollTop() > startY) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    }
    if($("header").length > 0) {
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }

    // If scroll postion is not at the top then call function
    if(scrollPosition > 25){
        checkScroll();
    }

    function showNav() {
    	if ($(window).width() >= 1024) {
    		$("nav").show();
    	} else {
    		$("nav").hide();
    	}
    }

    window.onresize = showNav;
});