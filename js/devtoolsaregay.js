// Check if devtools are open
if (typeof window !== 'undefined') {
  const element = new Image();
  let devtoolsOpen = false;
  element.__defineGetter__('id', function() {
    devtoolsOpen = true;
    // Display popup message and redirect
    alert("Detected!");
    window.location.href = "https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/";
  });
  setInterval(function() {
    devtoolsOpen = false;
    console.log(element);
    console.clear();
  }, 1000);
}
