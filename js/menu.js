function startGame() {
  let startScreenRef = document.getElementById('start_screen');
  startScreenRef.classList.add('d_none');
}

function goBackToStartscreen() {  
  let startScreenRef = document.getElementById('start_screen');
  startScreenRef.classList.remove('d_none');
  closeOverlay();
  closeFullscreen();
}

function openOverlay(type) {
  showBackgroundOverlay();
  showCloseButton();
  showSpecificOverlay(type);
  document.getElementById('background_overlay').addEventListener('click', handleBackgroundClick);
}

function handleBackgroundClick(event) {
  if (event.target.id === 'background_overlay') {
    closeOverlay();
  }
}

function showBackgroundOverlay() {
  let backgroundOverlayRef = document.getElementById('background_overlay');
  backgroundOverlayRef.classList.add('background_overlay');
}

function showCloseButton() {
  let closeButton = document.getElementById('close_overlay_btn');
  closeButton.style.display = 'block';
}

function showSpecificOverlay(type) {
  let overlayToShow = document.querySelector(`.${type}_overlay`);
  if (overlayToShow) {
    overlayToShow.style.display = 'block';
  }
}

function closeOverlay() {
  let backgroundOverlayRef = document.getElementById('background_overlay');
  hideBackgroundOverlay(backgroundOverlayRef);
  hideCloseButton(backgroundOverlayRef);
  hideAllContentOverlays(backgroundOverlayRef);
  removeClassesAfterAnimation(backgroundOverlayRef);
  backgroundOverlayRef.removeEventListener('click', handleBackgroundClick);
}

function hideBackgroundOverlay(backgroundOverlayRef) {
  backgroundOverlayRef.classList.add('background_overlay_closing');
}

function hideCloseButton() {
  let closeButton = document.getElementById('close_overlay_btn');
  closeButton.style.display = 'none';
}

function hideAllContentOverlays() {
  let contentOverlays = document.querySelectorAll('.overlay_content');
  contentOverlays.forEach(overlay => {
    overlay.style.display = 'none';
  });
}

function removeClassesAfterAnimation(backgroundOverlayRef) {
  setTimeout(function() {
    backgroundOverlayRef.classList.remove('background_overlay');
    backgroundOverlayRef.classList.remove('background_overlay_closing');
  }, 500);
}

function handleFullscreen() {
  const canvas = document.getElementById('game_container');
  if (!document.fullscreenElement) {
    openFullscreen(canvas);
  } else {
    closeFullscreen();
  }
}

function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { 
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { 
    document.msExitFullscreen();
  }
}