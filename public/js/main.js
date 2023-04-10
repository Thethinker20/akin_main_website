//loader
const loader = document.querySelector('#particles-js');
const main = document.querySelector('.main');
var modalView = document.getElementById("modal_body");
const closeBtn = document.getElementById("modal_body");

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-horizontal a').
  forEach(link => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add('active-n');
      var title_l = activePage.replace('/','');
      document.getElementById('title').innerHTML = title_l.charAt(0).toUpperCase() + title_l.slice(1);
    }
  })


if (activePage == "/home") {
  function init() {
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = 'none';

      main.style.display = 'block';
      setTimeout(() => main.style.opacity = 1, 100);
    }, 2000);
  }
  init();
} else {
  loader.style.opacity = 0;
  loader.style.display = 'none';
  main.style.display = 'block';
  main.style.opacity = 1;
}

//scroll up button
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
        "value_area": 1000
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




//send form
const form = document.getElementById("cont_form");
form.addEventListener("submit", send_mail);

async function send_mail(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comp_name = document.getElementById("comp_name").value;
  var services = document.getElementById("services").value;
  const tnumber = document.getElementById("tnumber").value;

  if (services == 1) {
    services = "Rpa Consultant"
  } else if (services == 2) {
    services = "Project Management"
  } else if (services == 3) {
    services = "Software Develop"
  }

  const result = await fetch("/send_cont_mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      comp_name,
      services,
      tnumber
    }),
  }).then((res) => res.json());
  if (result.status === "202") {
    modalView.style.display = "flex";
  } else {
    Swal.fire({
      icon: "error",
      title: result.error,
    });
  }


}

closeBtn.addEventListener("click", () => {
  modalView.style.display = "none";
});