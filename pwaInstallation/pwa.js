let deferredPrompt; // Holds the beforeinstallprompt event

// 1. Listen for the beforeinstallprompt event to detect the PWA installation eligibility
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default mini-infobar or install prompt
  event.preventDefault();
  
  // Store the event so we can trigger it later
  deferredPrompt = event;
  
  // Optionally, show an install button or some UI indicating that installation is possible
  const installButton = document.getElementById('installButton');
  installButton.style.display = 'block'; // Show the install button when prompt is available
});

// 2. Define the installingPWA function
function installingPWA() {
  if (deferredPrompt) {
    // Show the install prompt to the user
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Reset the deferredPrompt variable
        deferredPrompt = null;
      })
      .catch((err) => {
        console.error('Install prompt error:', err);
      });
  } else {
    console.log('Install prompt not available');
  }
}

// Example: Trigger installation when a button is clicked
document.getElementById('installButton').addEventListener('click', installingPWA);
