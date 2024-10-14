const playButton = document.getElementById('playButton');
// const audio = document.getElementById('audio');
const effectLine = document.getElementById('effectLine');

const audioFiles = [
    'tidak.mp3',
    'tidakada.mp3',
    'cobatanyalagi.mp3',
    'mungkinsuatuhari.mp3',
    'iya.mp3'
];

function playrandom() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const selectedAudio = audioFiles[randomIndex];

    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    audioSource.src = selectedAudio;
    audioPlayer.load(); // Muat ulang audio dengan sumber baru
    audioPlayer.play();  // Putar audio
}

playButton.addEventListener('mousedown', () => {
    effectLine.style.width = '100%'; // Memanjangkan garis
});

playButton.addEventListener('mouseup', () => {
    playrandom();
    effectLine.style.width = '0'; // Mengembalikan garis ke ukuran 0
});

playButton.addEventListener('mouseleave', () => {
    effectLine.style.width = '0'; // Mengembalikan garis jika mouse keluar
});

playButton.addEventListener('touchstart', () => {
    effectLine.style.width = '100%'; // Memanjangkan garis
});

playButton.addEventListener('touchend', () => {
    playrandom();
    effectLine.style.width = '0'; // Mengembalikan garis ke ukuran 0
});
