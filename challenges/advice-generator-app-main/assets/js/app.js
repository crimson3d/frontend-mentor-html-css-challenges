const button = document.getElementById("button");
let outputText = document.getElementById("quote-text");
let outputNbr = document.getElementById("quote-number");

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            outputText.innerText = data.slip.advice;
            outputNbr.innerText = data.slip.id;
        })
        .catch(error => console.error('Error:', error));
};

button.addEventListener("click", getAdvice);