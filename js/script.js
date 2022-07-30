const dino = document.querySelector('#dino'),
      cactus = document.querySelector('#cactus');

document.addEventListener('keydown', (e) => {
  if (e.code == 'Space' || e.code == 'ArrowUp' || e.code == 'Enter') {
    jump();
  }
});

function jump() {
  if (dino.classList.contains('jump') == false) {
    dino.classList.add('jump');
  } else {
    setTimeout(() => {
      dino.classList.remove('jump');
    }, 100);
  }
}

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top')),
      cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert('Game Over');
  }
}, 10);