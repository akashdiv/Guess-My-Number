'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayNumber = function(numberWidth, secretNumber){
    document.querySelector('.number').style.width = numberWidth;
    document.querySelector('.number').textContent = secretNumber;
}

document.querySelector('.check').addEventListener(
    'click', function () {
        const guessValue = Number(document.querySelector('.guess').value);

        if(!guessValue){
           displayMessage('Enter Any Number');
        } else if(guessValue === secretNumber){
            displayMessage('Correct Number');
            document.querySelector('body').style.backgroundColor = '#60b347';
            displayNumber('30rem', secretNumber)
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }else if(guessValue !== secretNumber){
            if(score > 1){
                displayMessage(guessValue > secretNumber ? 'Too High' : 'Too Low');
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                displayMessage('Lost The Game');
                document.querySelector('.score').textContent = 0;
            }
        }
    });

    document.querySelector('.again').addEventListener(
        'click', function(){
            score = 20;
            secretNumber = Math.trunc(Math.random() * 20) + 1;
            displayMessage('Start guessing...');
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#222';
            displayNumber('15rem', '?')
            document.querySelector('.guess').value = '';
        });