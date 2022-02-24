/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste."

  a) Explique o que o código faz. Qual o teste que ele realiza? 
  Resposta: Verificar se o usuário digitou um número divisivel por 2 

b) Para que tipos de números ele imprime no console "Passou no teste"? 
Resposta: Números divisiveis por 2

c) Para que tipos de números a mensagem é "Não passou no teste"?
Resposta: Quando existe sobra na divisão

O código abaixo foi feito por uma pessoa desenvolvedora, 
contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a) Para que serve o código acima?
Resposta: Primeiro o usuário escolherá a fruta, após a escolha receberá uma mensagem informando, de acordo com a fruta escolhida, o seu valor.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
Resposta: "O preço da fruta Maça é R$2.25"

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
Resposta: Receberia o valor de 5 */


//const numero = Number(prompt("Digite o primeiro número."));

//if(numero > 0) {
//    console.log("Esse número passou no teste")
//    let mensagem = "Essa mensagem é secreta!!!"
//}

//console.log(mensagem)
//}
//a) O que a primeira linha está fazendo?
//Resposta: Solicitando ao usuário um número
//
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Resposta: Nenhum dos dois números apareceria nenhuma mensagem
//
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Resposta: A variavel "let mensagem" está sem utilidade, uma vez que ela não acessa nenhum valor do escopo da função. 
//Para receber a informação "Esse número passou no teste", para números acima de 0, não é necessária a variavel mensagem e o console.log em mensagem.




//******EXERCICIOS DE CÓDIGO ******/
//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se 
//ele/ela pode dirigir (apenas maiores de idade).

    
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
//imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18) {
    console.log("você pode dirigir")
}else {
    console.log("Você não pode dirigir")
}

//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino)
// ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const perguntaturno = prompt("Qual o seu turno de estudo? Digite M para matutino, V para vespertino ou N para noturno")
const turno = perguntaturno

if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
       console.log("Boa noite!")
}

const perguntaturno2 = prompt("Qual o seu turno de estudo? Digite M para matutino, V para vespertino ou N para noturno")
const turno2 = perguntaturno2

switch (turno2) {
    case "M":
        console.log("Bom dia!")
        break 
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
}

//Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele 
//for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de 
//filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar 
//assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima 
//"Escolha outro filme :("

const generofilme = prompt("Qual o genero do filme?")
const precofilme = Number(prompt("Qual o valor do ingresso?"))

if (generofilme == "fantasia" && precofilme <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme ;(")
}

/********* DESAFIO********/

/* Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no 
console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] 
pelo que o usuário colocou no input.*/

Const generofilme = prompt("Qual o genero do filme?")
const precofilme = Number(prompt("Qual o valor do ingresso?"))

if (generofilme == "fantasia" && precofilme <= 15) {
    const lanche = prompt("Escolha o seu lanche")
      console.log("Bom filme!")
      console.log(`Aproveite o seu ${lanche}`)
} else {
    console.log("Escolha outro filme")
}



