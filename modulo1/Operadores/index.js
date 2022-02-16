    //  1. Const bool1 = true (variável verdadeira)
     //   const bool2 = false (variável falsa)
    //    const bool3 = !bool2 (variável diferente a variável bool2)

    //    let resultado = bool1 && bool2 (variável resultado será somente true se os resultados de variáveis bool1 e bool2 forem "true". No caso fica "False" porque apenas a variavel bool1 tem classificação de "true")
     //   console.log("a. ", resultado) (aparecerá no terminal a seguinte informação: a. false)

     //   resultado = bool1 && bool2 && bools3 (resultado será true se as três variáveis forem true. Neste caso específico será false porque a bool3 é false)
     //   console.log("b ", resultado) (aparecerá no terminal a informação: b. false)

     //   resultado = !resultado && (boll1 || bool2) (resultado será o oposto do resultado [false] e será comparado ao resultado true de bool1 e bool2 {de acordo com a regra || que transforme em true desde que ao menos um elemento sej true} )
     //   console.log("c. ", resultado) (aparecerá no terminal a informação: c. true)

     //   console.log("d. ", typeof resultado) (aparecerá no terminal a informação: d. boolean )

// 2.   let primeironumero = Number(prompt("digite um numero!"))
// let segundonumero = Number(prompt("digite outro numero!"))

// const soma = primeironumero + segundonumero

// console.log(soma)

//3. inserir o comando Number antes do comando prompt para que seja identificado como número.

let idadeusuario = Number(prompt("Qual a sua idade?"))
let idadeamigo = Number(prompt("Qual a idade do seu melhor amig(a)?"))

console.log("Sua idade é maior do que a do seu amigo?", idadeusuario > idadeamigo)

let numeroPar = Number(prompt("Insira um número par"))
let divisao = 2
let resultado = numeroPar / divisao
console.log(resultado)

//C) divisão exata
//d) divisão com casas decimais

let idadeusuariomeses = Number(prompt("Qual a sua idade em meses?"))
let idadeemdias = Number(prompt("Qual sua idade em dias?"))
let idadeemhoras = Number(prompt("Qual a sua idade em hhoras?"))
console.log("você tem", idadeusuariomeses,"meses ,", idadeemdias, "dias ,", idadeemhoras, "horas")

let numeroum = Number(prompt("digite um numero de 10 até 20"))
let numerodois = Number(prompt("digite um número abaixo de 10 que seja divisivel pelo primeiro número?"))


console.log(numeroum > numerodois)
console.log(numeroum < numerodois)
console.log(numeroum > numerodois)
console.log(numerodois > numeroum)

