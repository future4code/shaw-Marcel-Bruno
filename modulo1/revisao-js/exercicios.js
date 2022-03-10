// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
 return array.length

}



// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03


function retornaArrayOrdenado(array) {
 function funcaoDeComparacao (a,b){
     return a-b
 }
 return array.sort(funcaoDeComparacao)
} 




// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0)
        numerosPares.push(array[i])
    }
return numerosPares

} 

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
    
    const pares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0)
        pares.push(array[i])
    }
    
    return 
}



// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 
for (let i = 0; i < array.length; i++) {
   if ( array[i] > maior ) {
      maior = array[i];
   

return maior  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA === 1, ladoB === 2, ladoC === 4,) {
return "Escaleno", }
else if (ladoA === 1, ladoB === 2, ladoC === 1,) {
retorn "Isosceles", }
else if (ladoA === 5, ladoB === 5, ladoC === 5,) {
    return "Equilatero",
}
} 


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}