
(function() {
    var devtools = /./;
    devtools.toString = function() {
        this.opened = true;
        window.location.replace('https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/');
    }
    console.log('%c', devtools);
})();





document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.onkeydown = function(event) {
    if (event.ctrlKey && (event.keyCode === 83 || event.keyCode === 115)) {
        event.preventDefault();
        window.location.href = "https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/";
    }
};

window.addEventListener('devtoolschange', event => {
    if (event.detail.open) {
        window.location.replace('https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/');
    }
