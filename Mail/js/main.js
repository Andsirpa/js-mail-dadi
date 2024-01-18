// chiedo la mail all'utente
let userMail = prompt('Iserisci la tua mail per accedere')
console.log('Mail iserita: ' + userMail);

// creo un array con le mail valide
const mails = [
    'mail1@gmail.com',
    'mail2@gmail.com',
    'mail3@gmail.com',
    'mail4@gmail.com'
]

// creo un ciclo FOR per controllare la condizione

let validMail = false
for (let i = 0; i < mails.length; i++) {
    if (userMail === mails[i]) {
        validMail = true
    }

}

// definisco la condizione
if (validMail === true) {
    console.log('Accesso consentito');
} else {
    console.log('Accessso negato');
}