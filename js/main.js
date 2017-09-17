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
	});

	$('.blue-target').on('click', function (event) {
		console.log('Blues been clicked!');
		var $blueTarget = $('.blue-target');
		$('#points').html(function(i, val) { return val * 1 + 2 });
	});

	$('.red-target').on('click', function (event) {
		console.log('Reds been clicked!');
		var $redTarget = $('.red-target');
		$('#points').html(function(i, val) { return val * 1 + 3 });
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
	$el.animate({ top: newq[0], left: newq[1] }, function(){
		animateDiv($el);
	})
}


function updateScore(/*quantity*/) {
	// points = points + quantity;
	// $('#points').html(points);
}






