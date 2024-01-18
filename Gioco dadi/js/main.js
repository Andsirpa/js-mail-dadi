// genero un numero random per l'utente
const userNumberGenerator = Math.floor(Math.random() * 6) + 1
const userNumber = userNumberGenerator
console.log('User number: ' + userNumber);

// genero un numero random per il computer
const computerNumberGenerator = Math.floor(Math.random() * 6) + 1
const computerNumber = computerNumberGenerator
console.log('Computer number: ' + computerNumber);

// definisco la condizione di vittoria
if (userNumber > computerNumber) {
    console.log('Utente is the winner');
} else if (userNumber < computerNumber) {
    console.log('Computer is the winner');
} else {
    console.log('Draw');
}