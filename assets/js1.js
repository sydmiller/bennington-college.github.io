$( document ).ready(function() {
// hover h3 elements yellow
	$('h3').mouseenter(
	  function() {
	    $('h3').css('background-color', '#f3ff95').fadein(800);
	  }
	);

	$('h3').mouseout(
	  function() {
	    $(this).css('background-color', '#f2f2f2').fadein(800);
	  }
	);

	$('button').mouseenter(
	  function() {
	  	  var hueValue = Math.Random() * 360;
		  $('body').css('background-color', 'hueValue');
	  }
	);

	$(document).click(
	  function(event) {

	  	var yPos = event.pageY;
	  	var xPos = event.pageX;

		var screenHeight = $(document).height();
		var screenWidth = $(document).width();

		var satValue = horPos / screenWidth * 100;
		var lightValue = verPos / screenHeight * 100;

		if (lightValue < 50) {
		  $('body').css('font-color', 'black');

		}
		else { 
		  $('body').css('font-color', 'white');
		} 
	};
}
/*/shift body right on hover
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

});