( function () {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
        var person = {
            name: 'String',
            lastname: 'String',
            age: 44
        };



        console.log( 'Propriedades de "person":' + Object.keys(person) );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
        var proprietyPerson = JSON.stringify (person);
        console.log(proprietyPerson);

    /*
    Crie um array vazio chamado `books`.
    */
        var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
        var livro1 = {
            name: 'String',
            pages: 44
        }; 
        var livro2 = {
            name: 'String',
            pages: 44
        }; 
        var livro3 = {
            name: 'String',
            pages: 44
        }; 
        
        books = [livro1,livro2,livro3];

        var bookList = JSON.stringify(books);

        console.log( '\nLista de livros:' + bookList);

    /*
    Mostre no console todos os livros.
    */
    // ?

        console.log( '\nLivro que está sendo removido:' + JSON.stringify(books.pop()) );
    /*
    Remova o último livro, e mostre-o no console.
    */
    // ?

        console.log( '\nAgora sobraram somente os livros:' + JSON.stringify(books) );
    /*
    Mostre no console os livros restantes.
    */
    // ?

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
        books = JSON.stringify(books);
        

    /*
    Mostre os livros nesse formato no console:
    */
    console.log( '\nLivros em formato string:' + books );

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    JSON.parse(books);
    console.log( '\nAgora os livros são objetos novamente:' );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for ( var propriety in books ) {
        console.log(propriety + ':' + books[propriety]);
    }
   
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    var myName = ['C','e','l','s','o',' ','A','l','b','u','q','u','e','r','q','u','e',' ','G','o','n','ç','a','l','v','e','s'];

    console.log( '\nMeu nome é:' + myName.join('') );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    

    console.log( '\nMeu nome invertido é:' + myName.reverse().join('') );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // ?

    console.log( '\nAgora em ordem alfabética:' + myName.sort());
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    // ?
} ())