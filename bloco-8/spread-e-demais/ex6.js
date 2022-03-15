const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
// escreva toObject abaixo
const toObject = (nome, marca, ano) => ({
  //os parâmetros devem ter os mesmos nomes das 'keys' para que os
  //valores dos parâmetros sejam atribuidos como 'value'
  nome,
  marca,
  ano,
})
// usei o spread pra transformar o array em string
console.log(toObject(...palio))
