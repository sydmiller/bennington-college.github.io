var setFontColor = function(lightValue) {	
	if (lightValue > 50) {
	  $('body').css('color', 'black');
	  $('a').css('color', 'black');

	}
	else { 
	  $('body').css('color', 'white');
	  $('a').css('color', 'white');
	} 
}


$( document ).ready(function() {
// hover h3 elements yellow
	$('h3').mouseenter(
	  function() {
	    $('h3').css('background-color', '#f3ff95').fadeIn(800);
	  }
	);

	$('h3').mouseout(
	  function() {
	    $(this).css('background-color', '#f2f2f2').fadeIn(800);
	  }
	);

	$('button').mouseenter(
	  function() {
	  	  var hueValue = Math.random() * 360;
	  	  var saturationValue = Math.random() * 100;
	  	  var lightnessValue = Math.random() * 100;
	  	  var hsl = "hsl(" + hueValue + "," + saturationValue + "%," + lightnessValue + "%)";
		  $('body').css('background-color', hsl);
		//setFontColor(lightnessValue);
	  }
	);

	$('body').click(
		function(event) {
		  	var yPos = event.pageY;
		  	var xPos = event.pageX;

			var screenHeight = $(document).height();
			var screenWidth = $(document).width();

			var satValue = xPos / screenWidth * 100;
			var lightValue = yPos / screenHeight * 100;

			setFontColor(lightValue);

		}
	);
});




// var num = 7;
// // var numStr = "" + num;
// var numStr = num.toString();
// var str = "8";
// var strNum = parseInt(str);


/*
/shift body right on hover
// links removed on click
	$('a').click(
		function( event ) {
  		event.preventDefault();
  		$(this).hide('slow');
	  });
	$('body').mouseenter(
	  function() {
	    $('body').delay(100).css('position', 'relative');
	    $('body').css('left', '30px');
	  }
	);

	$('body').mouseout(
	  function() {
  		$('body').delay(100).css('position', 'relative');
	    $('body').css('left', '-30px');
	  }
	);

	$( "p" ).click(
	  function() {
  		$( this ).toggleClass( "reverse" );
	});


*/