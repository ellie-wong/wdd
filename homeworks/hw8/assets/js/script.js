function toggleSongs() {
    songsSecondHalf = document.getElementById("songs-second-half");
    songsSecondHalf.classList.add("hidden");
}

document.getElementById("toggle-button").onclick = toggleSongs;
