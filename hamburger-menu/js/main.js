const menu = document.querySelector(".hamburger-menu");

// Gestisco l'apertura
const hamburger = document.querySelector(".header-right > a");
hamburger.addEventListener("click", function () {
    // aggiungo la classe active
    menu.classList.add("active");
});

// Gestisco chiusura
const closeBtn = document.querySelector(".close");
console.log(closeBtn);
closeBtn.addEventListener("click", function() {
    menu.classList.remove("active");
});