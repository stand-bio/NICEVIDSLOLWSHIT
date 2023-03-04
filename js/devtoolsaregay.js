// Check if devtools are open
if (typeof window !== 'undefined') {
  const devtools = /./;
  devtools.toString = function() {
    this.opened = true;
    return ' ';
  };
  console.log('%c', devtools);
  if (devtools.opened) {
    // Display popup message and redirect
    alert("Detected!");
    window.location.href = "https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/";
  }
}
