const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ){
        alert(`you mad an invalid choice, we chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.3){
        return ROCK;
    } else if(randomValue < 0.67){
        return PAPER;
    } else{
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) => {
    if(cChoice === pChoice){
        return RESULT_DRAW;
    } else if(
        cChoice === ROCK && pChoice === PAPER || 
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
        ){
            return RESULT_PLAYER_WINS;
    } else{
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function(){  
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('the game has started');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(playerSelection);
    console.log(computerChoice);
    const winner = getWinner(computerChoice, playerSelection);
    console.log(winner);
    let message = `you picked ${playerSelection}, computer picked ${computerChoice}, therefore you`;
    if (winner === RESULT_DRAW){
        message = message + ` had a DRAW`;
    } else if (winner === RESULT_PLAYER_WINS){
        message = message + ` WON`;
    } else if (winner === RESULT_COMPUTER_WINS){
        message = message + ` LOST`;
    }
    alert(message);
    gameIsRunning = false;
});



// const bindTest = function(myFunction, ...sum){
//     let total = 0;
//     for (num of sum){
//         total += num
//     };
//     myFunction(total);
// };

// const anotherFunction = (anotherResult, result) => {
//     let total = result + anotherResult;
//     console.log(`this is the result ${total}`);
//     console.log(result);
// };

// bindTest(anotherFunction.bind(this, 14), 1,3,1,2);
// bindTest(anotherFunction.bind(this, 3), 1,3,1,2);
// bindTest(anotherFunction.bind(this, 4), 1,3,1,2);