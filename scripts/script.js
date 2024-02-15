function handleKeyboardButtonPress(event) {
    // console.log('button pressed');
    // console.log(event.key);
    const playerPressed=event.key;
    const currentAlphabetElement=document.getElementById('current-alphabet');
    // console.log(currentAlphabetElement);
    const currentAlphabet=currentAlphabetElement.innerText.toLowerCase();
    console.log(playerPressed,currentAlphabet);

    if (playerPressed===currentAlphabet) {
        console.log('You got a point');
        const currentScoreElement=document.getElementById('current-score');
       const currentScoreText=currentScoreElement.innerText;
       const currentScore=parseInt(currentScoreText)
      const newScore =currentScore+1;
      console.log(newScore);
      currentScoreElement.innerText=newScore;
        // console.log(currentScoreText);
        removeBackgroundColorById(currentAlphabet);
        continueGame();
    }else{
        console.log('You missed !!!!!! you lost a life');
        const currentLifeElement=document.getElementById('current-life');
        const currentLifeText=currentLifeElement.innerText;
        const currentLife=parseInt(currentLifeText);
        const newLife=currentLife-1;
        console.log(newLife);
        currentLifeElement.innerText=newLife;
        if (newLife===0) {
          
        }
    }
}
document.addEventListener('keyup',handleKeyboardButtonPress)

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
  continueGame();
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

  const random = Math.round(Math.random() * 25 );
  // console.log(random);

  const alphabet = alphabets[random];
  // console.log(random,alphabet);
  return alphabet;
}
