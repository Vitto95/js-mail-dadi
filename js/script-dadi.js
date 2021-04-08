// Primo metodo
console.log("*********************************");
console.log("METODO 1");

//dichiarazione variabili

var yourNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il tuo numero:", yourNumber);
var pcNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il numero del pc:", pcNumber);
var result;

//

if (yourNumber > pcNumber) {
  console.log("Hai vinto!!!!");
  result = "Hai vinto!!!!";
} else if (yourNumber < pcNumber) {
  console.log("Hai perso...");
  result = "Hai perso...";
} else {
  console.log("Pareggio :O");
  result = "Pareggio :O";
}

//output HTML - Metodo 1

document.getElementById("your-number").innerHTML =
  "Il tuo numero: " + yourNumber;
document.getElementById("pc-number").innerHTML =
  "Il numero del pc: " + pcNumber;
document.getElementById("winner").innerHTML = result;

console.log("FINE METODO 1");
console.log("*********************************");

//Secondo metodo

console.log("*********************************");
console.log("METODO 2");

//dichiarazione variabili
var dice = [1, 2, 3, 4, 5, 6];
console.log("Dado: ", dice);
var yourNumber_2 = dice[Math.floor(Math.random() * dice.length)];
var pcNumber_2 = dice[Math.floor(Math.random() * dice.length)];
var result_2;

console.log("Il tuo numero:", yourNumber_2);
console.log("Il numero del pc:", pcNumber_2);

if (yourNumber_2 > pcNumber_2) {
  console.log("Hai vinto!!!!");
  result_2 = "Hai vinto!!!!";
} else if (yourNumber_2 < pcNumber_2) {
  console.log("Hai perso...");
  result_2 = "Hai perso...";
} else {
  console.log("Pareggio :O");
  result_2 = "Pareggio :O";
}

//output HTML - Metodo 2

document.getElementById("your-number-2").innerHTML =
  "Il tuo numero: " + yourNumber_2;
document.getElementById("pc-number-2").innerHTML =
  "Il numero del pc: " + pcNumber_2;
document.getElementById("winner-2").innerHTML = result_2;

console.log("FINE METODO 2");
console.log("*********************************");

//output in HTML - Metodo 1
