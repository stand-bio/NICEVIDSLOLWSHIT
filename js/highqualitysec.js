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

document.onkeydown = function(e) {
  if (
    e.keyCode == 123 || // F12 key
    (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl + Shift + I
    (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl + Shift + J
    (e.ctrlKey && e.keyCode == 83 || e.keyCode == 115) || // Ctrl + S or Ctrl + Shift + S
    (e.ctrlKey && e.keyCode == 85) // Ctrl + U
  ) {
    e.preventDefault(); // disable the default behavior of the key
    window.alert("Skidding detected!🤓");
    window.location.href = skidlink; // assuming 'skidlink' is a valid variable
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

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    event.preventDefault();
  });
});
