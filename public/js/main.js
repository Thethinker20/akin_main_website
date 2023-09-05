//loader
const loader = document.querySelector("#particles-js");
const main = document.querySelector(".main");

var activePage = window.location.pathname;
console.log(activePage);

if (activePage == "/home") {
  function init() {
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = "none";

      main.style.display = "block";
      setTimeout(() => (main.style.opacity = 1), 100);
    }, 3500);
  }
  init();
} else if (activePage == "/rpa") {
  var title_l = activePage.replace("/", "");
  document.getElementById("title").innerHTML =
    title_l.charAt(0).toUpperCase() + title_l.slice(1);
  loader.style.opacity = 0;
  loader.style.display = "none";
  main.style.display = "block";
  main.style.opacity = 1;
  particlesJS("rpa_part", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: ["#000000", "#000000", "#000000", "#000000"],
      },

      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "svg_logo.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.6,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 100,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#000000",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: false,
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
} else if (
  activePage == "/courses" ||
  activePage == "/services" ||
  activePage == "/soft_dev" ||
  activePage == "/business" ||
  activePage == "/contactus"||
  activePage == "/aboutus"
) {
  loader.style.opacity = 0;
  loader.style.display = "none";
  main.style.display = "block";
  main.style.opacity = 1;
}

if (activePage != "/contact_form") {
   // element selector
   const navButton = document.querySelector(".nav-button");
   const menuContainer = document.querySelector(".nav-link");
   const menuLinks = document.querySelectorAll(".menu-link");
 
   // variable to toggle menuContainer
   let showMenu = false;
 
   // keep svg icon inside variables
   const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
   const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
 
   // add menuIcon by deafult
   navButton.innerHTML = menuIcon;
 
   // functions
   const toggleShowMenu = () => {
     showMenu = !showMenu;
 
     if (showMenu) {
       navButton.innerHTML = closeIcon;
       menuContainer.classList.add("show");
     } else {
       navButton.innerHTML = menuIcon;
       menuContainer.classList.remove("show");
     }
   };
 
   // event listener
   navButton.addEventListener("click", toggleShowMenu);
 
   menuLinks.forEach((menuLink) =>
     menuLink.addEventListener("click", toggleShowMenu)
   );
}

const navLinks = document
  .querySelectorAll(".nav-horizontal li .nav_i")
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active-n");
      var title_l = activePage.replace("/", "");
      document.getElementById("title").innerHTML =
        title_l.charAt(0).toUpperCase() + title_l.slice(1);
    }
  });

//scroll up button
$(window).on("scroll", function () {
  var scrolled = $(window).scrollTop();
  if (scrolled > 300) $(".go-top").addClass("active");
  if (scrolled < 300) $(".go-top").removeClass("active");
});

$(".go-top").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: "0",
    },
    1200
  );
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ["#000000", "#000000", "#000000", "#000000"],
    },

    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "svg_logo.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 100,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#000000",
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

$("#submit_cont").on("click", function () {
  window.location.href = "/contact_form";
});

const modal_v = document.getElementById("modal_video");

$("#deliver_play_button").on("click", function () {
  modal_v.style.opacity = 1;

  modal_v.style.display = "flex";

  this.classList.toggle("active");
});

$("#modal_video").on("click", function () {
  modal_v.style.opacity = 0;
  modal_v.style.display = "none";
  document.getElementById("deliver_play_button").classList.toggle("active");
});