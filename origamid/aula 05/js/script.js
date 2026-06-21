//objeto
// let pessoa = {
//   nome: "André",
//   idade: 24,
//   profissão: "segurança",
//   possuiFaculdade: false,
// }

// pessoa.nome;
// pessoa.possuiFaculdade;
// let pessoa = {
// nome: prompt("qual o seu nome?"),
// idade: Number(prompt("sua idade")),
// sexo: prompt("feminino ou masculino?"),
// }
// console.log(pessoa.nome)
// localStorage.setItem("usuarioSalvo", JSON.stringify(pessoa));
// alert("Dados guardados no navegador!");
// var dadosRecuperados = JSON.parse(localStorage.getItem("usuarioSalvo"));
// console.log("Dados que estavam salvos:", dadosRecuperados);
// console.log("Nome recuperado:", dadosRecuperados.nome);

//metodos
// let quadrado = {
//   lados: 4,
//   area: function(lado){
//   return lado * lado},
//   perimetro: function(lado){
//     return this.lado * lado;
//   },
// }

// let quadrado = {
//   lados: 4,
//   area(lado){
//   return lado * lado},
//   perimetro(lado){
//     return this.lado * lado;
//   },
// }
// quadrado.lados;
// quadrado.area(5);
// quadrado.perimetro(5);
// console.count(quadrado)

// console.log(Math.random().toFixed(1));
//

//-------------------------------------------------

// Crie um objeto com os seus dados pessoais
// let eu = {
//   nome: "Ana beatriz",
//   idade: 24,
// estuda: "sim",
//   filho: 1,
//   casada: "sim",
//   marido: "André",
// };
// let pergunta = prompt(`oq vc quer saber sobre mim?`);
// switch (pergunta) {
//   case "nome":
//     alert(eu.nome);
//     break;
//   case "idade":
//     alert(eu.idade);
//     break;
//   case "filho":
//     alert(eu.filho);
//     break;
//   case "estuda":
//     alert(eu.estuda);
//     break;
//   case "casada":
//     alert(eu.casada);
//     break;
//   case "marido":
//     alert(eu.marido);
//   default:
//     alert("invalido");
// }
// Deve possui pelo menos duas propriedades nome e sobrenome
// let eu = {
//   nome: prompt("nome"),
// sobreNome: prompt("sobre nome"),
// }
// alert(`${eu.nome} ${eu.sobreNome}`);

// Crie um método no objeto anterior, que mostre o seu nome completo
// let eu = {
//   nome: "ana",
// }
// eu.sobreNominho = "beatriz";

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
// let cachorro = {
//   raca: "labrador",
//   nome: "tortinho",
//   adotado: false,
//   cor: "#000",
//   correr: "cachorro vai te pegar",
// };

// let homem = prompt("Viu um homem?");

// // Se viu o homem, o cachorro late E inicia a ação de afastar
// if (homem === "sim") {
//   alert("Cachorro latindo! 🐕 Pânico!");

//   // A pergunta de afastar SÓ acontece se o cachorro latiu
//   let afastar = prompt("Como afastar o cachorro? (opções: correr, chamar pelo nome)");

//   switch (afastar) {
//     case "correr":
//       alert(cachorro.correr);
//       break;

//     case "chamar pelo nome":
//       alert("O " + cachorro.nome + " ficou de boa!");
//       break;

//     default:
//       alert("Essa ação não funcionou, o Tortinho continua latindo!");
//       break;
//   }

// } else {
//   // Se responder qualquer coisa diferente de "sim", o código cai direto aqui e acaba
//   alert("Cachorro não viu homem. Ele continua deitado e tranquilo. 💤");
// }

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa){
if(pessoa === "homem"){
  return "latir"
}else{
  return "nada";
}
  }
}