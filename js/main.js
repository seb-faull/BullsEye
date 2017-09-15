$(function() {

	console.log('Dom has loaded');

	animateDiv()

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


function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('#arena').height() - 50;
    var w = $('#arena').width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv () {
	var newq = makeNewPosition();
	$('.green-target').animate({ top: newq[0], left: newq[1] }, function(){
		animateDiv();
	})

	$('.blue-target').animate({ top: newq[0], left: newq[1] }, function(){
		animateDiv();
	})

	$('.red-target').animate({ top: newq[0], left: newq[1] }, function(){
		animateDiv();
	})
}

