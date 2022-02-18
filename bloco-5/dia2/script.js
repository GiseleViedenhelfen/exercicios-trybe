//pegar o elemento pai
let acharBody = document.getElementsByTagName('body');
// criar a tag que será do elemento 
let criarH1 = document.createElement('h1');
// custumizar
criarH1.innerHTML = "Exercício 5.2 - JavaScript DOM "
// colocar no html
acharBody.appendChild(criarH1)