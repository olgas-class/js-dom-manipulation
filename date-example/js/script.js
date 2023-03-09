// const now = new Date();
// console.log(now);
// console.log(now.getMinutes());

// quanto manca: utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.

// Calcolare ora attuale
const currentDate = new Date();
const currentMinutes = currentDate.getMinutes();

console.log(currentMinutes);

// Calcolare minuti rimasti: 60 - minuti attuali
const minutesToNextHour = 60 - currentMinutes;

console.log(minutesToNextHour);