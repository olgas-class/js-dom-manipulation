// const title = document.getElementById('title');
// console.log(title.innerHTML);
// 
// const paragraph = document.querySelector('.paragraph:nth-of-type(2)');
// console.log(paragraph.innerHTML);

// Class manipulations
// const square = document.querySelector('.square');
// console.log(square);
// console.log(square.className);
// // Primo metodo
// // square.className = square.className + " green";
// 
// // Secondo metodo
// console.log(square.classList);
// square.classList.add("green");
// square.classList.add("green");
// square.classList.remove("rounded");
// square.classList.toggle("green");
// 
// // Modificare style inline
// square.style.border = "1px solid blue";
// 
// // Inserimento di testi
// // square.innerHTML += " mondo!";
// // square.append(' mondo');
// // square.prepend('OK');
// 
// square.append("hello " + "mondo");
// 
// // square.innerHTML += "<span> mondo</span>"";
// square.append("<span> mondo</span>");

// Click listener
const greetingBox = document.getElementById("greeting");
console.log(greetingBox);

greetingBox.addEventListener("click", function() {
    // esegui questo codice al click
    // alert("Ciao!");
    greetingBox.classList.toggle("green");
});