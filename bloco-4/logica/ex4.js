/*4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
Sabendo disso, escreva um algoritmo 
que retorne o maior número primo entre 0 e 50.*/
let maiorNumeroPrimo=0;



for(let i=0; i<=50;i+=1){
    let primo=true
        for (let j=2; j < i; j++){
            if(i%j===0){ 
                primo=false
            }
        }
    if (primo)   {
        maiorNumeroPrimo = i
    } 
    }
console.log(maiorNumeroPrimo)