/*1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
crie um algoritmo que retorne o fatorial de 10.*/
let num = 5;
let fatorial;
for(index=num; index>=1;index-=1){
        if(index==num){
                fatorial=index
        }
        else{
                fatorial = fatorial*index
        }
}
console.log(`O fatorial de ${num} é ${fatorial}`)
