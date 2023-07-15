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



  const buttons = document.getElementsByClassName('btn');

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
  