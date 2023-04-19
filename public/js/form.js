var modalView = document.getElementById("modal_body");
const closeBtn = document.getElementById("modal_body");

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