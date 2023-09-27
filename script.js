const dynamicText = document.querySelector('.dynamic-text');
const words = ["Python Developer", "Linux Wizard", "Backend Developer", "Problem Solver", "Continuous Learner"];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  if(!isDeleting) {
    dynamicText.textContent = currentWord.substring(0, letterIndex);
    letterIndex++;
  }
  if(isDeleting) {
    dynamicText.textContent = currentWord.substring(0, letterIndex);
    letterIndex--;
  }
  if(letterIndex === currentWord.length) {
    isDeleting = true;
  }
  if(letterIndex === 0) {
    isDeleting = false;
    wordIndex++;
  }
  if(wordIndex === words.length) {
    wordIndex = 0;
  }
}

setInterval(typeEffect, 100);
typeEffect();