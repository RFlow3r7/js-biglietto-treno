// Chiedi all'utente il numero di chilometri da percorrere //
var chilometri = parseFloat(prompt("Inserisci il numero di chilometri da percorrere:"));

// Chiedi all'utente l'età //
var eta = parseInt(prompt("Inserisci la tua età:"));

// Calcola il prezzo totale del viaggio //
var prezzoAlKm = 0.21;
var prezzoTotale = chilometri * prezzoAlKm;

// Applica sconti in base all'età //
if (eta < 18) {
    // Sconto del 20% se sei minorenne //
    prezzoTotale *= 0.8;
} else if (eta >= 65) {
    // Sconto  40% se sei over 65 //
    prezzoTotale *= 0.6;
}

var risultatoElement = document.createElement('p');
risultatoElement.textContent = "Il prezzo totale del viaggio è: " + prezzoTotale.toFixed(2) + " €";
document.body.appendChild(risultatoElement);