$(function() {

	console.log('Dom has loaded');

	$('.green-target').on('click', function (event) {
		console.log('Greens been clicked');
		var $greenTarget = $('.green-target');

	});

	$('.blue-target').on('click', function (event) {
		console.log('Blues been clicked!');
		var $blueTarget = $('.blue-target');

	});

	$('.red-target').on('click', function (event) {
		console.log('Reds been clicked!');
		var $redTarget = $('.red-target');

	});




});