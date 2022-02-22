/*const filme = {
    nome: "Auto da Compadecida"
    ano: 2000
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
    ],
    transmissaohoje: [
        {canal: "telecine", horario: "21h"},
        {canal: "canal Brasil", horario: "19h"},
        {canal: "Globo", horario: "14h"}
    ]
}

console.log(filme.elenco[0]),
console.log(filme.elenco[filme.elenco.length - 1]),
console.log(filme.transmissaohoje[2])

//a) o que vai ser impresso no console?
//Resp. 
//Matheus Nachtergaele
//Denise Fraga
//Canal Brasil 19h*/

/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)

// o que vai ser impresso no console?
// Juca, 3, srd
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Adiciona um nono objeto dentro do objeto cachorro que vai substituir os itens solicitados e repetir os não citados*/


/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?
//false ---- Undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// no primeiro caso a função está chamando  a propriedade backender dentro do objeto pessoa. Já no segundo caso está chamando a propriedade altura, que não está presente dentro do objeto pessoa.*/

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** //

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
//(um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e 
//imprime uma mensagem no modelo abaixo**:**

// Exemplo de entrada
/*const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 // Exemplo de saída
 "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"*/

const exercicio1a = {
    Nome: "João",
    Apelidos: ["Joca", "Joãozinho", "Jão"],


}

function frasemodelo(exercicio1a) {
console.log(`Eu sou ${exercicio1a.Nome}, mas pode me chamar de: ${exercicio1a.Apelidos[0]}, ${exercicio1a.Apelidos[1]} ou ${exercicio1a.Apelidos[2]}.`)

}

frasemodelo(exercicio1a)

//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
//mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior 
//passando como argumento o novo objeto



const exercicio1b = {
    ...exercicio1a,
    Apelidos: ["JP", "Juno", "Jonny"],

}

frasemodelo(exercicio1b)

//2 a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const exercicio2parte1 = {
    Nome: "Marcelo",
    Idade: 53,
    Profissao: "Administrador",
}

const exercicio2parte2 = {
    Nome: "Carla",
    Idade: 41,
    Profissao: "Dentista",

}



function valor (exercicio2parte1) {
    const array = [exercicio2parte1.Nome, exercicio2parte1.Nome.length, exercicio2parte1.Idade, exercicio2parte1.Profissao, exercicio2parte1.Profissao.length]
    return array
}


console.log(valor(exercicio2parte1))
console.log(valor(exercicio2parte2))

/*3. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) 
    e disponibilidade (`boolean` - devem começar como `true`)
    
    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. 
    Invoque essa função passando os três objetos criados. 

    d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** */

    const carrinho = []

    const objeto1 = {
        nome1: "Tomate",
        disponibilidade: true
    }
    const objeto2 = {
        nome2: "Cenoura", 
        disponibilidade: true
    }
    const objeto3 = {
        nome3: "abacate", 
        disponibilidade: true
    }

    function inserecarrinho(objeto) {
        const entracarrinho = carrinho.push(objeto)
        return entracarrinho
    }

    inserecarrinho(objeto1)
    inserecarrinho(objeto2)
    inserecarrinho(objeto3)

    console.log(carrinho)

    function dadosusuario =(){
     const nome = prompt("Qual seu nome?"),
     const idade = prompt("Qual a sua idade?"),
     const profissao = prompt("Qual a sua profissão?"),
     console.log()
    } 




        
        
