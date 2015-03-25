var text;
var num;
var len;
var color;

var canvas;
var context;

var layers = [];

var setValues = function() {
	text = document.getElementById('numObjects').value;
	num = parseInt(text);
	len = Math.floor(1000/num);
	color = '#3399FF';
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
};

var setLayers = function() {
	for (var i = 0; i < num; i++) {
		var ht = 300*Math.random();

		layers[i] = {
			x: i * len,
			y: 300 - ht,
			width: len,
			height: ht
		};
	}
};

var drawRectangles = function() {
	context.fillStyle = color;
	for (var i = 0; i < num; i++) {
		context.fillRect(
			layers[i].x,
			layers[i].y,
			layers[i].width,
			layers[i].height
		);
	}
};

var drawRectangle = function(rectangle) {
	context.fillRect(
		rectangle.x,
		rectangle.y,
		rectangle.width,
		rectangle.height)
};

Template.insertionsort.events({
    'click .build': function() {
    	setValues();

    	context.clearRect(0, 0, canvas.width, canvas.height);

    	setLayers();
    	drawRectangles();	
    },

    'click .insertionsort': function() {

    	var i;    // Holds the index
	    var key;  // Holds the key value

	    // Loops through the array
	    for(var j = 1; j < num; j++) {
	    	(function(index) {
		        setTimeout(function() {
		        	// Assigns the key to the value of the current index
			        y = layers[index].y;
			        h = layers[index].height;
			        // Assigns the comparison value to one less than the current index
			        i = index - 1;
			        // While previous values are greater than the key, the lower values are all moved up one index
			        // and the index is decremented (to read all values lower in the array)
			        while(i >= 0 && layers[i].height > h) {
			        	layers[i+1].y = layers[i].y;
			        	layers[i+1].height = layers[i].height;
			            drawRectangle(layers[i+1]);
			            context.clearRect(layers[i].x, 0, layers[i].width, canvas.height);
			            i--;
			        }
			        // The key is now inserted at the appropriate place in the array		        
			        layers[i+1].y = y;
			        layers[i+1].height = h;
		            drawRectangle(layers[i+1]);
		        }, j * 5);
		    })(j);
	    }

    }
});