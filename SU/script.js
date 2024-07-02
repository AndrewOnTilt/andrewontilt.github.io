const videoPlayer = document.getElementById('videoPlayer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const videos = [
    'VID/S1E1.mp4',
    'VID/S1E2.mp4', 
    'VID/S1E3.mp4',
    'VID/S1E4.mp4'
];
let currentVideoIndex = 0;


prevButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
});

nextButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
});
