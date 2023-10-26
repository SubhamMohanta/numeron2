// Iteration 8: Making scoreboard functional

let score_box = document.getElementById("score-board");
let play_again_btn = document.getElementById("play-again-button")

let value = localStorage.getItem("score");

score_box.textContent = value;

play_again_btn.onclick = () =>{
    window.open("./game.html", "_self")
}