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
// links removed on click
	$('a').click(
		function( event ) {
  		event.preventDefault();
  		$(this).hide('slow');
	  });
//shift body right on hover
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

});