const soundFiles = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

// Create buttons for each sound
soundFiles.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.setAttribute('aria-label', `Play ${sound} sound`);
  btn.addEventListener('click', () => playSound(sound));
  buttonsContainer.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'stop';
stopBtn.setAttribute('aria-label', 'Stop the sound');
stopBtn.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopBtn);

function playSound(sound) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(`sounds/${sound}.mp3`);
  currentAudio.play();
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
