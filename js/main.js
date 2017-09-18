$(function() {
	//console.log('Dom has loaded');

	// Global variables
	var points = 0;
	var $blueTarget = $('.blue-target');
	var $greenTarget = $('.green-target');
	var $redTarget = $('.red-target');
	var totalLives = 3;


	$greenTarget.on('click', function (event) {
		console.log('Greens been clicked');
		$('#points').html(function(i, val) { return val * 1 + 1 });

		$greenTarget.addClass('hit');

		$greenTarget.attr('src', 'images/target-shot.png');
		setTimeout(function() {
			$greenTarget.attr('src', 'images/target.png');
			$greenTarget.removeClass('hit');
		}, 1000);
	});

	$blueTarget.on('click', function (event) {
		console.log('Blues been clicked!');
		$('#points').html(function(i, val) { return val * 1 + 2 });

		$blueTarget.addClass('hit');

		$blueTarget.attr('src', 'images/target-shot.png');
		setTimeout(function() {
			$blueTarget.attr('src', 'images/target.png');
			$blueTarget.removeClass('hit');
		}, 1000);
	});

	$redTarget.on('click', function (event) {
		console.log('Reds been clicked!');
		$('#points').html(function(i, val) { return val * 1 + 4 });

		$redTarget.addClass('hit');

		$redTarget.attr('src', 'images/target-shot.png');
		setTimeout(function() {
			$redTarget.attr('src', 'images/target.png');
			$redTarget.removeClass('hit');
		}, 1000);
	});

	$('#arena').on('click', function (event) {
		var audio = new Audio('sounds/gunshot.mp3');

		audio.play();

		if (!($greenTarget.hasClass('hit') ||
			$blueTarget.hasClass('hit') ||
			$redTarget.hasClass('hit'))) {
			totalLives-- ;
			numOfLives();
			console.log(numOfLives);
			
		}
	});

	// Random animate path for each target element
	$('.target').each(function (i, el) {
		
		animateDiv($(this));
	});




	function numOfLives() {
		switch (totalLives) {
			case 3: $('#life1, #life2, #life3').show();
				break;

			case 2: $('#life3').fadeOut('fast');
				break;

			case 1: $('#life2').fadeOut('fast');
				break;

			case 0: $('#life1').fadeOut('fast');
		}
	}

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
		});
	}

});




