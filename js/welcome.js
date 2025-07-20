document.getElementById("welcome").addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = document.getElementById("username").value.trim();

  const password = document.getElementById("password").value;

  const errorEl = document.getElementById("error");

  if (!userName || !password) {
    errorEl.textContent = "All fields are required.";

    return;
  }

  if (password.length <= 8) {
    errorEl.textContent = "Passwords is less than 8.";

    return;
  }
  window.location.href = "welcome.html";
});
