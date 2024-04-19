const score = document.querySelectorAll(".stars__rate");
let finalSelectedScore;

score.forEach(selectedScore => {
    selectedScore.addEventListener("click", function() {
        score.forEach(scoreElement => {
            scoreElement.style.backgroundColor = "hsla(216, 12%, 54%, 0.25)";
            scoreElement.style.color = "hsl(217, 12%, 63%)";
        });
        this.style.backgroundColor = "hsl(25, 97%, 53%)";
        this.style.color = "white";
        finalSelectedScore = selectedScore.innerHTML;
    });
});

const boton = document.getElementById("rateButton");
const spanDestino = document.getElementById("finalSelectedScore");
const primeraTarjeta = document.getElementById("stateStart");
const segundaTarjeta = document.getElementById("stateFinal");

boton.addEventListener("click", function() {
    if (finalSelectedScore !== undefined) {
        spanDestino.innerHTML = finalSelectedScore;
        primeraTarjeta.style.display = "none";
        segundaTarjeta.style.display = "flex";
    } else {
        this.disabled = true;
        setTimeout (() => {
            this.disabled = false;
        }, 1000);
    };
});

