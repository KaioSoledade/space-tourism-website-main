window.sr = ScrollReveal({reset: true});

sr.reveal('.revell4', {
    origin: 'left', // Define a direção da origem da animação
    distance: '100px', // Define a distância percorrida pela animação
    duration: 1000, // Define a duração da animação em milissegundos
    easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
  });


  sr.reveal('.revell1', {
    origin: 'left', // Define a direção da origem da animação
    distance: '100px', // Define a distância percorrida pela animação
    duration: 1000, // Define a duração da animação em milissegundos
    easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
  });
  sr.reveal('.revell2', {
    origin: 'left', // Define a direção da origem da animação
    distance: '100px', // Define a distância percorrida pela animação
    duration: 1500, // Define a duração da animação em milissegundos
    easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
  });
  sr.reveal('.revell3', {
    origin: 'left', // Define a direção da origem da animação
    distance: '100px', // Define a distância percorrida pela animação
    duration: 2000, // Define a duração da animação em milissegundos
    easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
  });



const buttons = document.getElementsByClassName('circulo');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // Remover a classe 'active' de todos os botões
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
    }

    // Adicionar a classe 'active' apenas ao botão atual
    this.classList.add('active');
  });
}


var Event1 = document.getElementById('Lauch');
var Event2 = document.getElementById('Spaceport');
var Event3 = document.getElementById('Space');


var Button1 = document.getElementById('circ1')
Button1.addEventListener("click", submit1);
function submit1() {
    Event1.classList.add('Lauch-on');
    Event1.classList.remove('Lauch-off');
    Event2.classList.add('Spaceport-off');
    Event3.classList.add('Space-off');
}

var Button2 = document.getElementById('circ2')
Button2.addEventListener("click", submit2);
function submit2() {
    Event2.classList.add('Spaceport-on');
    Event2.classList.remove('Spaceport-off');
    Event1.classList.add('Lauch-off');
    Event3.classList.add('Space-off');
}

var Button3 = document.getElementById('circ3')
Button3.addEventListener("click", submit3);
function submit3() {
    Event3.classList.add('Space-on');
    Event3.classList.remove('Space-off');
    Event2.classList.add('Spaceport-off');
    Event1.classList.add('Lauch-off');
}
  