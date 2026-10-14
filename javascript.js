//comentario de uma linha

/*comentaio de multiplas linhas*/

// 3 formas de declarar uma variavel

// var e let se distiguem pelo escopo de declaracao

/*let nome="romulo";
var sobrenome;
const e = 2.78;

if(nome == "romulo"){
    sobrenome = "beninca"

    let idade=20;
    var pet = "dog";
    console.log("nome: "+nome+" sobrenome: "+sobrenome+" idade: "+idade+" pet: "+pet);
}

let idade=20;

//console.log("nome"+nome+" sobrenome:"+sobrenome+" idade"+idade+" pet:"+pet);

//estrutura de selecao do js

if(idade == "20"){
console.log("A");
}

if(idade === "20"){
console.log("B");
}

const peso=65;
const altura=1.70;
const imc=peso/(altura*altura);
//classificação do imc

if(imc<18.5){
    console.log("abaixo do peso")
} else if( imc>="18.5" && imc<=15){
console.log("peso normal")
}else if(imc >=25 && imc<30){
    console.log("acima do peso")
}else if(imc >=30 && imc<35){
    console.log("obesidade grau 1")
}else if(imc >=35 && imc<40){
    console.log("obesidade 2")
}else if(imc >=40 && imc<50){
    console.log("besidade grau 30")
}

//switch case estrutura da seleção

a=2;

switch(a){
    case 1: console.log("A"); break;
    case 2: console.log("B"); break;
    case 3: console.log("C"); break;
    default: console.log("D")
}

switch(a){
    case a**a==4: console.log("A"); break;
    case a==2: console.log("B"); break;
    case 3==3: console.log("C"); break;
    default: console.log("D");
}

//estrutura de repetiçao
let i=0;
while(i<5){
    console.log(i);
    i++;
}

for(let i = 0; i<5; i++){
    console.log(i);
}

//arrays

let carnesDoChurras = ["picanha","costela","cupim","fraldinha"];

carnesDoChurras.forEach((v1,index) => {
    console.log(v1 + " index:" + index)
});
*/

//definir variaveis

var b; //global

b=2.0;

let a;

a="2";

//if else ; for ; switch
//String , number, null, undefided

/*
console.log("O tipo da variavel B:"+typeof(b));

console.log("O tipo da variavel A:"+typeof(a));
*/

/*
if(a===b){
    console.log("O valor dessas variaveis é igual");
}

if(!(a===b)){
    console.log("O valor dessas variaveis é diferente");
}
*/

/*var itensChurrasco =[];

itensChurrasco.push("costela");
itensChurrasco.push("pão de alho");
itensChurrasco.push("linguiça");

itensChurrasco.forEach((e,i) => {
    console.log(i+"-"+e);
});
*/

nome = "João gabriel Henrique Marcelo Avosani Boss Meleu";
console.log(nome.split(" ").reverse().join());

itensChurrasco.map((e) =>{
    console.log(e.lenght);
})

//filter
console.log(itensChurrasco.filter( (e, i)=>{return i!=3}));
console.log(itensChurrasco.filter( (e, i)=>{
    return !e.split("").includes("p");
}))