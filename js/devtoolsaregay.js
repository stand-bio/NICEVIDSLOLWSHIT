// Check if devtools are open
if (typeof window !== 'undefined') {
  window.addEventListener('devtoolschange', event => {
    // Display popup message and redirect
    alert("Detected!");
    window.location.href = "https://resources.infosecinstitute.com/topic/25-ways-to-become-the-ultimate-script-kiddie/";
  });
}
