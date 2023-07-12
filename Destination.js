window.sr = ScrollReveal({reset: true});

sr.reveal('.revell4', {
    origin: 'left', // Define a direção da origem da animação
    distance: '100px', // Define a distância percorrida pela animação
    duration: 1000, // Define a duração da animação em milissegundos
    easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
  });


  

var CardPlanet1 = document.getElementById('Mars');
CardPlanet1.addEventListener("click", submit);
function submit() {
    CardPlanet1.classList.add('margin-direita');
    CardPlanet1.classList.add('margin-esquerda');
}