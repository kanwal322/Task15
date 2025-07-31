const toggle = document.getElementById("themeToggle");
const body = document.body;


if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});


document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const successMessage = document.getElementById("success-message");
  const button = document.getElementById("subscribe-btn");
  const loader = document.getElementById("loader");
  const btnText = document.getElementById("btn-text");

  nameError.textContent = "";
  emailError.textContent = "";
  successMessage.classList.remove("visible");

  let valid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Full name is required.";
    valid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (valid) {
    button.disabled = true;
    loader.style.display = "inline-block";
    btnText.textContent = "Submitting...";

    setTimeout(() => {
      localStorage.setItem("subscriberName", name.value);
      localStorage.setItem("subscriberEmail", email.value);

      successMessage.textContent = "🎉 Thank you for subscribing!";
      successMessage.classList.add("visible");
      loader.style.display = "none";
      btnText.textContent = "Subscribed";
    }, 1500);
  }
});
