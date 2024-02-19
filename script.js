const checkButton = document.getElementById('check-btn');
const userInput = document.getElementById('text-input');
const result = document.getElementById('result');
const tutorialButton = document.getElementById('tutorial-btn');
const containerBox = document.querySelector('.container-box');
const mainContainer = document.querySelector('.container-main');
const tutorialContainer = document.querySelector('.container-tutorial')

function clearInput () {
    userInput.value = userInput.value.replace(/[^a-zA-Z0-9]/g, '');
    userInput.value = userInput.value.toUpperCase();
}

function validation () {

    clearInput();

    console.log(userInput.value);

    if (!userInput.value){
        alert("Coloque um valor válido!");
        return 0;
    }   

    return 1;

}

function setResult (str, originalValue) {
    if (str === userInput.value){
        result.innerText = `${originalValue} é um palíndromo`;
    } else {
        result.innerText = `${originalValue} não é um palíndromo`;
    };
    userInput.value = '';
}


function checkPalindrome() {
    const originalUserInput = userInput.value;

    if( validation() ){

        const inverseString = userInput.value.split('').reverse().join('');
        console.log(inverseString);
        setResult(inverseString, originalUserInput);
    }

}

function openTutorial () {

    tutorialContainer.classList.toggle('hide');
    mainContainer.classList.toggle('hide');
    result.classList.toggle('hide');

    document.getElementById('container-info-btn').onclick = () => {
        tutorialContainer.classList.toggle('hide');
        mainContainer.classList.toggle('hide');
        result.classList.toggle('hide');
    }

}


checkButton.addEventListener('click', checkPalindrome);
tutorialButton.addEventListener('click', openTutorial);

