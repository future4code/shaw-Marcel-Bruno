const idade = prompt("Qual a sua idade?") 
const nome = prompt("Qual o seu nome?")
console.log( typeof nome, typeof idade)
// D) O erro foi justamente a falta de valores em nome e idade, o que inviabilizou o comando de reconhecer a informação.
// F) Inserido o comando prompt, os dois valores solicitados foram inseridos e o typeof recebeu a classificação string pois, apesar de idade ser um número, foi reconhecido como texto porque foi inserido entre ""

console.log("Olá", nome, "Voce tem", idade, "anos")

const Exercicios = prompt("Pratica exercícios?")
const Dieta = prompt("Faz dieta?")
const Medicação = prompt("Faz uso de remédio?")

console.log("Pratica Exercícios?", Exercicios, "Faz dieta?", Dieta, "Faz uso de medicação?", Medicação)

let a = 10
let b = 25
let c = a

console.log("O novo valor de a é", b)
console.log("O novo valor de b é", c)

