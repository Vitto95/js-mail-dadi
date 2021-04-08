//dichiarazione variabili

var yourMail = "andreabianchi32@gmail.com";
//var yourMail = prompt("Qual è la tua mail?");
console.log(yourMail);
var mailList = [
  "pincopallino@gmail.com",
  "marcorossi01@gmail.com",
  "andreabianchi32@gmail.com",
  "ugodeughi@gmail.com",
  "asdlkjsadlks@gmail.com",
  "email-prova@gmail.com",
];
var mailFound = false;
var msgResult = "";

console.log(mailList);
console.log(mailList.length);

//ciclo per vedere se la mail è nella lista

for (var i = 0; i < mailList.length; i++) {
  if (yourMail === mailList[i]) {
    mailFound = true;
  }
}

//output esito ciclo

if (mailFound) {
  msgResult = "Email accettata. Bentornato!";
} else {
  msgResult = "Email non trovata :(";
}

console.log(msgResult);

//output in HTML

document.getElementById("your-mail").innerHTML =
  "Il tuo indirizzo e-mail: " + yourMail;
document.getElementById("result").innerHTML = msgResult;
