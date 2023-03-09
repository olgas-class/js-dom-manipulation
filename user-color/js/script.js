const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {
    const result = document.getElementById("result");
    // Ripulire il result
    result.className = "";

    // Prendere il valore del input.
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const userColorInput = document.getElementById("user-color");
    const userColor = userColorInput.value;

    console.log(userName, userColor);

    // Stampo le scelte dell'utente
    result.innerHTML = `Ti chiami ${userName} e hai scelto il colore ${userColor}`;
    result.classList.add(userColor);

    // Ripulisco i campi di input
    userNameInput.value = "";
    userColorInput.value = "";
});

console.log("Altre istruzioni");