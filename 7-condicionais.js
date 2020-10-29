console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log(`Bom viagem`);
    listaDeDestinos.splice(1, 1)
    console.log(listaDeDestinos);
} else {
    console.log(`Não é maior de idade e posso vender`);
}

console.log(`Embarque:\n\n`);
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log(`Bom viagem`);
} else {
    console.log(`Você não pode embarcar`);
}


// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);