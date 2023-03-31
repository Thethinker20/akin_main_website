$(document).ready(function(){
  });

  const loader = document.querySelector('#particles-js');
  const main = document.querySelector('.main');

  function init() {
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = 'none';
  
      main.style.display = 'block';
      setTimeout(() => main.style.opacity = 1, 100);
    }, 6000);
  }
// init();

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-horizontal a').
forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active-n');
    console.log(link);
  }
})



$(window).on('scroll', function () {
  var scrolled = $(window).scrollTop();
  if (scrolled > 300) $('.go-top').addClass('active');
  if (scrolled < 300) $('.go-top').removeClass('active');
});

$('.go-top').on('click', function () {
  $("html, body").animate({
      scrollTop: "0"
  }, 1200);
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area":1000
      }
    },
    "color": {
      "value": ["#000000", "#000000", "#000000", "#000000"]
    },
    
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "svg_logo.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 100,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});