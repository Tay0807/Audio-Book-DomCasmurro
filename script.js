const bntControle = document.getElementById('controle-play');
const bntVoltar = document.getElementById('bnt-voltar');
const bntAvancar = document.getElementById('bnt-avancar');
const CapituloP = document.getElementById('p-capitulo');
const audioCapitulo = document.getElementById('faixa-audio');

var TocandoFaixa = 0;
var CapituloAtual = 1;
const numeroCapitulos = 10;

function PausarFaixa(){
    TocandoFaixa = 0
    audioCapitulo.pause();
    bntControle.classList.remove('bi-pause-circle-fill')
    bntControle.classList.add('bi-play-circle-fill')
}

function TocarFaixa(){
    TocandoFaixa = 1
    audioCapitulo.play();
    bntControle.classList.remove('bi-play-circle-fill')
    bntControle.classList.add('bi-pause-circle-fill')
}

function TocarPausar(){
    if(TocandoFaixa == 0){
        TocarFaixa()
    }else{
        PausarFaixa()
    } 
}


function Voltar(){
    if(CapituloAtual == 1){
        CapituloP.innerHTML = `Capítulo ${CapituloAtual}`
    }else{
        CapituloAtual = CapituloAtual - 1;
        CapituloP.innerHTML = `Capítulo ${CapituloAtual}`
    }
    
    audioCapitulo.src = `./books/dom-casmurro/${CapituloAtual}.mp3`
    TocarFaixa()
}

function Avancar(){
    if(CapituloAtual == 10){ 
        CapituloP.innerHTML = `Capítulo ${CapituloAtual}`
    }else{
        CapituloAtual = CapituloAtual + 1;
        CapituloP.innerHTML = `Capítulo ${CapituloAtual}`
    }

    audioCapitulo.src = `./books/dom-casmurro/${CapituloAtual}.mp3`
    TocarFaixa()
}


bntControle.addEventListener('click', TocarPausar); 

bntVoltar.addEventListener('click', Voltar);

bntAvancar.addEventListener('click', Avancar);