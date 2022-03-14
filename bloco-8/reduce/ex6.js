const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(pessoa, nota) {
  // escreva seu código aqui
const notaAluno = pessoa.map((valor, index) => {
  const obj = {
    name: valor,
    average: nota[index].reduce((contador, valor)=>contador += valor)/nota[index].length
  }
  return obj
})
return notaAluno
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
console.log(studentAverage(students, grades));