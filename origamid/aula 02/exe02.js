{
  var total1 = 20 + 5 * 2; //30 //Lembrando que soma + em Strings serve para concatenar
  var total2 = (20 + 5) * 2; //50
  var total3 = (20 / 2) * 3; //50
  var total4 = 10 + (10 * 20) / 2; //40
}

var total1 = 10 + 5 + 10;
var divisao = 100 / 5;
var modulo = 3872983892 % 8;
console.log(modulo);

var conta = 10 + (5 * 2) / 2 + 20;
console.log(conta); //35
//crie duas expressões que retornem NaN
var numero1 = "200";
var numero2 = 50;
console.log(+numero1 + numero2); //o sinal de + na frente transforma a string em numero

//incremente o numero 5 e retorne o seu valor incrementado
var valor1 = 5;
console.log(++valor1);

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("falso");
} //O && so é verdadeiro se tudo for verdadeiro, se tiver apenas 1 falso, dará falso, é o mesmo que eu vi na faculdade, a porta logica E AND, 1 * 0 = 0, sinal de multiplicação.

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

// O || precisa que apenas 1 seja verdadeiro para ser verdadeiro, equivale ao + OR, 1 + 0 = 1, sinal de soma, 1 or 0 = 1, 1 || 0 = 1
var condicional2 = 5 - 5 || 5 + 5 && 10 - 2;
console.log(condicional2);

var corFavorita = "azul";
switch (corFavorita){
  case "azul":
  console.log("olhe para o céu");
  break;
  case "amarelo":
    console.log("olhe para o sol")
    break;
    default: 
    console.log("feche os olhos")
}