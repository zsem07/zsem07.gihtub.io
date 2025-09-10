const state = document.getElementById("text")
const alt_state = document.getElementById("words")
const playButton = document.getElementById("playButton")

//anim player 2
const playButton2 = document.getElementById("playButton2")
const state2 = document.getElementById("text2")
const alt_state2 = document.getElementById("words2")

//anim player3
const playButton3 = document.getElementById("playButton3")
const state3 = document.getElementById("text3")
const alt_state3 = document.getElementById("words3")


playButton.addEventListener('click', () => {
    state.style.animationPlayState = "running"
    setTimeout(() =>{ alt_state.style.animationPlayState = "running"}, 1000);
    });


//anim player 2
playButton2.addEventListener('click', () => {
   state2.style.animationPlayState = "running"
    setTimeout(() =>{ alt_state2.style.animationPlayState = "running"}, 1000);
});


//anim player 3

playButton3.addEventListener('click', () => {
   state3.style.animationPlayState = "running"
    setTimeout(() =>{ alt_state3.style.animationPlayState = "running"}, 1000);
});