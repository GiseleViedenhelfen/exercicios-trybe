function descobrirNumeroQueMaisRepete(numeros){
   let contador= 0;
   let contadorAtual =0;
   let numeroMaisRepete;
    for(let n=0; n < numeros.length; n++){
     for(let v=0; v<numeros.length; v++){
         if(numeros[n]== numeros[v]){ 
            contadorAtual +=1
             console.log(`numero repetiu`)
           }
         }
         if(contadorAtual > contador){
            contador = contadorAtual
            numeroMaisRepete = numeros[n]
        }
        contadorAtual = 0
       
     }
     return numeroMaisRepete    
}
let arrayDeNumeros =[2, 3, 2, 5, 8, 2, 3];
descobrirNumeroQueMaisRepete(arrayDeNumeros);
console.log(descobrirNumeroQueMaisRepete(arrayDeNumeros))