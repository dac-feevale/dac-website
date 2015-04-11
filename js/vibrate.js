// This jQuery v1.1.3 plugin will cause the targeted
// elements to vibrate when they are moused over.
jQuery.fn.vibrate = function(){
// Loop over each of the elements in the jQuery
// stack so that we can set up the properties
// for the individual elements.
this.each(
function( intI ){
// Get a jQuery object for this element.
var jNode = $( this );
// Default plugin to not be vibrating.
var blnVibrate = false;
// Get current position of the element.
var intLeft = parseInt( jNode.css( "left" ) );
var intTop = parseInt( jNode.css( "top" ) );
// Create a function pointer that will
// handle the updating of elements position
// such that it will make it appear to be
// vibrating.
var fnUpdatePosition = function(){
var intCurrentLeft = parseInt(
jNode.css( "left" )
);
var intCurrentTop = parseInt(
jNode.css( "top" )
);
// Check to see if we should keep going.
if (blnVibrate){
// Check to see which direction to
// adjust in - either vert. or horz.
if (Math.random() > .5){
// Adjust vertically.
if (intCurrentTop > intTop){
intCurrentTop = (intTop - 2);
} else {
intCurrentTop = (intTop + 2);
}
} else {
// Adjust horizontally.
if (intCurrentLeft > intLeft){
intCurrentLeft = (intLeft - 2);
} else {
intCurrentLeft = (intLeft + 2);
}
}
// Set a timeout to call this method
// again and update position.
setTimeout(
fnUpdatePosition,
60
);
} else {
// Reset position.
intCurrentLeft = intLeft;
intCurrentTop = intTop;
}
// Update the position.
jNode.css(
"top",
(intCurrentTop + "px")
);
jNode.css(
"left",
(intCurrentLeft + "px")
);
}
// Hoook up the mouse over event to flag
// that the vibrating should begin.
jNode.mouseover(
function(){
// Flag vibration.
blnVibrate = true;
// Start vibrating.
fnUpdatePosition();
}
);
// Hook up the mouse out event to flag
// that the vibrating should end.
jNode.mouseout(
function(){
// Clear vibration.
blnVibrate = false;
}
);
}
);
// END: each()
// Return the jQuery stack to keep chaining.
return( this );
}
// Hook up all the vibration properties.
$(
function(){
$( ".vibrate" ).vibrate();
}
); 