////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    if ((computerMove === 'rock') && (playerMove === 'rock')) {
        winner = "It's a TIE!";
    } else if ((computerMove === 'paper') && (playerMove === 'paper')) {
        winner = "It's a TIE!";
    } else if ((computerMove === 'scissors') && (playerMove === 'scissors')) {
        winner = "It's a TIE!";
    } else if ((computerMove === 'rock') && (playerMove === 'paper')) {
        winner = "The computer. Maybe next time!";
    } else if ((computerMove === 'rock') && (playerMove === 'scissors')) {
        winner = "The computer. Maybe next time!";
    } else if ((computerMove === 'paper') && (playerMove === 'rock')) {
        winner = "The player. You did it!";
    } else if ((computerMove === 'paper') && (playerMove === 'scissors')) {
        winner = "The player. You did it!";
    } else if ((computerMove === 'scissors') && (playerMove === 'paper')) {
        winner = "The computer. Maybe next time!";
    } else if ((computerMove === 'scissors') && (playerMove === 'rock')) {
        winner = "The player. You did it!";
    } else {
        winner = "Not a thing!"
    }
    console.log("Drum roll... The winner is: " + winner);
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

