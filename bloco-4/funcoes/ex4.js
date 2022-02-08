function maiorNome(nome){
    let maiorNome =''
    for(let index in nome){
        if(maiorNome.length < nome[index].length)
        maiorNome =nome[index]
    }
    console.log(maiorNome)
}
let listaDeNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
maiorNome(listaDeNomes)