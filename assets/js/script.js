$(document).ready(function() {
	$("#fullpage").fullpage({
		verticalCentered: true,
		resize: true,
		sectionsColor: ['#ff5555', '#77dd77', '#ccc', '#fff'],
		anchors: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
		scrollingSpeed: 400
	});
});