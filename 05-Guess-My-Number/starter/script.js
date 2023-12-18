'use strict';


// document.querySelector('.message').textContent = 'test'

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 155;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;



document.querySelector('.btn.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    console.log(typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = "No number"
        
    } else if (score < 1) {
        document.querySelector('.message').textContent = "You lost the game !"
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number !"
        document.querySelector('body').style.backgroundColor = "green"
        document.querySelector('.number').style.width = "25rem"
        document.querySelector('.number').textContent = secretNumber
        if (score > highScore) {
            document.querySelector('.highscore').textContent = String(score)
        }
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "Too high !"
        score--
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Too low !"
        score--
    }
    document.querySelector('.score').textContent = score
})


document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.message').textContent = "Start guessing..."
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = ""
    document.querySelector('.score').textContent = "20"
    document.querySelector('.number').style.width = "15rem"
    
})