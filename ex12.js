let valores = [12, 7, 25, 3, 18, 10, 2, 30];

let maior = valores[0];
let menor = valores[0];
let soma = 0;
let maiores10 = 0;

for (let i = 0; i < valores.length; i++) {

    let num = valores[i];

    if (num > maior) maior = num;
    if (num < menor) menor = num;

    if (num > 10) maiores10++;

    soma += num;
}

let media = soma / valores.length;

console.log("Maior:", maior);
console.log("Menor:", menor);
console.log("Média:", media);
console.log("Maiores que 10:", maiores10);