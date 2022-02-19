// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alt = Number(prompt("altura"))
  const largura = Number(prompt("largura"))
  const resultado = alt * largura
  console.log(resultado)
  
}
 


// EXERCÍCIO 02

function imprimeIdade() {
const anoatual = Number(prompt("Qual o ano atual"))
const nascimentov = Number(prompt("Qual o ano do seu nascimento?"))
const resultado = anoatual - nascimentov
console.log(resultado)
}




// EXERCÍCIO 03
function calculaIMC() {
  let peso = Number(prompt("peso"))
  let altura = Number(prompt("altura"))
  let resultado = peso / (altura * altura)
  return resultado

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 const nome = prompt("nome")
  const idade = prompt("idade")
  const email = prompt("e-mail")
  console.log("Meu nome é ", nome, " tenho", idade, " e o meu e-mail é o ", email,)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const cor1 = prompt("corfavorita1")
const cor2 = prompt("cor favorita2")
const cor3 = prompt("cor favorita3")
const coresfavoritas = [cor1, cor2, cor3]
console.log(coresfavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let maiuscula = string.toUpperCase()
  return maiuscula

}



// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
let vendasminimas = custo / valorIngresso
return vendasminimas

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
let boleanos = string1 >= string2
return boleanos

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
let primeiroelemento = array.[0]
return primeiroelemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let ultimoelemento = array.includes()
  return ultimoelemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let. arraystrocados = 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}