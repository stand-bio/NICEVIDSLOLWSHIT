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

// Save detection (Ctrl+S)
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && (event.keyCode === 83 || event.keyCode === 115)) {
    event.preventDefault();
    window.alert("Control S detected!🤓");
    window.location.href = skidlink;
  }
});

// DevTools detection (using devtools-detect library)
// Load devtools-detect library script
var devtoolsScript = document.createElement('script');
devtoolsScript.setAttribute('src', 'https://unpkg.com/devtools-detect');
document.head.appendChild(devtoolsScript);

// Add devtools detection using devtools-detect
var devtools = { isOpen: false };
window.devtoolsDetect = { on: function(event, callback) { devtools[event] = callback; } };
window.addEventListener('devtoolschange', function(event) {
  var isOpen = event.detail.isOpen;
  devtools.isOpen = isOpen;
  if (isOpen) {
    window.alert("DevTools detected!🤓");
    window.location.href = skidlink;
  }
});

// Add F12 key detection for DevTools
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 123) { 
    event.preventDefault();
    window.alert("F12 DevTools detected!🤓");
    window.location.href = skidlink; 
  }
});

// Detect debugger usage using an exception handler
var minimalUserResponseInMiliseconds = 100;
var before = new Date().getTime();
try {
  debugger;
} catch (e) {}
var after = new Date().getTime();
if (after - before > minimalUserResponseInMiliseconds) {
  window.alert("Debugger detected!🤓");
  window.location.href = skidlink; 
}

// Console detection (Ctrl+Shift+J)
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && (event.keyCode === 74 || event.keyCode === 106)) {
    event.preventDefault();
    window.alert("JavaScript console detected!🤓");
    window.location.href = skidlink;
  }
});

// Network panel in DevTools detection (Ctrl+Shift+E)
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && (event.keyCode === 69 || event.keyCode === 101)) {
    event.preventDefault();
    window.alert("Network panel in DevTools detected!🤓");
    window.location.href = skidlink;
  }
});

// Source Code Modification Detection
Object.defineProperty(document, 'title', {
    set: function(val) {
        window.alert("Source code modification detected!🤓");
        window.location.href = skidlink;
    }
});

//Cookie Tampering Detetction
document.cookie = "testcookie=1";
if (document.cookie.indexOf("testcookie") === -1) {
    window.alert("Cookie tampering detected!🤓");
    window.location.href = skidlink;
}

//Incognito Mode Detection
var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
if (fs) {
    fs(window.TEMPORARY, 100, function() {}, function() {
        window.alert("Incognito mode detected!🤓");
        window.location.href = skidlink;
    });
}

