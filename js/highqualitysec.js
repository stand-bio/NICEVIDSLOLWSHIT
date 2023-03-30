var skidlinks = [
  'https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/',
  'https://resources.infosecinstitute.com/topic/ethical-hacking/',
  'https://resources.infosecinstitute.com/topic/penetration-testing/',
  'https://resources.infosecinstitute.com/topic/network-security/',
  'https://resources.infosecinstitute.com/topic/vulnerability-assessment/'
];
var skidlink = skidlinks[Math.floor(Math.random() * skidlinks.length)];

async function getContent(url) {
  const response = await fetch(url);
  const text = await response.text();
  return text;
}

// Right-click blocking
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// Disable F12 key, I key, J key and U key
document.onkeydown = function(e) {
  if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.shiftKey && e.keyCode == 74) || (e.ctrlKey && e.keyCode == 85)) {
    window.alert("Skidding detected!🤓");
    window.location.href = skidlink;
  }
};

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
