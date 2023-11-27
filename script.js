// Contoh variabel untuk menyimpan status login dan nama pengguna
var isLoggedIn = false;
var username = "";

function checkLoginStatus() {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  var username = localStorage.getItem("username");
  var loginStatusElement = document.getElementById("loginStatus");
  var sekali = document.getElementById("sekali");
  var seminggu = document.getElementById("seminggu");

  if (isLoggedIn === "true" && username) {
    loginStatusElement.innerHTML =
      '<div id="loggedInUsername">' +
      username +
      "</div>" +
      '<a href="#" id="logoutButton" onclick="confirmLogout()">Logout</a>';
    sekali.href = "https://forms.gle/jTxR8P6tokPVXoKB7";
    seminggu.href = "https://forms.gle/fvj7jRJ7qrCZMbXz5";
  } else {
    loginStatusElement.innerHTML =
      '<a href="login.html" id="loginButton">Login</a>' +
      '<a href="signup.html" id="loginButton">Sign Up</a>';
    sekali.href = "login.html";
    seminggu.href = "login.html";
  }
}


function showLoginForm() {
  // Contoh sederhana tampilkan formulir login (Anda harus mengganti ini dengan formulir yang sesuai dengan aplikasi Anda)
  var loginForm = prompt("Enter your username:");
  if (loginForm !== null) {
    // Simpan informasi login
    isLoggedIn = true;
    username = loginForm;
    updateLoginStatus();
  }
}

function confirmLogout() {
  // Tampilkan pop-up konfirmasi
  var isConfirmed = window.confirm("Are you sure you want to logout?");
  if (isConfirmed) {
    performLogout();
  }
}

function performLogout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "Dashboard.html";
}

window.onload = checkLoginStatus;
