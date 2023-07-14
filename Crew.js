window.sr = ScrollReveal({reset: true});

sr.reveal('.revell4', {
    origin: 'left', // Define a direção da origem da animação
    distance: '100px', // Define a distância percorrida pela animação
    duration: 1000, // Define a duração da animação em milissegundos
    easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
  });



var CardPlanet1 = document.getElementById('Moon');
var CardPlanet2 = document.getElementById('Mars');
var CardPlanet3 = document.getElementById('Europa');
var CardPlanet4 = document.getElementById('Titan');


var Button1 = document.getElementById('MoB')
Button1.addEventListener("click", submit1);
function submit1() {
    CardPlanet1.classList.add('Moon-on');
    CardPlanet1.classList.remove('Moon-off');
    CardPlanet2.classList.add('Mars-off');
    CardPlanet3.classList.add('Europa-off');
    CardPlanet4.classList.add('Titan-off');
}

var Button2 = document.getElementById('MaB')
Button2.addEventListener("click", submit2);
function submit2() {
    CardPlanet2.classList.add('Mars-on');
    CardPlanet2.classList.remove('Mars-off');
    CardPlanet1.classList.add('Moon-off');
    CardPlanet3.classList.add('Europa-off');
    CardPlanet4.classList.add('Titan-off');
}

var Button3 = document.getElementById('EuB')
Button3.addEventListener("click", submit3);
function submit3() {
    CardPlanet3.classList.add('Europa-on');
    CardPlanet3.classList.remove('Europa-off');
    CardPlanet2.classList.add('Mars-off');
    CardPlanet1.classList.add('Moon-off');
    CardPlanet4.classList.add('Titan-off');
}

var Button4 = document.getElementById('TiB')
Button4.addEventListener("click", submit4);
function submit4() {
    CardPlanet4.classList.add('Titan-on');
    CardPlanet4.classList.remove('Titan-off');
    CardPlanet2.classList.add('Mars-off');
    CardPlanet3.classList.add('Europa-off');
    CardPlanet1.classList.add('Moon-off');
}