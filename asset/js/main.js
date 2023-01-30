function tekanDaftar() {
	var username = document.getElementById("username-daftar").value;
	var password = document.getElementById("password-daftar").value;
	var email = document.getElementById("email-daftar").value;
	var emailDot = email.indexOf(".");
	var emailAt = email.indexOf("@");

	if (username.length < 2) {
		return alert("username minimal 3 karakter")
	}

	if (email.length < 1) {
		return alert("email harus di isi!")
	}

	if (emailAt < 0) {
		return alert("email tidak benar")
	}

	if (emailDot < 0) {
		return alert("email masih tidak benar")
	}

	if (password.length < 7) {
		return alert("password minimal 8 karakter")
	}

	alert("Selamat anda berhasil Daftar Menjadi Member Toko Game Sanjaya");
	window.location.href = "index.html"
}


function tekanMasuk() {
	var username = document.getElementById("username-masuk").value;
	var password = document.getElementById("password-masuk").value;

	if (username != "admin" || password != "123") {
		return alert("maaf username atau password masih salah")
	}

	alert("Selamat anda berhasil Login");
	window.location.href = "index.html"
}

function tekanKirimPesan() {
	var nama = document.getElementById("nama-pesan").value;
	var email = document.getElementById("email-pesan").value;
	var emailDot = email.indexOf(".");
	var emailAt = email.indexOf("@");
	var subject = document.getElementById("subject-pesan").value;
	var pesan = document.getElementById("pesan-pesan").value;

	if (nama.length < 1) {
		return alert("nama harus di isi!")
	}

	if (email.length < 1) {
		return alert("email harus di isi!")
	}

	if (emailAt < 0) {
		return alert("email tidak benar")
	}

	if (emailDot < 0) {
		return alert("email masih tidak benar")
	}

	if (subject.length < 1) {
		return alert("subject harus di isi!")
	}

	if (pesan.length < 1) {
		return alert("pesan harus di isi!")
	}

	alert("pesan berhasil terkirim!");
}