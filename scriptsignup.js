
  function submitForm() {
    // Mendapatkan nilai dari formulir
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var licenseNumber = document.getElementById("licenseNumber").value;

    // Simulasi sign-up berhasil atau gagal
    var signupSuccess = Math.random() < 0.8; // 80% peluang berhasil

    if (signupSuccess) {
      saveToTextFile(username, email, address, password, licenseNumber);
      showModal("Sign up successful!");
    } else {
      showModal("Sign up failed. Please try again.");
    }
  }

  function saveToTextFile(username, email, address, password, licenseNumber) {
    // Simpan data ke dalam string
    var userData = `Username: ${username}\nEmail: ${email}\nAddress: ${address}\nPassword: ${password}\nLicense Number: ${licenseNumber}\n\n`;

    // Simpan data ke dalam file teks (simulasi)
    var blob = new Blob([userData], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "userdata.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function showModal(message) {
    document.getElementById("modal-text").innerHTML = message;
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Tutup modal jika pengguna mengklik di luar modal
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
