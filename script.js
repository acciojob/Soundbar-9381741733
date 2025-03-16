//your JS code here. If required.
const soundFiles = ['applause.mp3', 'boo.mp3', 'gasp.mp3', 'tada.mp3', 'victory.mp3', 'wrong.mp3'];
const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

soundFiles.forEach(sound => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = sound.replace('.mp3', '');
    btn.addEventListener('click', () => playSound(sound));
    buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSound);
buttonsContainer.appendChild(stopBtn);

function playSound(sound) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`sounds/${sound}`);
    currentAudio.play();
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}
