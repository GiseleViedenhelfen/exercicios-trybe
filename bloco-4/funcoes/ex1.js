function verificaPalindromo(palavra){
  let Palindromo= ''
  for(let index = palavra.length -1;index>=0; index-=1){
        Palindromo += palavra[index]
  }
  if(Palindromo === palavra){
      Palindromo= true
  }
  else{
      Palindromo = false
  }
  return console.log(Palindromo)
}

verificaPalindromo('ama')

