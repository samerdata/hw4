
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (name.value.trim() === "") {
      nameError.textContent = "Name is required.";
      valid = false;
    }
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailError.textContent = "Invalid email address.";
      valid = false;
    }
    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters long.";
      valid = false;
    }

    if (!valid) e.preventDefault();
  });
}


const showMoreBtn = document.getElementById("showMoreBtn");
const additionalProjects = document.getElementById("additionalProjects");

if (showMoreBtn && additionalProjects) {
  showMoreBtn.addEventListener("click", function () {
    const article = document.createElement("article");
    article.innerHTML = `
      <h2>SKP App</h2>
      <time datetime="2025-01-10">January 2025</time>
      <p>abstract and closed area service for pick up , delivery food + including  machine learning model to enhance your food evaluation stars.</p>
      <figure>
        <img src="images/SKP.png" alt="SKP App Preview" width="600">
        <figcaption>SKP App Screenshot</figcaption>
      </figure>
      <p>
        <a href="https://github.com/samerdata/SKP" target="_blank">View Code</a>
      </p>
    `;
    additionalProjects.appendChild(article);
    showMoreBtn.disabled = true;
  });
}


const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

if (toggleSkillsBtn && skillsSection) {
  toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  });
}


const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "Good morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon!";
  } else {
    greeting.textContent = "Good evening!";
  }
}
