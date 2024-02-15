function handleKeyboardButtonPress(event) {
  // console.log('button pressed');
  // console.log(event.key);

  const playerPressed = event.key;
  // console.log(playerPressed);
  if (playerPressed==='Escape') {
    gameOver();
    
  }
  const currentAlphabetElement = document.getElementById("current-alphabet");
  // console.log(currentAlphabetElement);
  const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
  // console.log(playerPressed, currentAlphabet);

  if (playerPressed === currentAlphabet) {
    // console.log('You got a point');
    // const currentScoreElement=document.getElementById('current-score');
    //  const currentScoreText=currentScoreElement.innerText;
    //  const currentScore=parseInt(currentScoreText)
    // const currentScore=getTextElementValueById('current-score');
    // const newScore =currentScore+1;
    // console.log(newScore);
    // currentScoreElement.innerText=newScore;
    // console.log(currentScoreText);
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);
    removeBackgroundColorById(currentAlphabet);
    continueGame();
  } else {
    console.log("You missed !!!!!! you lost a life");
    // const currentLifeElement=document.getElementById('current-life');
    // const currentLifeText=currentLifeElement.innerText;
    // const currentLife=parseInt(currentLifeText);
    // const currentLife=getTextElementValueById('current-life');
    // console.log(newLife);
    // currentLifeElement.innerText=newLife;

    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);
    
    if (newLife === 0) {
      console.log('game over');
      gameOver();

    }
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getARandomAlphabet();

  // console.log('Your Random Alphabet',alphabet);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet.toUpperCase();
  setBackgroundColorById(alphabet);
  
}

function playNow() {
  //  const homeScreen=document.getElementById('home-screen');
  // homeScreen.classList.add('hidden');
  // const playGroundSection=document.getElementById('play-ground');
  // playGroundSection.classList.remove('hidden');

  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById('final-score');
  setTextElementValueById('current-life',5);
  setTextElementValueById('current-score',0)
  continueGame();
  
}
function gameOver() {
  hideElementById('play-ground');
  showElementById('final-score');
  const lastScore=getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score',lastScore);
  // const currentAlphabetElement = document.getElementById("current-alphabet");
  // const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
  const Alphabet=getElementTextById('current-alphabet');
  const currentAlphabet=Alphabet.toLowerCase();
  removeBackgroundColorById(currentAlphabet);

}

function setBackgroundColorById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("bg-orange-400");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  // console.log(alphabets);

  const random = Math.round(Math.random() * 25);
  // console.log(random);

  const alphabet = alphabets[random];
  // console.log(random,alphabet);
  return alphabet;
}
