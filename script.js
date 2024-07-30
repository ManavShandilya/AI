document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownContent = document.querySelector(".dropdown-content");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
  });
  let count = 0;
  dropdownToggle.addEventListener("click", (event) => {
    count++;
    event.preventDefault(); // Prevent default anchor click behavior
    // dropdownContent.classList.toggle("show");
    if (count % 2 != 0) {
      dropdownContent.classList.add("show");
    } else {
      dropdownContent.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openModal = (modalId) => {
    document.getElementById(modalId).style.display = "flex";
  };

  const closeModal = (modalId) => {
    document.getElementById(modalId).style.display = "none";
  };

  window.openModal = openModal;
  window.closeModal = closeModal;
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const clients = Array.from(container.children);
  console.log(clients);
  const totalClients = clients.length;

  // Duplicate clients to create a continuous scrolling effect
  clients.forEach((client) => {
    container.appendChild(client.cloneNode(true));
  });

  function setScrollSpeed() {
    const containerWidth = container.scrollWidth / 2;
    const scrollDuration = containerWidth / 200; // Adjust the speed by changing the divisor

    container.style.animationDuration = `${scrollDuration}s`;
  }

  setScrollSpeed();

  window.addEventListener("resize", setScrollSpeed);
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
      from_name: document.getElementById("name").value,
      from_mobile: document.getElementById("mobile").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_0k092ve", "template_eja213b", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Message failed to send.");
      }
    );
  });
