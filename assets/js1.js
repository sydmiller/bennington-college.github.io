$( document ).ready(function() {
// hover h3 elements yellow
	$('h3').mouseenter(
	  function() {
	    $('h3').css('background-color', '#f3ff95');
	  }
	);

	$('h3').mouseout(
	  function() {
	    $('h3').css('background-color', '#f2f2f2');
	  }
	);
// links removed on click
	$( 'a' ).click(
		function( event ) {
  		event.preventDefault();
  		$( this ).hide('slow');
	  });
//shift body right on hover
	$('img').mousemove(
	  function() {
	    $('img').css('position', 'relative');
	    $('img').css('left', '30px');
	  }
	);

	$('img').mousemove(
	  function() {
  		$('img').css('position', 'initial');
	    $('img').css('right', '30px');
	  }
	);

});