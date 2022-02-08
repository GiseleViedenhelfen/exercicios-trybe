function descobrirIndiceDoMaiorvalor(valor){
    let indiceMaiorValor=0
    for(let index=0; index <= valor.length;index+=1){
        if(index == 0){
            indiceMaiorValor = index
        }
        else{
            if(valor[index] > valor[indiceMaiorValor]){
                indiceMaiorValor = index
            }
        }    
    }
    console.log(indiceMaiorValor)
}
valor = [2, 3, 6, 7, 10, 1]
descobrirIndiceDoMaiorvalor(valor)