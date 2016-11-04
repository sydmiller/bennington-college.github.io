$( document ).ready(function() {

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
	
	$( "a" ).click(
		function( event ) {
  		event.preventDefault();
  		$( this ).hide("slow");
	  });

});