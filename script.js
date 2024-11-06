// Altera o texto do paragrafo inicial
function alterartexto() {
    document.getElementById("text").innertext = "ao clicar, eu mudei!!";
}

// adicionar um novo paragrafo ao final do corpo 
function adicionarparagrafo() {
    const novoparagrafo = documento.createElement("p");
    novoparagrafo.innertext = "depois que voce clicou ,eu apareci!!";
    documento.body.appendChild(novoparagrafo);
}

//remover o ultimo paracrafo, se houver mais de um
function removerparagrafo() {
   const paragrafos = document.querySelectorAll("p");
   if (paragrafos.length > 1) {
    paragrafos[paragrafos.length - 1].remove();
   }
}

//mudar a cor do texto do pagina  para uma cor aleatoria
function mudarcorfundo() {
    const corAleatoria = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = corAleatoria; 
}

// mudar a cor do texto paragrafo inicial para uma vor aleatoria
function mudarcortexto(){
    const cores = ["#wff5733","#33ff57","#ff33a6", "#ffc133"];
    document.getElementById("text").style.color = cores[Math.floor(Math.random() * cores.length)];
}