// Set the URL for redirection
var skidlinks = [
    'https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/',
    'https://resources.infosecinstitute.com/topic/ethical-hacking/',
    'https://resources.infosecinstitute.com/topic/penetration-testing/',
    'https://resources.infosecinstitute.com/topic/network-security/',
    'https://resources.infosecinstitute.com/topic/vulnerability-assessment/'
];
var skidlink = skidlinks[Math.floor(Math.random() * skidlinks.length)];

// Right-click blocking
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Saving detections
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.keyCode === 83 || event.keyCode === 115)) {
        event.preventDefault();
        window.alert("Control S detected!🤓");
        window.location.href = skidlink;
    }
});

// DevTools detections
// Load devtools-detect library script
<script src="https://unpkg.com/devtools-detect"></script>

// Add devtools detection using devtools-detect
document.addEventListener('devtoolsLoad', function(event) {
    devtools.addListener((isOpen) => {
        if (isOpen) {
            window.alert("DevTools detected!🤓");
            window.location.href = skidlink;
        }
    });
});

// Add F12 key detection for DevTools
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 123) { 
        event.preventDefault();
        window.alert("F12 DevTools detected!🤓");
        window.location.href = skidlink; 
    }
});

// Add debugger detection
var minimalUserResponseInMiliseconds = 100;
var before = new Date().getTime();
debugger;
var after = new Date().getTime();
if (after - before > minimalUserResponseInMiliseconds) {
    window.alert("Debugger detected!🤓");
    window.location.href = skidlink; 
}

// Add detection for opening the JavaScript console
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && (event.keyCode === 74 || event.keyCode === 106)) {
        event.preventDefault();
        window.alert("JavaScript console detected!🤓");
        window.location.href = skidlink;
    }
});

// Add detection for opening the Network panel in DevTools
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && (event.keyCode === 69 || event.keyCode === 101)) {
        event.preventDefault();
        window.alert("Network panel in DevTools detected!🤓");
        window.location.href = skidlink;
    }
});
