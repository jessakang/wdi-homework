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
        return "It's a TIE!";
    } else if ((computerMove === 'paper') && (playerMove === 'paper')) {
        return "It's a TIE!";
    } else if ((computerMove === 'scissors') && (playerMove === 'scissors')) {
        return "It's a TIE!";
    } else if ((computerMove === 'rock') && (playerMove === 'paper')) {
       return "The computer. Maybe next time!";
    } else if ((computerMove === 'rock') && (playerMove === 'scissors')) {
        return "The computer. Maybe next time!";
    } else if ((computerMove === 'paper') && (playerMove === 'rock')) {
        return "The player. You did it!";
    } else if ((computerMove === 'paper') && (playerMove === 'scissors')) {
        return "The player. You did it!";
    } else if ((computerMove === 'scissors') && (playerMove === 'paper')) {
        return "The computer. Maybe next time!";
    } else if ((computerMove === 'scissors') && (playerMove === 'rock')) {
        return "The player. You did it!";
    } else {
        return "Not a thing!";
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