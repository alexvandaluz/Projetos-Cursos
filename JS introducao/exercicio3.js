// ==============================
// 🧺 ARRAYS E LAÇOS
// ==============================

// 14. Crie um array chamado "frutas" com 3 frutas. Mostre todas com console.log.

let frutas = ['Maça', 'Banana', 'Pessêgo'];
console.log(frutas);

// 15. Adicione mais uma fruta ao final do array. Depois, remova a primeira fruta.

frutas.push('Graviola');
console.log(frutas)

frutas.shift();
console.log(frutas);

// 16. Mostre quantas frutas existem no array com .length

console.log(`No Array tem ${frutas.length} frutas`);

// 17. Crie um laço que percorra o array e mostre: "Eu gosto de [fruta]".

for (let i= 0; i < frutas.length; i++){
    console.log(`Eu gosto de ${frutas[i]}`);
}

// 18. Crie um array de números e use um loop para mostrar apenas os pares.

let number = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < number.length; i++){
    if (number[i] % 2 === 0){
        console.log(`${number[i]} é par`)
    }
}

// 19. Crie um array de nomes. Use forEach para mostrar uma mensagem para cada: "Olá, [nome]!"

let nomes = ['João', 'Lucas', 'Flavio', 'Fernando'];

nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});

