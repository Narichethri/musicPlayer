var songs = [
    { title: "Jai Sri Ram", artist: "Artist 1", file: "JaiSriRam.mp3" },
    { title: "Tillu Anna DJ Pedithe", artist: "Artist 2", file: "Tillu Anna DJ Pedithe.mp3" },
    { title: "Priya Mithunam", artist: "Artist 3", file: "PriyaMithunam.mp3" },
    { title: "Chitti", artist: "Artist 4", file: "Chitti.mp3" },
    { title: "Chitti Story", artist: "Artist 5", file: "Chitti Story.mp3" },
    { title: "Bulle na bangaru bulle", artist: "Artist 5", file: "Bulle na bangaru bulle.mp3" },
    { title: "Seethakaalam", artist: "Artist 5", file: "Seethakaalam.mp3" },
    { title: "Vikran Title Track", artist: "Artist 5", file: "Vikran Title Track.mp3" },
    { title: "Mirchi Mirchi", artist: "Artist 5", file: "Mirchi.mp3" },
    { title: "Sivuni Aana", artist: "Artist 5", file: "Sivuni Aana.mp3" },
    { title: "Govinda Govinda", artist: "Artist 5", file: "Govinda Govinda.mp3" },
    { title: "Gira Gira Gira", artist: "Artist 5", file: "Gira Gira Gira.mp3" },
    { title: "Dandaalayyaa", artist: "Artist 5", file: "Dandaalayyaa.mp3" },

];

var songList = document.getElementById('songslist');
var audioPlayer = document.createElement('audio');
var currentSongIndex = 0;
var currentTitle;


function displaySongs() {
    for (var i = 0; i < songs.length; i++) {
        var song = songs[i];
        var listItem = document.createElement('div');
        listItem.innerHTML = '<span>' + song.title + '</span><button onclick="playSong(' + i + ')">Play</button>';
        listItem.classList.add('song-item');
        songList.appendChild(listItem);
        
    }
}
displaySongs();

function playTrack(index) {
    if (audioPlayer.src && audioPlayer.paused && audioPlayer.currentTime > 0) {
        audioPlayer.play(); // Resume playback from the current position
        return;

    }

    // Stop the currently playing song if it exists
    if (audioPlayer.src) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;

    }

    // Set the source of the audio player to the next song
    audioPlayer.src = songs[index].file;

     // Update the current playing title
     currentTitle = document.getElementById('songdisplay');
     currentTitle.innerHTML = songs[index].title;

    // Play the next song
    audioPlayer.play();
    displaytitle()
    
}



function nextTrack() {
    // Stop the currently playing song
    if (audioPlayer.src) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    // Increment the currentSongIndex to play the next song
    currentSongIndex++;

    // Check if we reached the end of the songs array
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0; // Wrap around to the first song
    }

    // Play the next song
    playTrack(currentSongIndex);
}

function pauseTrack() {
    // Pause the currently playing song
    if (audioPlayer.src) {
        audioPlayer.pause();
    }
}


function prevTrack() {
    // Stop the currently playing song
    if (audioPlayer.src) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    // Decrement the currentSongIndex to play the previous song
    currentSongIndex--;

    // Check if we reached the beginning of the songs array
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1; // Wrap around to the last song
    }

    // Play the previous song
    playTrack(currentSongIndex);
}

// Play the selected song
function playSong(index) {

    
    // Stop the currently playing song
    if (audioPlayer.src) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
    audioPlayer.src = songs[index].file;

    

    // Play the next song
    audioPlayer.play();
    currentSongIndex = index;

    currentTitle = document.getElementById('songdisplay');
    currentTitle.innerHTML = songs[index].title;

    

}


var progressBar = document.getElementById('progress-bar');


function updatePlaybackPosition(value) {
    if (audioPlayer.src) {
        var duration = audioPlayer.duration;
        var newPosition = (value / 100) * duration;
        audioPlayer.currentTime = newPosition;
        audioPlayer.play(); // Play the audio from the new position
    }
}

function updateProgressBar() {
    if (audioPlayer.src) {
        var currentTime = audioPlayer.currentTime;
        var duration = audioPlayer.duration;
        var progress = (currentTime / duration) * 100;
        progressBar.value = progress;
    }
}

progressBar.addEventListener('input', function (event) {
    var value = event.target.value;
    updatePlaybackPosition(value);
});

audioPlayer.addEventListener('timeupdate', updateProgressBar);



function displaytitle(){
    // Update the current playing title
    currentTitle = document.getElementById('songdisplay');
    currentTitle.innerHTML = songs[index].title;
}







