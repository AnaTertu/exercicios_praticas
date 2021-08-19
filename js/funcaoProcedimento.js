// Função - retorna um valor
// e Procedimento - lista de comandos, executados quando a função for chamada.
// function(argumentos){bloco de códigos}
//funcaoProcedimento
function atravessar(){
    console.log("vermelho - Pare")
    console.log("amarelo - Atenção")
    console.log("verde - Avance")
    console.log("")
}
atravessar()
// a função permite repetir os comandos/cloco de código sem precisar repetir, apenas chamando a função e seus atributos se houver, quantas vezes for necessário
atravessar()
// se houver necessidade de alterar, basta fazer em apenas um lugar

function imprimir(i){
    console.log(i)
    console.log("")
}

imprimir(8)

function multiplicar(num1, num2){
    imprimir(num1 * num2)
}

multiplicar(2,8)
// As funções acima são procedimentos, em JS tudo função, em outras linguagens procedimentos são separados das funções.


//Abaixo vamos retornar 

function imprimir(j){
    console.log(j)
    console.log("")
}

imprimir(6)

function multiplicar1(num1, num2){
    return num1*num2
}

var resultado = multiplicar1(2,6)
// resultado recebe o retorno de multiplicar

imprimir(resultado)

// em JS a função retorna ou não


imprimir("Ana")

//Verifica se os dois nomes informados são iguais.
function mesmoNome(primeiroNome, segundoNome) {
    return primeiroNome == segundoNome
}
var verifica = mesmoNome("Carlos", "Mario") 

imprimir(verifica)


/* Verificação de maioridade.
 */
function maiorIdade(idade) {
    return idade >= 18
}
var verifica = maiorIdade(20)

imprimir(verifica)


/* Realiza o cálculo do valor do boleto com juros.
 Atualmente, a taxa de juros é de 10%. */
function valorComJuros(valorBoleto) {
    return valorBoleto * 1.1
}
console.log(valorComJuros(10)) //11
console.log("")
imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

/* Cálculo da média aritmética de todos os itens presentes
 no array passado como argumento. */
function mediaAritmetica(itens) {
    soma = 0

    // somar todos os itens do array
    for (index = 0; index < itens.length; index++) {
        soma += itens[index]
    }

    // dividir o somatório pela quantidade de elementos
    return soma / itens.length
}

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3
console.log("")


/* Cálculo da margem bruta da empresa com base na 
 receita líquida de vendas e no custo dos produtos vendidos.
 O resultado final é multiplicado por 100 para considerar o valor percentual. */
function margemBruta(receitaLiquidaVendas, custoProdutosVendidos) {
    lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
    return (lucroBruto / receitaLiquidaVendas) * 100
}

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]

function caculaIMC(massa, altura){
    let imc = massa/(altura **2)
    return imc
}

function verificaNivel(imc){
    let nivel = 0

    if(imc<17){
        nivel = 0
    } else if(imc < 18.5){
        nivel = 1
    } else if(imc < 25){
        nivel = 2
    } else if(imc < 30){
        nivel = 3
    } else if(imc < 35){
        nivel = 4
    } else if(imc < 40){
        nivel = 5
    } else {
        nivel = 6
    }

    return nivel
}

let nivel = verificaNivel //passar uma função como argumento da outra - 