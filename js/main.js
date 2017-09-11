$(document).ready(function() {

	// Show/hide elements depending on window size
	if ($(window).width() <= 1024) {
		$("nav").hide();
	} else if ($(window).width() > 1024) {
		$("nav").show();
		$(".nav-btn").hide();
	};

	// Toggle for the dropdown
	$(".dropbtn").click(function () {
		$("nav").slideToggle();
	});
});