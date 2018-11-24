let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function convertToWord(letter) {
  if(letter === 'r') return "Rock";
  if(letter === 'p') return "Paper";
  return "Scissors";
}

function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!!`;
  userChoice_div.classList.remove('red');
  userChoice_div.classList.add('green-glow');
  setTimeout(() => {
    userChoice_div.classList.remove('green-glow');
    userChoice_div.classList.add('red');
  }, 600);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost!!`;
  userChoice_div.classList.remove('red');
  userChoice_div.classList.add('red-glow');
  setTimeout(() => {
    userChoice_div.classList.remove('red-glow');
    userChoice_div.classList.add('red');
  }, 600);
}

function draw(userChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML - computerScore;
  result_div.innerHTML = `You both threw ${convertToWord(userChoice)}. It's a Draw!!`;
  userChoice_div.classList.remove('red');
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => {
    userChoice_div.classList.remove('gray-glow');
    userChoice_div.classList.add('red');
  }, 600);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();