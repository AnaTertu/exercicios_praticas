// for (inicialização; verificação; atualização;)
// lógica

//Um Array é uma variável especial, que pode conter mais de um valor por vez. [0] é o primeiro elemento em um Array. [1] é o segundo. Os índices do Array começam com 0.

var animais = ["birds", "cats", "dogs"]
//ambos tem o mesmo valor, quebras de linhas não trazem diferença

var animais2 = [
    "birds",
    "cats",
    "dogs"
]

var animais3 = new Array("birds", "cats", "dogs")
console.log(animais, animais2, animais3);
//neste formato não é recomendado.
// Os três exemplos acima fazem exatamente o mesmo. Não é necessário usar o novo Array(). Por simplicidade, legibilidade e velocidade de execução, use o primeiro (método literal do Array). 

//Uma lista de itens, para armazenar os animais em variáveis individuais, seria difícil por exemplo encontrar um específico em 300 animais listados.
var animal1 = "birds";
var animal2 = "cats";
var animal3 = "dogs";
//...
var animal300 = "chickens";

//Um Array pode armazenar muitos valores com um único nome, e pode acessar os valores consultando um número de índice. 

//Acessa o valor do primeiro elemento 
var nome = animais[0];

//modifica o primeiro elemento
animais[0] = "pássaros";
console.log(animais[0])
console.log(animais)

//0 é o primeiro indice
////var animais4 = ["birds", "cats", "dogs"];
////document.getElementById("demo").innerHTML = animais4[0];

//Acessando um Array completo.
//Com o JavaScript, é possível acessar a matriz completa consultando o nome do Array:
//// var animais5 = ["birds", "cats", "dogs"];
//// document.getElementById("demo").innerHTML = animais;

//Arrays são objetos
//Arrays são um tipo especial de objetos. O tipo de operador em JavaScript retorna "objeto" para arrays. Mas, os arrays de JavaScript são melhor descritos como arrays.
//Arrays usam números para acessar seus "elementos".
var pessoa = ["Ana", "Tertuliano", 38];
console.log(pessoa[0]);

//Os objetos usam nomes para acessar seus "membros".
var pessoa1 = {primeiroNome: "Ana", lastName:"Tertuliano", age:38}
console.log(pessoa1.lastName);

//Elementos do Array podem ser objetos
//As variáveis de JavaScript podem ser objetos. Arrays são tipos especiais de objetos. Por isso, pode ter variáveis de diferentes tipos no mesmo Array.
//pode ter objetos em um Array:
////myArray[0] = Date.now;
//pode ter funções em um Arrayy:
////myArray[1] = myFunction;
//pode ter Arrays em um Array:
////myArray[2] = myPeople;

//Proriedade e Métodos do Array

//A força real dos Arrays de JavaScript são as propriedades e métodos do Array incorporada:

// a propriedade lenght retorna o comprimento de um Array, sempre +1 em relação ao índice
//// var x = pessoa.lenght;
console.log(pessoa.length);

// o método sort classifica os arrays
//// var y = pessoa.sort();
console.log(pessoa.sort());

//Itens de um array
//A melhor maneira de percorrer um Array é usando um loop "for":

var frutas, text, flen, i;

frutas = ["Banana", "Laranja", "Maçâ", "Manga"];
flen = frutas.length;
text = "<ul>";
for(i=0; i < flen; i++) {
    text += "<li>" + frutas[i] + "</li>";
}
console.log(frutas)

//Adicionando elementos a um Array

//A maneira mais fácil de adicionar um novo elemento a um Array é usar o método push
frutas.push("Limão");
console.log(frutas);

//Novos elementos também podem ser adicionado a um array usando a propriedade length:

frutas[frutas.lenght] = "Mamão";
console.log(frutas);

frutas[7] = "Tangerina";
console.log(frutas);

//Atenção - A adição de elementos com índices altos pode criar "buracos" indefinidos em um array:

typeof frutas; //retorna objeto
//Para confirmar que é um Array
Array.isArray(frutas); // retorna true

//função abaixo sempre retorna true se o argumento for um Array. Ou mais precisamente: ele retorna verdadeiro se o protótipo do objeto contiver a palavra "Array".
function isArray(frutas){
    return frutas.constructor.toString().indexOf("Array") >-1;
}


//O instanceof do operador retorna true se um objeto for criado por um determinado construtor:
frutas instanceof Array  // retorna true


