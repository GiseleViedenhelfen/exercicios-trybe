const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  return array.reduce((contador, valor) => 
  contador + valor.split('').reduce((contador, valor) => {
    if(valor.toLowerCase() ==='a') contador += 1
    return contador;
  },0),0)
}

console.log(containsA(names));
