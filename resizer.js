var canva = document.querySelector('canvas'),
context = canva.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();
