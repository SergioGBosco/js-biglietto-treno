// Km da percorrere

const percorso = parseInt(prompt("Quanti Kilometri devi Percorrere?"));

// età del passggero  

const età = parseInt(prompt("Inserisci la tua età"));

// Costo del biglietto

const price = 0.21

// Sconto

//const under = 0.80

//const over = 0.60

// Condizione Metodo 1

/*if (età < 18) {
  pricerun = [(price * under) * percorso];
}

else if (età > 65) {
  pricerun = [(price * over) * percorso];
}

else {
  pricerun = price * percorso;

}

*/

const under = 20

const over = 40

if (età < 18) {
  pricerun = [(price * percorso) - [(price * percorso) * under / 100]]
}

else if (età > 65) {
  pricerun = [(price * percorso) - [(price * percorso) * over / 100]]
}

else {
  pricerun = price * percorso;
}


let finalpricerunarrotondato = Number(pricerun);
let finalpricerun = finalpricerunarrotondato.toFixed(2);
console.log(`il costo del tuo biglietto è ${finalpricerun}€`);