document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields!");
  } else {
    alert("Thank you for reaching out! I’ll get back to you as soon as possible.");

    document.getElementById("contactForm").reset();
  }
});
