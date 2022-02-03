let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1.Nesse primeiro exercício, percorra o array imprimindo
//todos os valores nele contidos com a função console.log() ;
for (let index =0; index< numbers.length; index+=1){
  console.log(numbers[index]);
}
//2.some todos os valores contidos no array e imprima o resultado;
let totalSoma 
for(let index= 0; index<numbers.length;index+=1){   
    if(index ==0){
        totalSoma=numbers[0]
    }
    else if (index>0){
        totalSoma +=numbers[index];
    }
}
console.log(totalSoma)
//calcule e imprima a média aritmética dos valores contidos no array;
let mediaAritmetica = totalSoma/numbers.length
console.log(mediaAritmetica)
//Com o mesmo código do exercício anterior, 
//caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
//Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (mediaAritmetica>20){
    console.log('valor maior que 20');
}
else{
    console.log('valor menor ou igual a 20')
}
//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero;
for(index=0; index<numbers.length; index+=1){
    if(index ==0){
        maiorNumero=numbers[index];
    }
    else{
        if (numbers[index]> maiorNumero){
            maiorNumero = numbers[index]
        }
    }
}
console.log(`${maiorNumero} é o maior número do array`)
//6.Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let contadorPar=0
for(let index=0; index<numbers.length;index+=1){
    if(numbers[index]%2==0){
        contadorPar+=1
    }
}
console.log(`Existem ${contadorPar} números pares nesse array`)
//7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumero;
for(let index=0; index<numbers.length;index+=1){
    if(index==0){
        menorNumero = numbers[0]
    }
    else{
        if(numbers[index]<menorNumero){
            menorNumero = numbers[index]
        }
    }
}
console.log(`O menor número do array é ${menorNumero}`)
//8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let a =[]
for(let index=1;index<=25;index+=1){
    a.push(index);   
}
console.log(a)
//Utilizando o array criado no exercício anterior imprima o resultado da divisão 
//de cada um dos elementos por 2 .
let divisaoPorDois;
for(let index=0; index< a.length;index+=1){
   divisaoPorDois = a[index]/2
   console.log(divisaoPorDois)
}