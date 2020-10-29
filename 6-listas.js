console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);

// listaDeDestinos.splice(2,1); Toda lista começa com o número zero(0).
listaDeDestinos.splice(1,1)
console.log(listaDeDestinos);

//Quando precisamos mostrar um item específico da lista
console.log(listaDeDestinos[1],listaDeDestinos[0]);

// let new = 2; NEW é uma variável do JS e não pode ser utilizada como nome de uma variável.