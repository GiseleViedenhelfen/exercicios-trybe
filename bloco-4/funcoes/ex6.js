function somaNumeros(numero){
    soma =0
    for(i=1;i <= numero; i+=1){
        if(i==0){
            soma = i
        }
        else{
            soma +=i           
        }
    }
    return(soma) 
}
somaNumeros(5);
console.log(somaNumeros(5))