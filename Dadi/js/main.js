// TRACCIA
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



//1) AL verificarsi di un evento "click", generare un numero randomico sia per "utente" che per "computer"
const generate_btn = document.getElementById("generate-button");
// console.log(generate_btn);

generate_btn.addEventListener
    ("click", function () {


        let user_number = Math.floor(Math.random() * 6 + 1);
        let computer_number = Math.floor(Math.random() * 6 + 1);

        //2) Stampare i numeri a schermo
        document.getElementById("user-number").innerHTML = "Il tuo numero è " + user_number;
        document.getElementById("computer-number").innerHTML = "Il numero del tuo avversario è " + computer_number;

        //3) SE numero utente>computer stampa "vittoria", ALTRIMENTI SE numero utente==computer stampa "pareggio",
        //  ALTRIMENTI stampa "sconfitta".

        if (user_number > computer_number) {
            document.getElementById("result-msg").innerHTML = "VITTORIA"
        }

        else if (user_number == computer_number) {
            document.getElementById("result-msg").innerHTML = "PAREGGIO"
        }

        else {
            document.getElementById("result-msg").innerHTML = "SCONFITTA"
        }
    })
