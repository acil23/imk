function performLogin() {
    var username = document.getElementById('username').value;

    // Simpan informasi login di local storage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);

    // Redirect ke halaman utama setelah login
    window.location.href = 'Dashboard.html';
}