document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = document.getElementById("username").value.trim();
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;
  const errorEl = document.getElementById("error");

  if (
    !userName ||
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    errorEl.textContent = "All fields are required.";

    return;
  }

  if (password !== confirmPassword) {
    errorEl.textContent = "Passwords do not match.";

    return;
  }

  if (password.length <= 8) {
    errorEl.textContent = "Passwords is less than 8.";

    return;
  }
  window.location.href = "welcome.html";
});
