'use strict';

var defaultFontSize = 1;
const container = document.getElementsByClassName('content')[0];
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');

function handleZoomIn() {
  if (!container) return;
  defaultFontSize -= 0.1;
  container.style.fontSize = `${defaultFontSize}em`;
}
function handleZoomOut() {
  if (!container) return;
  defaultFontSize += 0.1;
  container.style.fontSize = `${defaultFontSize}em`;
}

zoomIn.addEventListener('click', handleZoomIn, false);
zoomIn.addEventListener('onmouseleave', function () {
  zoomIn.removeEventListener('click', handleZoomIn, false);
});

zoomOut.addEventListener('click', handleZoomOut, false);
zoomOut.addEventListener('onmouseleave', function () {
  zoomOut.removeEventListener('click', handleZoomOut, false);
});
