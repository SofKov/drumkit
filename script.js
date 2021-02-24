const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");


document.addEventListener("keydown", (key) => {
    if (key.keyCode == 65) {
        boom.play();
    }
    else if (key.keyCode == 83) {
        clap.play();
    }
    else if (key.keyCode == 68) {
        hihat.play();
    }
    else if (key.keyCode == 70) {
        kick.play();
    }
    else if (key.keyCode == 71) {
        openhat.play();
    }
    else if (key.keyCode == 72) {
        ride.play();
    }
    else if (key.keyCode == 74) {
        snare.play();
    }
    else if (key.keyCode == 75) {
        tink.play();
    }
    else if (key.keyCode == 76) {
        tom.play();
    }
});