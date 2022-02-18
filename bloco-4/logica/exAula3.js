/* Crie um algoritmo que simula o jogo "pedra, papel e tesoura" 
levando em consideração que são apenas duas pessoas 
jogando e imprima o resultado no formato:
"Player 1 won" ou "A Ties" ou "Player 2 won". 
*/
let player1 ='tesoura';
let player2 ='papel';
//tesoura ganha de papel
//papel ganha de pedra
// pedra ganha de tesoura
if(player1 == 'tesoura' && player2 =='papel' || player1== 'papel' && player2=='pedra' || player1 =='pedra' && player2 =='tesoura'){
    console.log('player 1 won')
}
else if(player2 == 'tesoura' && player1 =='papel' || player2== 'papel' && player1=='pedra' || player2 =='pedra' && player1 =='tesoura'){
    console.log('player 2 won')
}
else{
    console.log('A Ties')
}