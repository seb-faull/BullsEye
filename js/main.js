$(function() {
	//console.log('Dom has loaded');

	// Global variables
	var points = 0;
	var $pointsValue = $('#points')
	var $greenTarget = $('.green-target');
	var $blueTarget = $('.blue-target');
	var $redTarget = $('.red-target');
	var $allTargets = $('.target');
	var totalLives = 3;
	var $score = $('#score-container');
	var $lives = $('#life-container');
	var $gameOver = $('#game-over').hide();
	var $cover = $('#cover');
	var $instructionScreen = $('#instruction-screen');
	var $arena = $('#arena');
	var $play = $('#play');
	var $mainMenu = $('#main-menu');
	var $gun = $("#gun-image");
	var gunCenter = [$gun.offset().left + $gun.width()/2, $gun.offset().top + $gun.height()/2 ];
	var $circle = $('#circle');
	var $gameModesScreen = $('#game-modes-screen');

	//Intro
		//Cover image & Instructions
	$cover.fadeIn('slow');
	setTimeout(function() {
		$cover.fadeOut('slow');

		setTimeout(function() {
			$instructionScreen.fadeIn('slow');
		}, 500);
	}, 2000);

		//Instructions fade out
	$play.on('click', function (event) {
		$instructionScreen.fadeOut('slow');

		setTimeout(function() {
			$gameModesScreen.fadeIn('slow');
		}, 500);

		//restartGame ()
	});

	//Game Modes screen audio
	$gameModesScreen.on('click', function (event) {
		var audio = new Audio('sounds/gunshot.mp3');

		audio.play();
	});

	$mainMenu.on('click', function (event) {
		$arena.fadeOut('slow');

		setTimeout(function() {
			$instructionScreen.fadeIn('slow');
		}, 500);
	});

	//In play
	$greenTarget.on('click', function (event) {
		console.log('Greens been clicked');

		points += 10;
		$pointsValue.html(points);
		$greenTarget.addClass('hit');

		$greenTarget.attr('src', 'images/target-shot.png');
		setTimeout(function() {
			$greenTarget.attr('src', 'images/target.png');
			$greenTarget.removeClass('hit');
		}, 1000);
	});

	$blueTarget.on('click', function (event) {
		console.log('Blues been clicked!');

		points += 20;
		$pointsValue.html(points);

		$blueTarget.addClass('hit');

		$blueTarget.attr('src', 'images/target-shot.png');
		setTimeout(function() {
			$blueTarget.attr('src', 'images/target.png');
			$blueTarget.removeClass('hit');
		}, 1000);
	});

	$redTarget.on('click', function (event) {
		console.log('Reds been clicked!');

		points += 40;
		$pointsValue.html(points);

		$redTarget.addClass('hit');

		$redTarget.attr('src', 'images/target-shot.png');
		setTimeout(function() {
			$redTarget.attr('src', 'images/target.png');
			$redTarget.removeClass('hit');
		}, 1000);
	});

	//Constantly checks number of lives whilst losing a life when targets are missed
		//Arena audio
	$arena.on('click', function (event) {
		var audio = new Audio('sounds/gunshot.mp3');

		audio.play();

		if (!($greenTarget.hasClass('hit') ||
			$blueTarget.hasClass('hit') ||
			$redTarget.hasClass('hit'))) {
			totalLives-- ;
			numOfLives();
			
		}

		checkLives();
	});

	
	//Shotgun Mouse Tracking	
	var box = $("#gun-image");

	$(document).mousemove(function(e){    
	    
    	var boxCenter = [box.offset().left+box.width()/2, box.offset().top+box.height()/2];

		var angle = Math.atan2(e.pageX- boxCenter[0],- (e.pageY- boxCenter[1]) )*(180/Math.PI);	    
	    
	    box.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
	    box.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
	    box.css({ 'transform': 'rotate(' + angle + 'deg)'});
	    
	});

     

	//Instruction audio
	$instructionScreen.on('click', function (event) {
		var audio = new Audio('sounds/gunshot.mp3');

		audio.play();
	});


	// Random animate path for each target element
	$('.target').each(function (i, el) {
		
		animateDivInOutQuint($(this));
	});


	function makeNewPosition() {
	    
	    // Get viewport dimensions (remove the dimension of the div)
	    var h = $('#target-arena').height() - 150;
	    var w = $('#target-arena').width() - 50;
	    
	    var nh = Math.floor(Math.random() * h);
	    var nw = Math.floor(Math.random() * w);
	    
	    return [nh,nw];    	    
	}

	//Game mode functions (easin in animations)

	function animateDivQuad($el) {
		var newq = makeNewPosition();
		$el.animate({ top: newq[0], left: newq[1] }, 1000, ['easeOutQuad'], function(){
			animateDivQuad($el);
		});
	}

	function animateDivOutSine($el) {
		var newq = makeNewPosition();
		$el.animate({ top: newq[0], left: newq[1] }, 1000, ['easeOutSine'], function(){
			animateDivOutSine($el);
		});
	}

	function animateDivInOutCubic($el) {
		var newq = makeNewPosition();
		$el.animate({ top: newq[0], left: newq[1] }, 1000, ['easeInOutCubic'], function(){
			animateDivInOutCubic($el);
		});
	}

	function animateDivInOutQuint($el) {
		var newq = makeNewPosition();
		$el.animate({ top: newq[0], left: newq[1] }, 1000, ['easeInOutQuint'], function(){
			animateDivInOutQuint($el);
		});
	}

	function animateDivInOutExpo($el) {
		var newq = makeNewPosition();
		$el.animate({ top: newq[0], left: newq[1] }, 800, ['easeInOutExpo'], function(){
			animateDivInOutExpo($el);
		});
	}

	function animateDivInExpo($el) {
		var newq = makeNewPosition();
		$el.animate({ top: newq[0], left: newq[1] }, 1000, ['easeInExpo'], function(){
			animateDivInExpo($el);
		});
	}

	function animateDivInOutCirc($el) {
		var newq = makeNewPosition();
		$el.animate({ top: newq[0], left: newq[1] }, 1000, ['easeInOutCirc'], function(){
			animateDivInOutCirc($el);
		});
	}


	//-------------------------------------------------------

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

	function checkLives() {
		if (totalLives === 0) {
			$allTargets.stop();
			$allTargets.hide();
			var points = $('#points').html()
			$('#scored-header').html('You Scored: ' + points);
			$gameOver.fadeIn('slow');
		}
	}

	function restartGame() {
		points = 0;
		$pointsValue.html(points);
		totalLives = 3;
		$gameOver.hide();
		numOfLives();
		$allTargets.show();

		$('.target').each(function (i, el) {
		
			animateDiv($(this));
		});
	}




});




