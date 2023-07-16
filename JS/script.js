window.sr = ScrollReveal({reset: true});

sr.reveal ('.revell', {durantion: 10000});

sr.reveal ('.revell0', 
    {rotate: {x: 100, y: 0, z: 1000},
    durantion: 2000});




sr.reveal ('.revell1', {durantion: 200000});


sr.reveal ('.revell2', {
    rotate: {x: 0, y: 80, z: 0},
    durantion: 2000});

sr.reveal ('.revell3', 
    {rotate: {x: 100, y: 0, z: 0},
    durantion: 2000});

    // Inicialize o ScrollReveal
sr.reveal('.revell4', {
    origin: 'left', // Define a direção da origem da animação
    distance: '100px', // Define a distância percorrida pela animação
    duration: 1000, // Define a duração da animação em milissegundos
    easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
  });
  