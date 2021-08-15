num=-3
console.log(num)
num=-2
console.log(num)
num=-1
console.log(num)
num=0
console.log(num)
console.log("")
// imagine repetir 1000x

num = 1

while(num <= 5){ // sem uma condição gera um loop 'infinito', até que ocupe todo espaço da memória
    console.log(num) // 1 à 5
    num = num + 1
    //console.log(num) // 2 à 6    
}
console.log("")

num = 10

while(num <= 15){ 
    console.log(num) // 10 à 15
    num++
    //console.log(num) // 11 à 16
}
console.log("")

num = 20

while(num <= 25){
    console.log(num++) // 20 à 25 - a soma ocorrerá após o primeiro numero ser impresso na tela 
}
console.log("")

num = 30

while(num <= 35){
    console.log(++num) // 31 à 36 - a soma ocorre antes de ser impresso na tela
}
console.log("")

num = 40

// (do) - sempre vai executar de qualquer forma, diferente do (while) que só executa se a condição for atendida.
do{
    console.log(num++)
}while(num <=45)
console.log("")


num = 50
// 50 não será impresso pois não atende a condição
while(num <=10){
    console.log(num++)
}
console.log("")

num = 55
// 55 será impresso, pois somente depois o (do) verifica a condição.
do{
    console.log(num++)
}while(num <=10)
console.log("")

//FOR REPETE DE UM PONTO ATÉ OUTRO PONTO
// for(inicialização-declara variável e sua condição inicial; verificação-qual a condição a ser satisfeita; atualização-como esse número vai variar;){
// lógica
//}
for(num = 60; num<=65; num++){
    console.log(num)
} // 60 à 65
console.log("")

// várias formas de resolver o mesmo problema.

alunos = ["Ana", "Arthur", "Victor", "Igor"]

notas = [[8.8,6.5,5.9,9.2],[9.8,10,8.8,9],[8,9,7.8,9],[5,4,8,7]]

alunoSelecionado = 1

nomeAluno = alunos[alunoSelecionado]
notasAluno = notas[alunoSelecionado]

nota1 = notasAluno[0]
nota2 = notasAluno[1]
nota3 = notasAluno[2]
nota4 = notasAluno[3]

media = (nota1+nota2+nota3+nota4)/4

console.log(nomeAluno)
console.log(" Primeira nota ", nota1)
console.log(" Segunda nota ", nota2)
console.log(" Terceira nota ", nota3)
console.log(" Quarta nota ", nota4)
console.log(nomeAluno, " teve a média ", media)
console.log("")

alunos = ["Ana", "Arthur", "Victor", "Igor"]

notas = [[8.8,6.5,5.9,9.2],[9.8,10,8.8,9],[8.8,9,7.8,9],[5,4,8,7]]

alunoSelecionado = 2

nomeAluno = alunos[alunoSelecionado]
notasAluno = notas[alunoSelecionado]

nota1 = notasAluno[0]
nota2 = notasAluno[1]
nota3 = notasAluno[2]
nota4 = notasAluno[3]

media = (nota1+nota2+nota3+nota4)/4

console.log(nomeAluno)
console.log(" Primeira nota ", nota1)
console.log(" Segunda nota ", nota2)
console.log(" Terceira nota ", nota3)
console.log(" Quarta nota ", nota4)
console.log(nomeAluno, " teve a média ", media)
console.log("")


//com estrutura de repetição

//  FOR

alunos1 = ["Ana", "Arthur", "Victor", "Igor", "Teresinha", "Virgilius"]

notas1 = [[8.8,6.4,5.9,9],[9.8,10,8.8,9],[8,9,7,9],[5,4,8,7],[10,10,9,9], [10,9,10,9]]

for(numAluno=0; numAluno < alunos1.length; numAluno++){// 0 para pegar o primeiro elemento, alunos1.length-tamanhoDoArray- e não será <= pois será acrescido de mais 1

alunoSelecionado = numAluno

nome_Aluno = alunos1[alunoSelecionado]
notas_Aluno = notas1[alunoSelecionado]

nota1 = notas_Aluno[0]
nota2 = notas_Aluno[1]
nota3 = notas_Aluno[2]
nota4 = notas_Aluno[3]

media = (nota1+nota2+nota3+nota4)/4

console.log(nome_Aluno)
console.log(" Primeira nota ", nota1)
console.log(" Segunda nota ", nota2)
console.log(" Terceira nota ", nota3)
console.log(" Quarta nota ", nota4)
console.log(nome_Aluno, " teve a média ", media)
console.log("")
}


//  WHILE

alunos2 = ["Carlos", "Amanda", "Maria", "Inácio", "Tais", "Vitória"]

notas2 = [[8.8,6.4,5.9,9],[9.8,10,8.8,9],[8,9,7,9],[5,4,8,7],[10,10,9,9], [10,9,10,9]]

numAluno=0;


while(numAluno < alunos2.length){

alunoSelecionado = numAluno

nome_Aluno = alunos2[alunoSelecionado]
notas_Aluno = notas2[alunoSelecionado]

nota1 = notas_Aluno[0]
nota2 = notas_Aluno[1]
nota3 = notas_Aluno[2]
nota4 = notas_Aluno[3]

media = (nota1+nota2+nota3+nota4)/4

console.log(nome_Aluno)
console.log(" Primeira nota ", nota1)
console.log(" Segunda nota ", nota2)
console.log(" Terceira nota ", nota3)
console.log(" Quarta nota ", nota4)
console.log(nome_Aluno, " teve a média ", media)
console.log("")
; numAluno++
}


// DO WHILE

alunos3 = ["Dennis", "Simão", "Patricia", "Daniela", "Meire", "Souza"]

notas3 = [[8.8,6.4,5.9,9],[9.8,10,8.8,9],[8,9,7,9],[5,4,8,7],[10,10,9,9], [10,9,10,9]]

numAluno=0;

do { 
    alunoSelecionado = numAluno

    nome_Aluno = alunos3[alunoSelecionado]
    notas_Aluno = notas3[alunoSelecionado]

    nota1 = notas_Aluno[0]
    nota2 = notas_Aluno[1]
    nota3 = notas_Aluno[2]
    nota4 = notas_Aluno[3]

    media = (nota1+nota2+nota3+nota4)/4
    console.log(nome_Aluno)
    console.log(" Primeira nota ", nota1)
    console.log(" Segunda nota ", nota2)
    console.log(" Terceira nota ", nota3)
    console.log(" Quarta nota ", nota4)
    console.log(nome_Aluno, " teve a média ", media)
    console.log("") 

    numAluno++

}while(numAluno < alunos3.length)



