$(function() {
	//console.log('Dom has loaded');

	// Global variables
	var points = 0;
	var sounds = true;
	var audio = new Audio('sounds/gunshot.mp3');


	$('.green-target').on('click', function (event) {
		console.log('Greens been clicked');
		var $greenTarget = $('.green-target');
		$('#points').html(function(i, val) { return val * 1 + 1 });
		$greenTarget.attr('src', 'images/target-shot.png');
		setTimeout(function() {
			$greenTarget.attr('src', 'images/target.png');
		}, 1000);
	});

	$('.blue-target').on('click', function (event) {
		console.log('Blues been clicked!');
		var $blueTarget = $('.blue-target');
		$('#points').html(function(i, val) { return val * 1 + 2 });
		$blueTarget.attr('src', 'images/target-shot.png');
		setTimeout(function() {
			$blueTarget.attr('src', 'images/target.png');
		}, 1000);
	});

	$('.red-target').on('click', function (event) {
		console.log('Reds been clicked!');
		var $redTarget = $('.red-target');
		$('#points').html(function(i, val) { return val * 1 + 4 });
		$redTarget.attr('src', 'images/target-shot.png');
		setTimeout(function() {
			$redTarget.attr('src', 'images/target.png');
		}, 1000);
	});

	$('#arena').on('click', function (event) {
		audio.play();
	});

	// Random animate path for each target element
	$('.target').each(function (i, el) {
		
		animateDiv($(this));
	});



});


function makeNewPosition() {
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('#target-arena').height() - 150;
    var w = $('#target-arena').width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}


function animateDiv($el) {
	var newq = makeNewPosition();
	$el.animate({ top: newq[0], left: newq[1] }, 1000, function(){
		animateDiv($el);
	})
}








