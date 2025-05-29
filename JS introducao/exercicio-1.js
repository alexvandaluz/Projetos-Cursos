// ==============================
// 📦 CONSOLE.LOG
// ==============================

// 1. Mostre no console a frase "Aprendendo JavaScript é divertido!"
console.log('Aprendendo Javascript é divertido!');

// 2. Mostre no console o resultado da soma 5 + 7
var num1 = 5;
var num2 = 7;
console.log(num1 + num2);


// ==============================
// 📦 VARIÁVEIS
// ==============================

// 3. Crie uma variável chamada "nome" e atribua seu nome a ela
// Mostre no console: "Olá, [nome]!"
let nome = 'Joao';
console.log(`Olá, ${nome}`);

// 4. Crie duas variáveis: "a" e "b" com valores numéricos. Mostre a soma, subtração e multiplicação dos dois no console.

var a = 10;
var b = 5;

console.log(`Soma ${a + b}`);
console.log(`Subtração ${a - b}`);
console.log(`Multiplicação ${a * b}`);
console.log(`Divisão ${a / b}`);


// 5. Crie uma variável "idade". Se a idade for maior que 18, mostre "Maior de idade", senão "Menor de idade".

var idade = 20

if(idade >= 18){
    console.log(`Maior de idade, sua idade é ${idade}`);
}else{
    console.log(`Menor de idade, sua idade é ${idade}`);
}


// ==============================
// 📦 STRINGS (length, toUpperCase, etc.)
// ==============================

// 6. Crie uma string "mensagem" com o valor "  JavaScript é incrível!  ".
// a) Remova os espaços nas pontas
// b) Transforme em maiúsculas
// c) Substitua "incrível" por "poderoso"
// d) Mostre a quantidade de caracteres

let mensagem = '  JavaScript é incrível!  ';

console.log(`${mensagem.trim()}`);
console.log(`${mensagem.toUpperCase()}`);
console.log(`${mensagem.replace('incrível' , 'poderoso')}`);
console.log(`${mensagem.length}`);


// 7. Crie uma string com seu nome completo.
// a) Mostre quantos caracteres ela tem
// b) Mostre apenas o primeiro nome usando slice ou indexOf
// c) Use template string para mostrar: "Seu nome é [nome] e tem [x] letras"


var nomeCompleto= 'João Alex Vandaluz'

console.log(`${nomeCompleto.length}`);
console.log(`${nomeCompleto.slice(0,4)}`);
console.log(`Seu nome é ${nomeCompleto} e tem ${nomeCompleto.length} letras`)
