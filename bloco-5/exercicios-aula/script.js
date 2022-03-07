function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
        
      weekDaysList.appendChild(dayListItem);
    };
  };
 function criarDias(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const lista = document.querySelector('#days');
    for(let index =0;index<dezDaysList.length;index+=1){  
        const dia = dezDaysList[index]
        const cadaDia = document.createElement('li');
        cadaDia.innerHTML = dia
        lista.appendChild(cadaDia)
    }
 }
 function feriados(string){
     const feriado = document.createElement('button');
     feriado.id ="btn-holiday";
     feriado.innerText = 'botão feriado'
     const maeFeriado = document.querySelector('.buttons-container')
     maeFeriado.appendChild(feriado)
 }
 function Sexta(string){
    const sexta = document.createElement('button');
    sexta.id ="btn-friday";
    sexta.innerText = 'Sexta-feira'
    const maeFeriado = document.querySelector('.buttons-container')
    maeFeriado.appendChild(sexta)
}
function clickSexta(){
    Sexta()
  const botaoSexta = document.querySelector('#btn-friday')
    const diasMes = document.querySelector('#days').childNodes    
    botaoSexta.addEventListener('click',function(event){
        for(index=0; index<diasMes.length;index+=1){
            if(diasMes[index].innerText == 4||diasMes[index].innerText == 11||diasMes[index].innerText == 18||diasMes[index].innerText == 25){
                diasMes[index].innerText = 'sextou!'}
            else if(diasMes[index].innerText=='sextou!'){
                diasMes[index].innerText = parseInt(diasMes[index-1].innerText)+1
            }
            }
        })
}
function definirFeriado(){
    const dias = document.querySelector('#days').childNodes
    

}
definirFeriado()
function corFeriado(){
    const botaoFeriado = document.querySelector("#btn-holiday")
    const feriado = document.querySelectorAll('.holiday')
    console.log(feriado)
    let corDeFundo ='rgb(238,238,238)'
    let corNova = 'green'
    botaoFeriado.addEventListener('click', function(){ 
    botaoFeriado.addEventListener('click',function(){
        if(feriado[0].style.backgroundColor == 'rgb(238,238,238)'){
            feriado[0].style.backgroundColor = 'green'
        }
       
    })
      
    } )     
}


createDaysOfTheWeek();
criarDias()
clickSexta()
feriados()
corFeriado()


  
  
  
  // Escreva seu código abaixo.

 /* window.onload = function() {
    const dias = document.querySelector('#days').childNodes
        for(let index=0; index<dias.length;index+=1){     
        if(dias[index].innerText== 25){
            dias[index].className = 'holiday'
        }
    }
  }*/