function hideAndShow() {
    // Hide the button
    document.getElementById("hideButton").style.display = "none";

    // Show the gif and audio
	document.getElementById("gifContainer").style.display = "block";

    // Play the audio
    document.getElementById("audio").play();
	audio.volume = .15;
}
