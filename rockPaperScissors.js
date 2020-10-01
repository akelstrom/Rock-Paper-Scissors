const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
getUserChoice
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error, please type rock, paper or scissors');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie!'
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won...'
    } else {
      return 'You Won!'
    };
  };
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won...'
    } else {
      return 'You Won!'
    }
  };
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won...'
    } else {
      return 'You Won!'
    }
  };
  if (userChoice === 'bomb') {
    return 'You win!'}
  }

const playGame = () => {
  const userChoice = 
getUserChoice('paper'); 
//enter your answer in '' above (line 54)
  const computerChoice =
getComputerChoice();
    console.log('you threw ' + userChoice);
    console.log(`the computer threw ${computerChoice}`);

console.log(determineWinner(userChoice,computerChoice));
};


playGame()

