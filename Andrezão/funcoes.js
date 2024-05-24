const mat = document.getElementById("mat");

mat.addEventListener("click", mostrarcalculadora);

function mostrarcalculadora (){
carregarPagina("calculadora/calculadora.html")
}

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}

const dom = document.getElementById("dom");

dom.addEventListener("click", mostrardom);

function mostrardom(){
    carregarPagina("dom/dom.html")
}

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}

const inss = document.getElementById("inss");

inss.addEventListener("click", mostrarinss);

function mostrarinss(){
    carregarPagina("inss/inss.html")
}

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}