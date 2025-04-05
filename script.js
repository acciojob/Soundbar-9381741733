const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

// Dynamically create audio elements
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopAllSounds();
    document.getElementById(sound).play();
  });

  buttonsContainer.appendChild(btn);

  const audio = document.createElement('audio');
  audio.setAttribute('id', sound);
  audio.setAttribute('src', `sounds/${sound}.mp3`);
  buttonsContainer.appendChild(audio);
});

// Add stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopAllSounds);
buttonsContainer.appendChild(stopBtn);

function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
