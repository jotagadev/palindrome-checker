const checkButton = document.getElementById('check-btn');
const userInput = document.getElementById('text-input');
const result = document.getElementById('result');

function clearInput () {
    userInput.value = userInput.value.replace(/[^a-zA-Z]/g, '');
}

function validation () {

    clearInput();

    console.log(userInput.value);

    if (!userInput.value){
        alert("Please input a value");
        return 0;
    }   

    return 1;

}

function setResult (stringInvertida) {
    if (stringInvertida === userInput.value){
        result.innerText = `${userInput.value} is a palindrome`;
    } else {
        result.innerText = `${userInput.value} is not a palindrome`
    };
}


function checkPalindrome() {
    if( validation() ){

        const stringInvertida = userInput.value.split('').reverse().join('');
        console.log(stringInvertida);
        setResult(stringInvertida);
    }

}

checkButton.addEventListener('click', checkPalindrome);
