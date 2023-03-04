
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.onkeydown = function(event) {
    if (event.ctrlKey && (event.keyCode === 83 || event.keyCode === 115)) {
        event.preventDefault();
        window.alert("Control S detected!🤓");
        window.location.href = "https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/";
    }
};

let devtoolsOpen = false;

const checkDevTools = () => {
  if (devtoolsOpen || (window.outerWidth - window.innerWidth > 100) || (window.outerHeight - window.innerHeight > 100)) {
    window.location.href = "https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/";
    alert("Developer tools detected!🤓");
  }
}

setInterval(checkDevTools, 1000);

window.addEventListener("devtoolschange", event => {
  devtoolsOpen = !devtoolsOpen;
});
