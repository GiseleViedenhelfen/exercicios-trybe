const {sum, myRemove, myFizzBuzz}= require('./testes')
describe('teste função sum', ()=>{
  test('soma de 4 e 5 é 9', ()=>{
  expect(sum(4,5)).toBe(9)
  })
  it('a soma de 0 e 0 é 0', ()=>{
    expect(sum(0,0)).toBe(0)
  })
  it('testa string', ()=>{
    expect(()=> sum('5', 4)).toThrow('parameters must be numbers')
  })
})
describe('testa função myRemove', ()=>{
  test('testa a função tem o retorno esperado', ()=>{
    expect(myRemove([1,2,3,4],3)).toMatchObject([1,2,4])
  })
  it('verifica se a função não retorna o array igual ao anterior', ()=>{
    expect(myRemove([1,2,3,4],3)).not.toMatchObject([1,2,3,4])
  })
  it('testa a função tem o retorno esperado', ()=>{
    expect(myRemove([1,2,3,4],5)).toMatchObject([1,2,3,4])
  })
})
describe('testa função myFizzBuzz', ()=>{
  test('verifica retorno esperado de 15 e 30', ()=>{
    expect(myFizzBuzz(15,30)).toMatch('fizzbuzz')
  })
  it('verifica retorno esperado de 9', ()=>{
    expect(myFizzBuzz(9)).toMatch('fizz')
  })
  it('verifica retorno esperado de 10', ()=>{
    expect(myFizzBuzz(10)).toMatch('buzz')
  })
})