/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

/* a) O que vai ser impresso no console?
//Nada, porque ele não está "puxando" nenhuma informação da variável usuários

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

//O que vai ser impresso no console?
Resposta: [Amanda Rangel, Laís Petra, Letícia Chico]

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

O que vai ser impresso no console?
Resposta: [Mandi, Laura] */

//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo 
//utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


 //Crie um novo array que contenha apenas o nome dos dogs

let nomedogs = []

 for (let i = 0; i < pets.length; i++){
  nomedogs.push(pets[i].nome)
 }

 //Crie um novo array apenas com os cachorros salsicha

 let racaSalsicha = pets.filter((pet)=>{
     return pet.raca === "Salsicha"
 }
 )

 //Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
 //A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"*/


 let mensagemDeDesconto = pets.filter((pet)=>{
 return pet.raca === "Poodle"
 }).map((pet)=>{ return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})



const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

    let nomeProdutos = []
        
    
        
    for (let i = 0; i < produtos.length; i++) {
        nomeProdutos.push(produtos[i].nome)
    }

   // Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

    
//   let produtosComDesconto = []


   for (let i = 0; i < produtos.length; i++) {
       produtosComDesconto.push(produtos[i].nome, produtos[i].preco * 0.95)
       }
        console.log(produtosComDesconto)

//Crie um novo array que contenha apenas os objetos da categoria Bebidas

//const bebidas = produtos.filter((item, index, array) => {
//   return  
//})
