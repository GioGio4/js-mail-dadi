// TRACCIA
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


// 1- Ho bisogno di una lista che contenga le mail degli utenti

const mail_list = [
    "mail1",
    "mail2",
    "mail3",
    "mail4"
];

// console.log("lista email=" + mail_list);

// 2- Devo creare un prompt per far inserire la mail all'utente che accede

const user_mail = prompt("Inserisci Email per accedere");
// console.log(user_mail);

// 3- SE La mail coincide con una nella lista viasualizza messaggio "benvenuto"
//   ALTRIMENTI visualizza messsaggio "accesso negato"

// Ho bisogno di uno switch, altrimenti in caso di condizione "accesso negato" lo ripeterà per ogni ciclo.
let welcome_msg = false

for (let i = 0; i < mail_list.length; i++) {

    const current_element = mail_list[i];

    if (user_mail == current_element) {

        welcome_msg = true
    }

}

// Fuori dal ciclo altrimenti ripete ricerca e riporta alert ad ogni ciclo

if (welcome_msg == true) {
    alert("BENVENUTO")
}
else {
    alert("ACCESSO NEGATO")
}