let accordion = document.getElementsByClassName("card__button");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        let expand = this.querySelector(".button__icon--expanded");
        let collapse = this.querySelector(".button__icon--collapsed");
        let panel = this.parentNode.nextElementSibling;

        if (panel.classList.contains('container__content--active')) {
            panel.classList.remove('container__content--active');
            panel.classList.add('container__content')
            expand.style.display = "none";
            collapse.style.display = "block";
        } else {
            panel.classList.add('container__content--active');
            panel.classList.remove('container__content');
            expand.style.display = "block";
            collapse.style.display = "none";
        }
    });
}



// let accordion = document.getElementsByClassName("card__button");
// let i;

// for(i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function() {
//         let expand = this.querySelector(".button__icon--expanded");
//         let collapse = this.querySelector(".button__icon--collapsed");
//         let parent = this.parentNode;
//         let nextParentSibling = parent.nextElementSibling;

//         if (nextParentSibling.style.display === "block"){
//             nextParentSibling.style.display = "none";
//             expand.style.display = "none";
//             collapse.style.display = "block";
//         }
//         else {
//             nextParentSibling.style.display = "block";
//             expand.style.display = "block";
//             collapse.style.display = "none";
//         }
//     });
// }