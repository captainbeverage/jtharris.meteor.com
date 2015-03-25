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

var drawRectangle = function(rectangle, pivot) {

	if (pivot)
		context.fillStyle = "red";

	context.fillRect(
		rectangle.x,
		rectangle.y,
		rectangle.width,
		rectangle.height)

	context.fillStyle = color;
};

var quicksort = function(left, right) {
	// Partitions the array and assigns it to the index
    var index = partition(left, right);
    // If the left index is less than the index, quickSort is recursively run with the index as the right index
    if(left < index - 1)
        quicksort(left, index - 1);
    // If the index is less than the right index, quickSort is recursively run with the index as the left index
    if(index < right)
        quicksort(index, right);
};

var partition = function(left, right) {
	var i = left;
    var j = right;              // Left and right indices
    var temp;                             // Temp variable for swaps
    var pivot = layers[Math.floor((left + right) / 2)];  // Holds the pivot
    context.clearRect(pivot.x, 0, pivot.width, canvas.height);
    drawRectangle(pivot, true);
    var counter = 0;

    // Loops through the array while the left index is less than the right index
    while(i <= j) {
        // Increments the left index while the value of the left index is less than the pivot
        while(layers[i].height < pivot.height)
            i++;
        // Decrements the right index while the value of the right index is greater than the pivot
        while(layers[j].height > pivot.height)
            j--;
        // If the left index is less than the right index, the values are swapped
        // then the left index increments and the right index decrements
        if(i <= j) {
        	(function(indexi, indexj, c) {
		        setTimeout(function() {
		        	context.clearRect(layers[indexi].x, 0, layers[indexi].width, canvas.height);
        			context.clearRect(layers[indexj].x, 0, layers[indexj].width, canvas.height);

        			tempheight = layers[indexi].height;
		            tempy = layers[indexi].y;
		            layers[indexi].height = layers[indexj].height;
		            layers[indexi].y = layers[indexj].y;
		            layers[indexj].height = tempheight;
		            layers[indexj].y = tempy;

		            drawRectangle(layers[indexi], false);
		            drawRectangle(layers[indexj], false);
		        }, c * 5);
		    })(i, j, counter);
		    counter++;
		    i++;
            j--;
        }
    }

    // Returns the index
    return i;
};

Template.quicksort.events({
    'click .buildquick': function() {
    	setValues();

    	context.clearRect(0, 0, canvas.width, canvas.height);

    	setLayers();
    	drawRectangles();	
    },

    'click .quick': function() {

    	var left = 0;
	    var right = num - 1;

	    quicksorty(layers);
	    drawRectangles();

	    // quicksort(left, right);
	    // quicksort(left, right);
	    // quicksort(left, right);
	    // quicksort(left, right);
	    // quicksort(left, right);
    }
});

var quicksorty = function(array) {
	//if array is empty
	if (arr.length === 0) {
	return [];
	}
	var left = [];
	var right = [];
	var pivot = arr[0];
	//go through each element in array
	drawRectangles();
	for (var i = 1; i < arr.length; i++) {
	  if (arr[i].height < pivot.height) {
	     left.push(arr[i]);
	  } else {
	     right.push(arr[i]);
	  }
	}
	return quicksorty(left).concat(pivot, quicksort(right));
	context.clearRect(0, 0, canvas.width, canvas.height);
};