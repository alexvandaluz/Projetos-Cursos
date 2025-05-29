// ==============================
// 🔁 OPERADORES LÓGICOS (!, &&, ||)
// ==============================

// 8. Crie uma variável "temSol" e "temPraia". Se os dois forem verdadeiros, mostre "Vamos à praia!"
let temSol = true;
let temPraia = false;

if(temSol && temPraia){
    console.log('Vamos á praia!');
}else{
    console.log('Não vamos a praia...');
}

// 9. Crie uma variável "estaChovendo". Se estiver chovendo (true), mostre "Leve um guarda-chuva!", senão "Pode sair tranquilo."

let estaChovendo = false;

if(estaChovendo){
    console.log('Leve um guarda-chuva!');
}else{
    console.log('Pode sair tranquilo');
}


// 10. Crie uma variável "temDinheiro" e "estaAberto". Use o operador OU (||) para mostrar: 
// Se pelo menos uma das condições for verdadeira, mostre "Vamos ao mercado!", senão "Não dá pra ir agora."

let temDinheiro = false;
let estaAberto = false;

if(temDinheiro || estaAberto){
    console.log('Vamos ao mercado!');
}else{
    console.log('Não dá para ir agora.');
}




// ==============================
// 🔁 IF, TERNÁRIO E SWITCH
// ==============================

// 11. Crie uma variável "nota" (0 a 10). 
// Se for maior ou igual a 7, mostre "Aprovado". Senão, mostre "Reprovado".

let nota = 7;

if(nota >= 7){
    console.log('Aprovado');
}else{
    console.log('Reprovado');
}

// 12. Refaça o exercício anterior usando operador ternário.

console.log(nota >= 7 ? 'Aprovado' : 'Reprovado');

// 13. Crie uma variável "dia" com um número de 1 a 7. 
// Use switch para mostrar o dia da semana correspondente. 
// (1 = Domingo, 2 = Segunda, ..., 7 = Sábado)

let dia = 213;

switch(dia){
    case 1:
        console.log('Domingo');
        break;
    case 2: 
        console.log('Segunda');
        break;
    case 3: 
        console.log('Terça');
        break;
    case 4: 
        console.log('Quarta');
        break;
    case 5: 
        console.log('Quinta');
        break;
    case 6: 
        console.log('Sexta');
        break;
    case 7: 
        console.log('Sabado');
        break;
    default:
        console.log('Valor fora de 1 a 7');
        break;
}