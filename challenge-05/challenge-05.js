/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
var array = [1,2,3,4,5 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
retorno = function (array) {
    return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// 
retorno (array)[1];
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// 
funcao2p = function (x,y) {
return x[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayDiferente = [true, 1.2, 'ontem' , NaN, Infinity];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 
> funcao2p(arrayDiferente,0);
true
> funcao2p(arrayDiferente, 1)
1.2
> funcao2p(arrayDiferente, 2)
'ontem'
> funcao2p(arrayDiferente, 3)
NaN
> funcao2p(arrayDiferente, 4)
Infinity
>

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book (NomeDoLivro) {
    var allBooks ={
        "As Cronicas de Nárnia" : {
            QtPaginas :'650',
            Autor : 'C. S. Lews',
            Editora : 'Rocco'
        },
        "Eu ROBO" : {
            QtPaginas :'320',
            Autor : 'Will Smith',
            Editora : 'Future Farm'
        },
        "12 Rules for Life":{
            QtPaginas :'455',
            Autor : 'Jordan Peterson',
            Editora : 'Triangle'
        } //Final do bloco de Livros________________________________________________________________
        }
        return !NomeDoLivro ? allBooks : allBooks[NomeDoLivro]; 
            // Nome do livro recebido ? Se sim vem, se não vem todos.
}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book()
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro 12 Rules for Life tem "+ book('12 Rules for Life').QtPaginas + " páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
 "O autor do livro 12 Rules for Life é "+  book("12 Rules for Life").Autor;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro 12 Rules for Life foi publicado pela editora '+ book('12 Rules for Life').Editora;
