/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   console.log("Bem vindo ao Black Jack!")

   let jogo = confirm("Quer iniciar uma nova rodada?")

  if (jogo) {
  let carta1Usuario = comprarCarta()
  let carta2Usuario = comprarCarta()
  let carta1Pc = comprarCarta()
  let carta2pc = comprarCarta()

  let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
  let pontuacaopc = carta1Pc.valor + carta2pc.valor

  console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
  console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2pc.texto} - ${pontuacaopc}`)

  if (pontuacaoUsuario > pontuacaopc) {
     console.log("O usuário ganhou!")
  } else if (pontuacaopc > pontuacaoUsuario) {
     console.log("O computador ganhou!")
  } else if (pontuacaoUsuario === pontuacaopc) {
  console.log("Empate!")
  }
  } else {
       console.log("O jogo acabou!")
    }
 
   
 