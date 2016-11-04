$( document ).ready(function() {

	$('h3').hover(
	  function() {
	    $('h3').css('background-color', '#f3ff95');
	  }
	);
	
	$( "a" ).click(
		function( event ) {
  		event.preventDefault();
  		$( this ).hide("slow");
	  });

});