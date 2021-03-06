/*
Crie um array com 5 items (tipos variados).
*/
// ?
array = [1,2,3,4,5];
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?
function additem (x) {
    array.push(x);
    return array;
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
additem ([true, 'cavalo',NaN]);
[ 1, 2, 3, 4, 5, 6, 6, 7, [ true, 'cavalo', NaN ] ]
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
return "O segundo elemento do segundo array é"+array[8][2]+".";

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log("O primeiro array tem "+array.lenght+" itens.");
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log ("o segundo array tem "+ array[8].lenght +" itens. ")
 
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?
var num = 10;
while ( num <= 20) {
    console.log (num);
    num = num+2;

}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só v8888888888amos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?