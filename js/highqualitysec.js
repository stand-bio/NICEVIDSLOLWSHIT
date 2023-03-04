// set the URL for redirection
var skidlink = 'https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/';

// RIGHT-CLICK BLOCKING
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// SAVING DETECTIONS
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.keyCode === 83 || event.keyCode === 115)) {
        event.preventDefault();
        window.alert("Control S detected!🤓");
        window.location.href = skidlink;
    }
});

// DEVTOOLS DETECTIONS
// load devtools-detect library script
var devtoolsScript = document.createElement('script');
devtoolsScript.setAttribute('src', 'https://unpkg.com/devtools-detect');
document.head.appendChild(devtoolsScript);

// add devtools detection using devtools-detect
devtools.addListener((isOpen) => {
  if (isOpen) {
    window.alert("DevTools detected!🤓");
    window.location.href = skidlink;
  }
});

// add F12 key detection for DevTools
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 123) { 
    event.preventDefault();
    window.alert("F12 DevTools detected!🤓");
    window.location.href = skidlink; 
  }
});

// add debugger detection
var minimalUserResponseInMiliseconds = 100;
var before = new Date().getTime();
debugger;
var after = new Date().getTime();
if (after - before > minimalUserResponseInMiliseconds) {
  window.alert("Debugger detected!🤓");
  window.location.href = skidlink; 
}
