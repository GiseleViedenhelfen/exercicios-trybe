const arrays = [
  
  [true],
  ['1', '2', '3'],
  [4, 5, 6],
];

function flatten(a) {
  // escreva seu código aqui
 return a.reduce((contador, valor) => contador.concat(valor), [])
  
}
// const criarArray = arrays.reduce((acumulador, valor)=>{
//   acumulador.push(...valor)
//   return acumulador
// },[])
// console.log(flatten(arrays));
console.log(flatten(arrays));