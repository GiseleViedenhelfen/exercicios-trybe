function descobrirMenorValor(valor){
    let indiceMenorValor=0
    for(index=0; index <= valor.length; index+=1){
        if(index ===0){
            indiceMenorValor = index
        }
        else{
            if(valor[index]< valor[indiceMenorValor])
            indiceMenorValor = index
        }
    }
    console.log(indiceMenorValor)
}
let arrayTeste =[2, 4, 6, 7, 10, 0, -3]
descobrirMenorValor(arrayTeste)