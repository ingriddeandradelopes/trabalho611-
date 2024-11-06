// Altera o texto do paragrafo inicial
function alterartexto() {
    document.getElementById("text").innertext = "ao clicar, eu mudei!!";
}

// adicionar um novo paragrafo ao final do corpo 
function adicionarparacrafo() {
    const novoparacrafo = documento.createelement("p");
    novoparacrafo.innertext = "depois que voce clicou ,eu apareci!!";
    documento.body.appendchild(novoparacrafo);
}

//remover o ultimo paracrafo, se houver mais de um
function removerparacrafo() {
   const paragrafos = document.querySelectorAll("p");
   if (paragrafos.length > 1) {
    paragrafos[paragrafos.length - 1].remover();
   }
}

//mudar a cor do texto do pagina  para uma cor aleatoria
function mudarcorfundo() {
    const coraleatoria = `#${math.floor(math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = coraleatoria; 
}

// mudar a cor do texto paragrafo inicial para uma vor aleatoria
function mudarcortexto(){
    const cores = ["#wff5733","#33ff57","#ff33a6", "#ffc133"];
    document.getElementById("text").style.color = cores[math.floor(math.random() * cores.length)];
}