
// Dynamic elements - global
const roundNumberDisplay = document.getElementById('round-number');

const computerScoreDisplay = document.getElementById('computer-score');
const humanScoreDisplay = document.getElementById('human-score');


const computerInputDisplay = document.getElementById('computer-input');
const humanInputDisplay = document.getElementById('human-input');

const rockButton = document.getElementById('rock-input');
const paperButton = document.getElementById('paper-input');
const scissorsButton = document.getElementById('scissors-input');

const winnerDisplay = document.getElementById('winner-text');

const nextRoundButton = document.getElementById('next-round-button');


// Beginning stats
let currentRoundNumber = 1;
let computerScore = 0;
let humanScore = 0;

// Computer input
const computerChoiceFunction = () => {
    const randomComputerChoice = Math.floor(Math.random() * 3);
    if (randomComputerChoice === 0) {
        return 'rock';
    } 
    if (randomComputerChoice === 1) {
        return 'paper';
    }
    if (randomComputerChoice === 2) {
        return 'scissors';
    }
}

// Function to determine winner
const winnerIsHuman = (computerChoice, humanChoice) => {
    if (humanChoice === computerChoice) {
        return 0;
    }
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        return 1;
    }
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        return 1;
    }
    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        return 1;
    } 
    else {
        return 2;
    }
}

// Function to create winner text
const nameWinner = (winnerIsHuman) => {
    if (winnerIsHuman === 0) {
        return 'tie';
    }
    if (winnerIsHuman === 1) {
        return 'Computer wins!';
    }
    if (winnerIsHuman === 2) {
        return 'You win!';
    }
}

// Function to update score
const updateScore = (winnerIsHuman) => {
    if (winnerIsHuman === 2) {
        return humanScore++;
    } 
    if (winnerIsHuman === 1) {
        return computerScore++;
    }
}

// Function to update round number
const updateRoundNumber = () => {
    currentRoundNumber++;
}

// Function to display computer choice
const showCorrectComputerChoice = (computerChoice) => {
    if (computerChoice === 'rock') {
        computerInputDisplay.classList.toggle('rock-image');
    } 
    if (computerChoice === 'paper') {
        computerInputDisplay.classList.toggle('paper-image');
    }
    if (computerChoice === 'scissors') {
        computerInputDisplay.classList.toggle('scissors-image');
    } 
}

// Function to disable buttons
const disableAndEnableButtonsAfterGuess = () => {
    rockButton.setAttribute('disabled', true);
    paperButton.setAttribute('disabled', true);
    scissorsButton.setAttribute('disabled', true);
    nextRoundButton.removeAttribute('disabled');
}

// Function to hide buttons
const hideButtons = () => {
    rockButton.style.visibility = 'hidden';
    paperButton.style.visibility = 'hidden';
    scissorsButton.style.visibility = 'hidden';
}



// Guess buttons
rockButton.addEventListener('click', () => {
    // Get computer choice
    let computerChoice = computerChoiceFunction();
    // Display computer choice
    computerInputDisplay.classList.remove('question-mark-image');
    showCorrectComputerChoice(computerChoice);
    // Get human choice
    let humanChoice = 'rock';
    humanInputDisplay.classList.toggle('rock-image');
    // Determine winner
    let winner = winnerIsHuman(computerChoice, humanChoice);
    let winnerText = nameWinner(winner);
    // Display winner text
    winnerDisplay.innerText = `${winnerText}`;
    // Update score
    updateScore(winner);
    computerScoreDisplay.innerText = computerScore;
    humanScoreDisplay.innerText = humanScore;
    // Disable & enable buttons
    disableAndEnableButtonsAfterGuess();
    // Hide buttons
    hideButtons();
});

paperButton.addEventListener('click', () => {
    // Get computer choice
    let computerChoice = computerChoiceFunction();
    // Display computer choice
    computerInputDisplay.classList.remove('question-mark-image');
    showCorrectComputerChoice(computerChoice);
    // Get human choice
    let humanChoice = 'paper';
    humanInputDisplay.classList.toggle('paper-image');
    // Determine winner
    let winner = winnerIsHuman(computerChoice, humanChoice);
    let winnerText = nameWinner(winner);
    // Display winner text
    winnerDisplay.innerText = `${winnerText}`;
    // Update score
    updateScore(winner);
    computerScoreDisplay.innerText = computerScore;
    humanScoreDisplay.innerText = humanScore;
    // Disable & enable buttons
    disableAndEnableButtonsAfterGuess();
    // Hide buttons
    hideButtons();
});

scissorsButton.addEventListener('click', () => {
    // Get computer choice
    let computerChoice = computerChoiceFunction();
    // Display computer choice
    computerInputDisplay.classList.remove('question-mark-image');
    showCorrectComputerChoice(computerChoice);
    // Get human choice
    let humanChoice = 'scissors';
    humanInputDisplay.classList.toggle('scissors-image');
    // Determine winner
    let winner = winnerIsHuman(computerChoice, humanChoice);
    let winnerText = nameWinner(winner);
    // Display winner text
    winnerDisplay.innerText = `${winnerText}`;
    // Update score
    updateScore(winner);
    computerScoreDisplay.innerText = computerScore;
    humanScoreDisplay.innerText = humanScore;
    // Disable & enable buttons
    disableAndEnableButtonsAfterGuess();
    // Hide buttons
    hideButtons();
});


// Next round button
nextRoundButton.addEventListener('click', () => {
    // Update round number
    updateRoundNumber();
    roundNumberDisplay.innerText = currentRoundNumber;
    // Reset computer choice 
    computerInputDisplay.className = '';
    computerInputDisplay.classList.toggle('question-mark-image');
    // Reset human choice
    humanInputDisplay.className = '';
    // Reset winner text
    winnerDisplay.innerText = '?';
    // Disable & enable buttons
    rockButton.removeAttribute('disabled');
    paperButton.removeAttribute('disabled');
    scissorsButton.removeAttribute('disabled');
    nextRoundButton.setAttribute('disabled', true);
    // Make buttons visible
    rockButton.style.visibility = 'visible';
    paperButton.style.visibility = 'visible';
    scissorsButton.style.visibility = 'visible';
});
