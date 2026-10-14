// no navegador o j tem window

console.log(window.screen)

window.document.body.innerHTML="<p> Olá <p>"
window.document.body.style.backgroundColor="gray"
let div=document.createElement("div");
let pnome=document.createElement("p");
pnome.innerHTML="Informe seu nome"
div.appendChild(pnome);

document.body.appendChild(div);
div.appendChild(document.createElement("input"))


