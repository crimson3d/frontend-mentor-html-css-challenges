const boton = document.getElementById("socialButton");
const modal = document.getElementById("modalSocial");

boton.addEventListener("click", function(event) {
    modal.classList.toggle("bottom__modal--visible");
    event.stopPropagation();
});

document.addEventListener("click", function() {
    if(modal.classList.contains("bottom__modal--visible")) {
        modal.classList.remove("bottom__modal--visible");
    }
});