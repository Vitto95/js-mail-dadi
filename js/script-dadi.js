// Primo metodo
console.log("*********************************");
console.log("METODO 1");

//dichiarazione variabili

var yourNumber = Math.floor(Math.random() * 6) + 1;
console.log(yourNumber);
var pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

//

if (yourNumber > pcNumber) {
  console.log("Hai vinto!!!!");
} else if (yourNumber < pcNumber) {
  console.log("Hai perso...");
} else {
  console.log("Pareggio :O");
}

console.log("FINE METODO 1");
console.log("*********************************");

//Secondo metodo

console.log("*********************************");
console.log("METODO 2");

var dice = [1, 2, 3, 4, 5, 6];
console.log("Dado: ", dice);
//var randomNum_1 = Math.floor(Math.random() * dice.length);
//console.log("Numero random 1:" , randomNum_1);

//var randomNum_2 = Math.floor(Math.random() * dice.length);
//console.log("Numero random 2:" , randomNum_2);

var yourNumber_1 = dice[Math.floor(Math.random() * dice.length)];
var pcNumber_1 = dice[Math.floor(Math.random() * dice.length)];

console.log("Il tuo numero:", yourNumber_1);
console.log("Il numero del pc:", pcNumber_1);

if (yourNumber_1 > pcNumber_1) {
  console.log("Hai vinto!!!!");
} else if (yourNumber_1 < pcNumber_1) {
  console.log("Hai perso...");
} else {
  console.log("Pareggio :O");
}

console.log("FINE METODO 2");
console.log("*********************************");
