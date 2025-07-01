// Km da percorrere

const percorso = parseInt(prompt("Quanti Kilometri devi Percorrere?"));

// età del passggero  

const età = parseInt(prompt("Inserisci la tua età"));

// Costo del biglietto

const price = 0.21

// Sconto

const under = 0.80

const over = 0.60

if (età < 18) {
  pricerun = [(price * under) * percorso];
}

else if (età > 65) {
  pricerun = [(price * over) * percorso];
}

else {
  pricerun = price * percorso

}

console.log(`il costro del tuo biglietto è ${pricerun}€`);