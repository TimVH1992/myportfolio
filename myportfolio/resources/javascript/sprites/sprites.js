var tID;
function animateScript() {
var    position = 256; //start position for the image slicer
const  interval = 100; //100 ms of interval for the setInterval()
tID = setInterval ( () => {
document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`; 
if (position < 1536)
{ position = position + 256;}
else
{ position = 256; }
}
, interval );
}
