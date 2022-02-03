/*Escreva dois algoritmos: 
um que retorne a maior palavra deste array e outro que retorne a menor. 
Considere o número de caracteres de cada palavra.*/
let lista = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra= lista[0];
let menorPalavra =lista[0];
for(let index=0; index < lista.length; index+=1){
  if(maiorPalavra.length<lista[index].length){
    maiorPalavra=lista[index]
  }
  else if(menorPalavra.length>lista[index].length)
    menorPalavra=lista[index]
}
console.log(maiorPalavra);
console.log(menorPalavra)