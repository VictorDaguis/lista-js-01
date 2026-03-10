let requests = [12, 30, 5, 18, 40, 22, 8];
let limite = 25;

let validas = 0;
let excedidas = 0;
let maior = requests[0];

for (let i = 0; i < requests.length; i++) {

    let req = requests[i];

    if (req <= limite) {
        console.log(req + " OK");
        validas++;
    } else {
        console.log(req + " LIMIT EXCEEDED");
        excedidas++;
    }

    if (req > maior) {
        maior = req;
    }
}

console.log("Requisições válidas:", validas);
console.log("Acima do limite:", excedidas);
console.log("Maior valor:", maior);