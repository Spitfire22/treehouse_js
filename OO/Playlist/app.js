let playlist = new Playlist();

let allTheStars = new Song("All The Stars", "Kendrick Lamar", "3:54");
let pleasure = new Song("Pleasure", "Justice", "3:35");

let aceVentura = new Movie("Ace Ventura", 1994, "1:54");

playlist.add(allTheStars);
playlist.add(pleasure);

playlist.add(aceVentura)
;
let playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

let playButton = document.getElementById("play");
playButton.onclick = function(){
    playlist.play();
    playlist.renderInElement(playlistElement);
};
let nextButton = document.getElementById("next");
nextButton.onclick = function(){
    playlist.next();
    playlist.renderInElement(playlistElement);
};
let stopButton = document.getElementById("stop");
stopButton.onclick = function(){
    playlist.stop();
    playlist.renderInElement(playlistElement);
};

