var p1 = document.getElementById("company_info");
var p2 = document.getElementById("service_info");
var p3 = document.getElementById("end_info");

var firstname;
var lastname;
var email;
var comp_name;
var tnumber;

var services;
var n_goals;
var l_expert;
var timeline;
var meet_p;
var client_id;

$("#nextb_1").on("click", function () {
  firstname = document.getElementById("firstname").value;
  lastname = document.getElementById("lastname").value;
  email = document.getElementById("email").value;
  tnumber = document.getElementById("tnumber").value;
  if (
    firstname == "" ||
    firstname == null ||
    lastname == "" ||
    lastname == null ||
    email == "" ||
    email == null ||
    tnumber == "" ||
    tnumber == null
  ) {
    if (firstname == "") {
      $("#firstname").addClass("is_invalid");
    }
    if (lastname == "") {
      $("#lastname").addClass("is_invalid");
    }
    if (email == "") {
      $("#email").addClass("is_invalid");
    }
    if (tnumber == "") {
      $("#tnumber").addClass("is_invalid");
    }
  } else {
    p1.style.display = "none";
    p2.style.display = "flex";
  }
});
$("#backb_2").on("click", function () {
  p1.style.display = "flex";
  p2.style.display = "none";
});

$("#nextb_2").on("click", function () {
  comp_name = document.getElementById("comp_name").value;
  services = document.getElementById("services").value;
  n_goals = document.getElementById("n_goals").value;
  l_expert= document.getElementById("l_expert").value;
  timeline = document.getElementById("timeline").value;
  meet_p = document.getElementById("meet_p").value;
  if (
    comp_name == "" ||
    comp_name == null ||
    services == "" ||
    services == null ||
    n_goals == "" ||
    n_goals == null ||
    l_expert == "" ||
    l_expert == null ||
    timeline == "" ||
    timeline == null||
    meet_p == "" ||
    meet_p == null
  ) {
    if (comp_name == "") {
      $("#comp_name").addClass("is_invalid");
    }
    if (services == "") {
      $("#services").addClass("is_invalid");
    }
    if (n_goals == "") {
      $("#n_goals").addClass("is_invalid");
    }
    if (l_expert == "") {
      $("#l_expert").addClass("is_invalid");
    }
    if (timeline == "") {
      $("#timeline").addClass("is_invalid");
    }
    if (meet_p == "") {
      $("#timeline").addClass("is_invalid");
    }
  } else {
    p2.style.display = "none";
    p3.style.display = "flex";
  }
});
$("#backb_3").on("click", function () {
  p2.style.display = "flex";
  p3.style.display = "none";
});

function generate_clientId(){
  var year = new Date().getFullYear();
  var month = new Date().getMonth();
  var random_number = Math.floor((Math.random() * 100) + 4);
  client_id = year + "A0"+month+random_number+"RBS";
}

//send form
const form = document.getElementById("cont_form");
form.addEventListener("submit", send_mail);

async function send_mail(event) {
  event.preventDefault();
  const factors = document.getElementById("factors").value;
  var message = document.getElementById("message").value;
  generate_clientId();
  var created_date = new Date();
  if (factors == "" || factors == null) {
    if (factors == "") {
      $("#factors").addClass("is_invalid");
    }
  } else {
    const result = await fetch("/send_cont_mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        comp_name,
        tnumber,
        services,
        n_goals,
        l_expert,
        timeline,
        factors,
        meet_p,
        message,
        client_id,
        created_date
      }),
    }).then((res) => res.json());
    if (result.status === "202") {
        Swal.fire({
            title: "Succesful",
            html: "Your Request has been send succesful<br>Please check your email",
            icon: "success",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonColor: '#F06E30'
        }).then((result) => {
            window.open('hhttps://mail.google.com/mail/', '_blank');
        })
    } else {
      Swal.fire({
        icon: "error",
        title: result.error,
      });
    }
  }
}

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
            "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
        },

        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#FFFFFF"
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
            "value": 0.8,
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
            "color": "#FFFFFF",
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