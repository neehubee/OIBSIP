function register() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    showMessage("Please fill both fields.");
    return;
  }

  if (localStorage.getItem(user)) {
    showMessage("Username already exists.");
    return;
  }

  localStorage.setItem(user, pass);
  showMessage("Registered successfully. Now log in.", "green");
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const storedPass = localStorage.getItem(user);
  if (storedPass && storedPass === pass) {
    localStorage.setItem("loggedInUser", user);
    window.location.href = "dashboard.html";
  } else {
    showMessage("Invalid credentials.");
  }
}

function showMessage(msg, color = "red") {
  const msgElem = document.getElementById("message");
  msgElem.textContent = msg;
  msgElem.style.color = color;
}

