"use strict";
console.log("Tadpole Game");
 
 
let score = 0;
let cross = true;
let dieAudio = new Audio("gameover.mp3");
let music = new Audio("music.mp3");
music.play();
 
onkeydown = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 32)
        location.reload();
    if (e.keyCode == 38) {
        let dino = document.querySelector(".dinosaur");
        dino.classList.add("dinoUp");
        setTimeout(() => {
            dino.classList.remove("dinoUp");
        }, 600); //If we'll not remvoe the class then there will be no change even if we are pressing the button / key again and again that's why we have to remove it after adding then it will be added again when we will press the key again.
    }
 
    if (e.keyCode == 39) {
        let dino = document.querySelector(".dinosaur");
        let dx = parseInt(getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dx + 100 + "px";
        // dino.style.transform = "rotate(90deg)";
        // this.onkeyup = function () {
 
        //     dino.style.transform = "rotate(360deg)";
        // }
 
 
    }
    if (e.keyCode == 37) {
        let dino = document.querySelector(".dinosaur");
        let dx = parseInt(getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = (dx - 100) + "px";
        // dino.style.transform = "rotate(270deg)";
        // this.onkeyup = function () {
 
        //     dino.style.transform = "rotate(360deg)";
        // }
 
    }
}
 
 
/* getComputedStyle() It will return the all style(all properties) of of an element * inside it. It take two arguments. First one is element that we wanna point out * * and the second one is the pseudo element (I'm confuse in second argument concept) * but in this case we will put the nu; */
 
//getPropertyValue("left") will return the exact value of element in this case from the left;
 
setInterval(() => {
    let dino = document.querySelector(".dinosaur");
    let obstacle = document.querySelector(".obstacle");
    let gameOver = document.querySelector("#gameOver");
    console.log("oka");
 
    let dx = parseInt(getComputedStyle(dino, null).getPropertyValue("left"));
    let dy = parseInt(getComputedStyle(dino, null).getPropertyValue("bottom"));
 
    let ox = parseInt(getComputedStyle(obstacle, null).getPropertyValue("left"));
    let oy = parseInt(getComputedStyle(obstacle, null).getPropertyValue("bottom"));
 
    // Get absolute values. It will give the exact pixels difference between both objects (obstacle and dinosaur) 
    let onX = Math.abs(dx - ox);
    let onY = Math.abs(dy - oy);
 
 
    if (onX < 40 && onY < 40) { // Game Over Code
         
                let scoring = document.getElementById("score");
                scoring.innerHTML = "Score: " + (score - 1);
 
        gameOver.style.visibility = "visible";
        obstacle.classList.remove("dragon");
        dino.classList.add("throwDino");
        dieAudio.play();
        music.pause();
        setTimeout(() => {
            dieAudio.pause();
        }, 700);
 
    }
    else if (onX < 80 && cross) { //Increase the score
 
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
 
 
        // less duration
        setTimeout(() => {
 
            let lDur = parseFloat(getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
            lDur = lDur - 0.1;
            obstacle.style.animationDuration = lDur + 's';
         
        }, 1000);
 
    }
 
    console.log(onX, onY);
    // console.log(val);
}, 0);
 
 
function updateScore(score) {
    let scoring = document.getElementById("score");
    scoring.innerHTML = "Score: " + score;
}