
// declare and initialize text prototype object
content.text = {

	// how many text instances have been created
    count: 0,

	// index number
    index: null,

	// text content
    string: null,

    // jquery reference to page element
    element: null,

    // define new text instance (content and index)
    define: function(entry) {
    	// store text content as object property
    	this.string = entry;

    	// increment total number of text instances
		content.text.count++;

		// use new count as index
		this.index = content.text.count;
    },

    // place text instance in document
    place: function() {

    	// place text at end of div with id="pool"
        $('#clickme').append("<span class=\"text\" id=\"text"+ this.index +"\">"+ this.string +"</span>");

        // store jquery reference to new element
        this.element = $( '#text'+this.index ).eq(0);

        // make draggable with jquery.ui
        this.element.draggable();

        // use variable to pass 'this' into a different method
        var thing = this;

        // set event listener for changing text content of this instance
        this.element.click(function(){
        	thing.change(prompt('pick again'));
        });
    },

    // change content of text instance
    change: function(newEntry) {

    	// store new text content as object property
    	this.string = newEntry;

    	// change corresponding text in the html document using jquery .text() method
        this.element.text(newEntry);
    },

    scramble: function() {
        A = Array.from(this.string);
    }
}

content.ele = {

    count: 0,
    index: null, 
    string: null,
    element: null,

    birth: function() {
        this.string = "elephant";
        content.ele.count++;
        this.index = content.ele.count;
        $(this).resizable( {
            aspectRatio: true
        });

        $('#clickme').append("<span class=\"ele\" id=\"ele"+ this.index +"\">"+ this.string +"</span>");
        this.element = $( '#ele'+this.index ).eq(0);
        var elephant = this;
    },

    follow: function() {
        $(this).animate(
            {top: event.pageY, left: event.pageX},
            5000, 
            "easeOutBounce"
            );      
    }
}
