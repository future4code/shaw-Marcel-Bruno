/* 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
    
    let array
    console.log('a. ', array) *Nada, porque não há valor na variável.
    
    array = null
    console.log('b. ', array) * b. null
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length) * c. 11
    
    let i = 0
    console.log('d. ', array[i])  * d. 0, i
    
    array[i+1] = 19
    console.log('e. ', array) * e. 19
    
    const valor = array[i+6]
    console.log**('f. ', valor)** f. array[i+6]
    ```

    2. Leia o código abaixo com atenção 
    
    const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    
    Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
    SUBI NUM ÔNIBUS EM MIRROCOS 23 */

    //1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
   // O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

     let nome = prompt("Qual o seu nome?")
     let email = prompt("Qual o seu e-mail?")

      console.log("O e-mail", email, " foi cadastrado com sucesso. Seja bem-vinda(o) ,", nome,)

   /*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    a) Imprima no console o array completo
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista */

     let comidasFavoritas = ["Pizza", "Macarrão", "Peixe", "Croissant", "Doces"]
      console.log(comidasFavoritas)

      console.log("Essas são minhas comidas preferidas:", comidasFavoritas,)

       let comidaFavoritaUsuario = prompt("Qual sua comida favorita?")

      comidasFavoritas.splice(2, 1)
      comidasFavoritas.push(comidaFavoritaUsuario)

    console.log("Nova lista: ", comidasFavoritas,)

   /* 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console*/

    let listaDeTarefas = []
    let tarefa1 = prompt("Qual sua primeira tarefa do dia?")
    let tarefa2 = prompt("Qual sua segunda tarefa do dia?")
    let tarefa3 = prompt("Qual sua terceira tarefa do dia?")

    listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

    console.log(listaDeTarefas)

    let tarefaRealizada = prompt("digite o indice da uma tarefa que você já realizou (0, 1 ou 2)")

    listaDeTarefas.splice(tarefaRealizada, 1)

    console.log(listaDeTarefas)
