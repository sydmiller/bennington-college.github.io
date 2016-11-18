---
layout: page
title: Video Art
permalink: /void/
heading: 
---
<script>

var characters = {
	count: 0,
	appear: function(menu) {
		// select a geometric char from array
		// var menu = ['•','◊','∆'];

		// select random integer from 0-2
		var dart = Math.random();
		dart = Math.floor(dart* menu.length );
		var character = menu[dart];

		var idName = 'char-' + this.count++;
		// insert at the beginning of the body element
		$('body').prepend('<span class="character" id="' + idName+ '">'  + character + '</span>');
		// style it with css?
	},
	disappear: function() {
		$('.character').hide();
	},
	move: function(destX, destY, count) {
		var whichChar = Math.floor(Math.random()*characters.count);
		alert(characters.count);
		$('.character').animate(
			{ top: destY, left: destX },
		  	3000
		);
	},
	// characters.newColor();
	// change the characters to a random color, using hsl values
	newColor: function() {
		var hueValue = Math.random() * 360;
	  	var saturationValue = Math.random() * 100;
	  	var lightnessValue = Math.random() * 100;
	  	var hsl = "hsl(" + hueValue + "," + saturationValue + "%," + lightnessValue + "%)";
		$('.characters').css('color', 'hls');
	},
	// characters.newSize();
	// change the character css to a random font-size between 50 and 400%
	newSize: function() {
		var ranSize = 50 + Math.random() * 350 + "%";
		$('.characters').css('font-size', 'randSize');
	}
}
characters.appear(['•','◊','∆']);
$('body').click( function(event) {
	alert(event.pageX);
	alert(event.pageY);
	characters.move(event.pageX, event.pageY, characters.count);

});

</script>

<style>
.characters {
	position: absolute;
	font-size: 60px;
}
</style>
