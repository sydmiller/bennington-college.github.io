---
layout: page
title: Testing
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
		//alert(characters.count);
		$('.character').each(function(index) {
				$(this).animate(
				{ opacity: Math.random(), top: Math.random()*300, left: Math.random()*300},
		  		3000
			);					
		});
	},
	// characters.newColor();
	// change the characters to a random color, using hsl values
	newColor: function() {
		var hueValue = Math.random() * 360;
	  	var saturationValue = Math.random() * 100;
	  	var lightnessValue = Math.random() * 100;
	  	var hsl = "hsl(" + hueValue + "," + saturationValue + "%," + lightnessValue + "%)";
		$('.character').css('color', hsl);
	},
	// characters.newSize();
	// change the character css to a random font-size between 50 and 400%
	newSize: function() {
		var ranSize = 50 + Math.random() * 350 + "%";
		$('.character').css('font-size', ranSize);
	}
}

var x = prompt("Please enter a number", "0");
parseInt(x);

if (x != null ) {
	for(var i = 0; i < x; i++){
    	characters.appear(['•','◊','∆']);
	}
}

$( document ).ready(function() {

	$('.character').click( function(event) {
		characters.newSize();
		characters.newColor();
		//alert(event.pageX + " " + event.pageY);
		characters.move(event.pageX, event.pageY);
	});
});
// characters.appear(['•','◊','∆']);
// $('body').click( function(event) {
// 	alert(event.pageX);
// 	alert(event.pageY);
// 	characters.move(event.pageX, event.pageY, characters.count);

// });

</script>

<style>
.character {
	position: absolute;
	font-size: 60px;
	z-index: 2;
}
</style>
