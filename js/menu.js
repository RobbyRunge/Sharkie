function startGame() {
  let startScreenRef = document.getElementById('start_screen');
  startScreenRef.classList.add('d_none');
  // initLevel();
  console.log('start');
};

function openOverlay() {
  let backgroundOverlayRef = document.getElementById('background_overlay');
  backgroundOverlayRef.classList.add('background_overlay');
  let closeButton = document.getElementById('close_overlay_btn');
  closeButton.style.display = 'block';
};

function closeOverlay() {
  let backgroundOverlayRef = document.getElementById('background_overlay');
  let closeButton = document.getElementById('close_overlay_btn');
  backgroundOverlayRef.classList.add('background_overlay_closing');
  closeButton.style.display = 'none';
  setTimeout(function() {
    backgroundOverlayRef.classList.remove('background_overlay');
    backgroundOverlayRef.classList.remove('background_overlay_closing');
  }, 500);
}