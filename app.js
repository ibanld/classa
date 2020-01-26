new fullpage('#landing', {
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'left',

  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelectorAll('h1');

    const tl = new TimelineMax({ delay: 0.3 });
    tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });

    if (destination.index == 1) {
      const coches = document.querySelectorAll('.coche');
      const description = document.querySelector('.description');
      const par = section.querySelector('#p1');
      const par2 = section.querySelector('#p2');
      const list1 = section.querySelector('#lista1');
      const list2 = section.querySelector('#lista2');
      const list3 = section.querySelector('#lista3');

      tl.fromTo(par, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(par2, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(list1, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(list2, 0.7, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(list3, 0.9, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(coches, 0.7, { x: '-108%' }, { x: '-4%' })
        .fromTo(coches[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(coches[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(coches[2], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(coches[3], 1, { opacity: 0 }, { opacity: 1 });
    }
  }
});

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.getElementById('header').classList.add('darkmode');
    document.getElementById('sc1').classList.add('s1dark');
    document.getElementById('map').classList.add('darkmode');
    document.getElementById('sc2').classList.add('sc2dark');
  } else {
    document.getElementById('header').classList.remove('darkmode');
    document.getElementById('sc1').classList.remove('s1dark');
    document.getElementById('map').classList.remove('darkmode');
    document.getElementById('sc2').classList.remove('sc2dark');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
