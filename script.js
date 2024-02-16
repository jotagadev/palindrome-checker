const checkButton = document.getElementById('check-btn');
const userInput = document.getElementById('text-input');
const result = document.getElementById('result');


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

checkButton.addEventListener('click', checkPalindrome);
