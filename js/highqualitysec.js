var skidlink = 'https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/'


//RIGHTCLICK BLOCKING
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});


//SAVING DETECTIONS
document.onkeydown = function(event) {
    if (event.ctrlKey && (event.keyCode === 83 || event.keyCode === 115)) {
        event.preventDefault();
        window.alert("Control S detected!🤓");
        window.location.href = skidlink;
    }
};


//DEVTOOLS DETECTIONS
<script src="https://unpkg.com/devtools-detect"></script>

devtools.addListener((isOpen) => {
  if (isOpen) {
    window.alert("DevTools detected!🤓");
    window.location.href = skidlink;
  }
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 123) { 
    event.preventDefault();
    window.alert("F12 DevTools detected!🤓");
    window.location.href = skidlink; 
  }
});

var minimalUserResponseInMiliseconds = 100;
var before = new Date().getTime();
debugger;
var after = new Date().getTime();
if (after - before > minimalUserResponseInMiliseconds) {
  event.preventDefault();
  window.alert("DevTools detected!🤓");
  window.location.href = skidlink; 
}
