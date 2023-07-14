window.sr = ScrollReveal({reset: true});

sr.reveal('.revell4', {
    origin: 'left', // Define a direção da origem da animação
    distance: '100px', // Define a distância percorrida pela animação
    duration: 1000, // Define a duração da animação em milissegundos
    easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
  });
  sr.reveal('.revell3', {
    origin: 'left', // Define a direção da origem da animação
    distance: '100px', // Define a distância percorrida pela animação
    duration: 2000, // Define a duração da animação em milissegundos
    easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
  });



var Person1 = document.getElementById('Douglas');
var Person2 = document.getElementById('Anousheh');
var Person3 = document.getElementById('Victor');
var Person4 = document.getElementById('Mark');


var Button1 = document.querySelectorAll('.DoB')
Button1.addEventListener("click", submit1);
function submit1() {
    Person1.classList.add('Douglas-on');
    Person1.classList.remove('Douglas-off');
    Person2.classList.add('Anousheh-off');
    Person3.classList.add('Victor-off');
    Person4.classList.add('Mark-off');
}

var Button2 = document.querySelectorAll('.AnB')
Button2.addEventListener("click", submit2);
function submit2() {
    Person2.classList.add('Anousheh-on');
    Person2.classList.remove('Anousheh-off');
    Person1.classList.add('Douglas-off');
    Person3.classList.add('Victor-off');
    Person4.classList.add('Mark-off');
}

var Button3 = document.querySelectorAll('.ViB')
Button3.addEventListener("click", submit3);
function submit3() {
    Person3.classList.add('Victor-on');
    Person3.classList.remove('Victor-off');
    Person2.classList.add('Anousheh-off');
    Person1.classList.add('Douglas-off');
    Person4.classList.add('Mark-off');
}

var Button4 = document.querySelectorAll('.MaB')
Button4.addEventListener("click", submit4);
function submit4() {
    Person4.classList.add('Mark-on');
    Person4.classList.remove('Mark-off');
    Person2.classList.add('Anousheh-off');
    Person3.classList.add('Victor-off');
    Person1.classList.add('Douglas-off');
}