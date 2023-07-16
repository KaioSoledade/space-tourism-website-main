window.sr = ScrollReveal({reset: true});

const sr = ScrollReveal();

sr.reveal('.revell1', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
  easing: 'ease-in-out',
});

sr.reveal('.revell2', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
  easing: 'ease-in-out',
  delay: 1000, // Adicione um atraso de 1000 milissegundos (1 segundo)
});

sr.reveal('.revell3', {
  origin: 'right',
  distance: '100px',
  duration: 1000,
  easing: 'ease-in-out',
  delay: 2000, // Adicione um atraso de 2000 milissegundos (2 segundos)
});




const buttons = document.getElementsByClassName('circulo');

// Adicionar a classe 'active' ao primeiro botão
buttons[0].classList.add('active');

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
  