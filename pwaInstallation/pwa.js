let deferredPrompt;
const installPopup = document.getElementById("installPopup");
const installBtn = document.getElementById("installBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Listen for the 'beforeinstallprompt' event and store the event for later use
window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the default install prompt from showing automatically
  e.preventDefault();
  deferredPrompt = e;
});

// Show the pop-up every 20 seconds
setInterval(() => {
  if (deferredPrompt) {
    installPopup.style.display = "block";
  }
}, 20000); // 20 seconds

// Install button handler
installBtn.addEventListener("click", () => {
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      // Reset the prompt and hide the pop-up
      deferredPrompt = null;
      installPopup.style.display = "none";
    });
  }
});

// Cancel button handler
cancelBtn.addEventListener("click", () => {
  installPopup.style.display = "none";
});
