let a = 2
let b = 3


const soma = a + b
const subtracao = a - b
const multiplicacao = a * b
const modulo = a%b
console.log(`A soma de ${a} e ${b} é ${soma}`)
console.log(`A subtração dos valores ${a} e ${b} é ${subtracao}`)
console.log(`A multiplicação entre os valores ${a} e ${b} resulta em ${multiplicacao}`)
console.log(`o modulo de ${a} e ${b} é ${modulo}`)

if (a > b){
    console.log(`variável "a" é maior`)
}
else if(b > a){
    console.log(`variável "b" é maior`)
}
const primeiroNumero = 15
const segundoNumero = 10
const terceiroNumero = 8
if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero){
    console.log(`${primeiroNumero} é o maior número`);
}
else if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero){
    console.log(`${segundoNumero} é o maior número`);
}
else if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero){
    console.log(`${terceiroNumero} é o maior número`)
}
if (a > 0){
    console.log("Positive");
}
else if(a<=0){
    console.log("negative");
}
const angTri1 = 90
const angTri2 = 45
const angTr3 = 45
let triangulo;
if(angTri1<0 || angTri2<0 || angTr3<0){
    console.log(`ERRO, ângulos precisam de números positivos!`)
}
else if(angTri1 + angTri2 + angTr3 === 180){
    triangulo = true
    console.log(triangulo)
}
else if(angTri1 + angTri2 + angTr3 !==180 && angTr3>=0 || angTri1>=0 || angTri2>=0){
    triangulo = false
    console.log(triangulo)
}
const pecaDeXadrez = "BISPO";
switch(pecaDeXadrez){
    case "rei".toUpperCase():
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break
    case "bispo".toUpperCase():
        console.log('Bispo-> Diagonal.')
        break
        case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo'.toUpperCase():
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre'.toUpperCase():
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão'.toUpperCase():
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}
const nota = 80;

if(nota>=90){
    console.log("A");
}    
 
 if(nota >= 80 && nota < 90){
    console.log("B");
}

 if (nota >=70 && nota < 80){
     console.log("C");
}

if (nota >= 60 && nota < 70){
    console.log("D");
}

if (nota >=50 && nota < 60){
    console.log("E");
}

if (nota <50){
    console.log("F");
}
if(nota <0 || nota >100){
    console.log("erro, nota impossível!")
}

const numA = 5
const numB = 32
const numC = 1
let par =false
let impar = false
if (numA%2 ===0 || numB%2===0 || numC%2 ===0){
    par = true
    console.log(par)
}
if (numA%2 !==0 || numB%2!==0 || numC%2 !==0){
    impar =true
    console.log(impar)

}
let custoProduto = 200;
let valorVenda = 300;
let imposto = custoProduto *0.2
const custoTotal= custoProduto + imposto
const lucro = valorVenda - custoTotal
lucroVendaMil = lucro*1000
console.log(`Ao vender 1000 unidades terá lucro de ${lucroVendaMil} reais`)

const salarioBruto = 3000;
let aliquotaINSS;
let aliquotaIR;
let salarioMenosINSS;
let salarioLiquido;
if(salarioBruto<=1556.94){
    aliquotaINSS = salarioBruto*0.08;
}
else if(salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto*0.09;
}
else if(salarioBruto <= 5189.82){
   aliquotaINSS = salarioBruto*0.11;
}
else if(salarioBruto > 5189.82){
    aliquotaINSS = 570.88;
}


salarioMenosINSS = salarioBruto -aliquotaINSS
console.log(salarioMenosINSS)

if(salarioMenosINSS <= 1903.98){
    aliquotaIR = 0;
}
else if (salarioMenosINSS<=2826.65){
    aliquotaIR = (salarioMenosINSS *0.075)-142.80;

}
else if(salarioMenosINSS <= 3751.05){
    aliquotaIR = (salarioMenosINSS*0.15) -354.80
}
else if(salarioMenosINSS <= 4664.68){
    aliquotaIR = (salarioMenosINSS * 0.225)-636.13;
}
else if(salarioMenosINSS >= 4664.68){
    aliquotaIR =(salarioMenosINSS * 0.275)- 869.36;
}
salarioLiquido = salarioMenosINSS -aliquotaIR
console.log( salarioLiquido)