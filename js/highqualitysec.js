var skidlinks = [
    'https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/',
    'https://resources.infosecinstitute.com/topic/ethical-hacking/',
    'https://resources.infosecinstitute.com/topic/penetration-testing/',
    'https://resources.infosecinstitute.com/topic/network-security/',
    'https://resources.infosecinstitute.com/topic/vulnerability-assessment/'
];
var skidlink = skidlinks[Math.floor(Math.random() * skidlinks.length)];

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.keyCode === 83 || event.keyCode === 115)) {
        event.preventDefault();
        window.alert("Control S detected!🤓");
        window.location.href = skidlink;
    }
});

// Load devtools-detect library
var script = document.createElement('script');
script.src = 'https://unpkg.com/devtools-detect';
document.head.appendChild(script);

// Define devtools variable
var devtools = {};

// Wait for devtoolsLoad event to fire
document.addEventListener('devtoolsLoad', function(event) {
    // Add listener for devtools change
    devtools = window.devtools;
    devtools.addListener(function (isOpen) {
        if (isOpen) {
            window.alert("DevTools detected!🤓");
            window.location.href = skidlink;
        }
    });
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
    window.alert("Debugger detected!🤓");
    window.location.href = skidlink; 
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && (event.keyCode === 74 || event.keyCode === 106)) {
        event.preventDefault();
        window.alert("JavaScript console detected!🤓");
        window.location.href = skidlink;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && (event.keyCode === 69 || event.keyCode === 101)) {
        event.preventDefault();
        window.alert("Network panel in DevTools detected!🤓");
        window.location.href = skidlink;
    }
});
