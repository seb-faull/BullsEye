$(function() {

	//console.log('Dom has loaded');

	// Global variables
	var points = 0


	$('.green-target').on('click', function (event) {
		console.log('Greens been clicked');
		var $greenTarget = $('.green-target');
		updateScore(1);
	});

	$('.blue-target').on('click', function (event) {
		console.log('Blues been clicked!');
		var $blueTarget = $('.blue-target');
		updateScore(2);
	});

	$('.red-target').on('click', function (event) {
		console.log('Reds been clicked!');
		var $redTarget = $('.red-target');
		updateScore(3);
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


function updateScore(quantity) {
	points = points + quantity;
	$('#points').html(points);
}

// function shotTarget(targetNum) {
// 	if (targetNum.hasClass('red-target')) {
// 		//targetNum.css('background-image', 'url(../images/targetGunShot.png)');
// 		updateScore(3);
// 	} else if (targetNum.hassClass('blue-target')) {
// 		//targetNum.css('background-image', 'url(../images/targetGunShot.png)');
// 		updateScore(2);
// 	} else (targetNum.hasClass('green-target')) {
// 		//targetNum.css('background-image', 'url(../images/targetGunShot.png)');
// 		updateScore(1);
// 	}
// }










