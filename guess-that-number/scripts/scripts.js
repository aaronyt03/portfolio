"use strict";

// AGENDA

// scoreboard
// have name

// generate random number

// difficulty
// In easy limit 15 guesses.
// In medium limit 10 guesses.
// In hard limit 5 guesses.

// submit button for guess

// validate entry
// check number match
// check guess remaining
// display message (3) in range, wrong guesses

// winning message

// scoreboard 
// add 1 point for each win
// minus 1 point for each lost

const game = {
    // game State
    isRunning: false,

    //game elements
    screens: $('.screen'),
    splash: $('.splash'),
    enterName: $('#enterName'),
    name: $('#pname'),
    playerName: 'p1',
    difficulty: $('#difficulty-screen'),
    btnDifficulty: $('.btn-difficulty'),
    gameOver: $('#end'),
    inputName: $('#name'),
    formUsername: $('.form-username'),
    gameScreen: $('#game'),
    endScreen: $('#endgame'),
    // scoring system
    scoreBoard: $('#scoreboard'),
    // buttons
    btnEnd: $('.btn-end'),
    btnPlayAgain: $('#btn-play-again'),
    btnQuit: $('.btn-quit'),
    // counter
    outputGuessesRemaining: $('.guesses-remaining'),


    // show n hide game screens
    showScreen(id){
            this.screens.hide();
            $(`#${id}`).show();

            // HTML id of the screen that you want to display

            if(id === 'game') {
                this.isRunning = true;
            }else{
                this.isRunning = false;
            }

            this.outputGuessesRemaining.text(this.guessesRemaining);
        },

    start(){
            this.showScreen(this.screenOpening); 
            this.outputGuessesRemaining.text(this.guessesRemaining);
       
        },


    checkName(){
            const usernameFromForm = this.inputName.val();
            console.log('Stored Name');
            console.log(usernameFromForm);
            // $('#pname').text(usernameFromForm);
            this.playerName=usernameFromForm;
            $('#pname').text(this.playerName);
        },

    guessCounter(){
            this.guessesRemaining = this.guessesRemaining - 1;
            if(this.guessesRemaining < 1){
                score--;
                $('#score').text(score);
                this.gameOver(false);
                this.outputGuessesRemaining.text(this.guessesRemaining);
                return;
            }

            this.outputGuessesRemaining.text(this.guessesRemaining);
        },

    gameOver(){
        game.showScreen('end');
    }

};

// splash button
game.enterName.click(function(){
    game.showScreen('difficulty-screen');
});

// game button
game.btnDifficulty.click(function(){
    game.showScreen('game');
});

// game over button
game.btnEnd.click(function(){
    game.showScreen('end');
});

game.btnQuit.click(function(){
    game.showScreen('splash');
});

// restart button
game.btnPlayAgain.click(function(){
    game.showScreen('difficulty-screen')
});

// check name
game.formUsername.on('submit', function(e){
    e.preventDefault();
    game.checkName();
});

// Generate Random Number
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let randomNumber = Math.floor(Math.random() * 1000) + 1;
let maxNumberOfGuesses = 10;
let guessesRemaining = this.maxNumberOfGuesses;
let score = 0;

// difficulty
game.btnDifficulty.on('click', function(){
    if($(this).hasClass('easy')){
        game.guessesRemaining = 15;
        randomNumber = Math.floor(Math.random() * 1000) + 1;
    }else if($(this).hasClass('medium')){
        game.guessesRemaining = 10;
        randomNumber = Math.floor(Math.random() * 1000) + 1;
    }else{
        game.guessesRemaining = 5;
        randomNumber = Math.floor(Math.random() * 1000) + 1;
    }
});

// game guess

btn.addEventListener('click', function() {
    console.log(randomNumber);
    let input = document.getElementById('input').value;

    if (input > 1000 || input <= 0) {
        output.innerHTML = `Please enter a number between 1-1000.`;
    } else if (input < randomNumber) {
        output.innerHTML = `Your guess is too low. Guess higher!`;
    } else if (input > randomNumber) {
        output.innerHTML = `Your guess is too high. Guess lower!`;
    } else {
        output.innerHTML = `You guessed the correct number!`
        game.showScreen('end');
        $('#endgame').text('Congratulations💰');
        score++;
        $('#score').text(score);
    };

    game.guessCounter();

});


// quit restart score
game.btnQuit.click(function(){
    score = 0;
    $('#score').text(score);
})
