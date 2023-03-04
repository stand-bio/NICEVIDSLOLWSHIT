var skidlink = 'https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/'


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.onkeydown = function(event) {
    if (event.ctrlKey && (event.keyCode === 83 || event.keyCode === 115)) {
        event.preventDefault();
        window.alert("Control S detected!🤓");
        window.location.href = skidlink;
    }
};

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 123) { 
    event.preventDefault();
    window.alert("F12 DevTools detected!🤓");
    window.location.href = skidlink; 
  }
});
