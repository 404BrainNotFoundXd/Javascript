let random = Math.floor(Math.random() * 100 + 1);           

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess < 1){
    alert('Please enter a number greater than 1')
  }
  else if(guess > 100){
    alert('Please enter a number less than 100')
  }
  else {
    prevGuess.push(guess)
    if(numGuess >= 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random Number  was ${random}`)
      endGame()
    }
    else {
     displayGuess(guess)
     checkGuess(guess)
    }
  }
}

function checkGuess(guess){
if(guess === random){
  displayMessage('You guessed it right')
  endGame()
}
else if (guess < random){
  displayMessage('Number is Too low')
}
else if (guess > random){
  displayMessage('Number is Too High')
}
}

function displayGuess(guess){
 userInput.value = ''
 guessSlot.innerHTML += `${guess} , `;
 numGuess++;
 remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
userInput.value = '';
userInput.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
startOver.appendChild(p);
playGame = false;
newGame();
}

function newGame(){
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click', function(e){
   random = Math.floor(Math.random() * 100 + 1); 
   prevGuess = [];
   numGuess = 1;
   guessSlot.innerHTML = ''
   remaining.innerHTML = `${11 - numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)

   playGame = true;
 })
}

