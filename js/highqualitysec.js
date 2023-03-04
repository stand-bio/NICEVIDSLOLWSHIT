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

let devtoolsOpen = false;

const checkDevTools = () => {
  if (devtoolsOpen || window.devtools.isOpen()) {
    window.location.href = skidlink
    alert("Developer tools detected!🤓");
  }
}

setInterval(checkDevTools, 1000);

window.addEventListener("devtoolschange", event => {
  devtoolsOpen = !devtoolsOpen;
});
