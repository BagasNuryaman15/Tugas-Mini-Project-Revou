function calculate() {
    const resultSection = document.querySelector('.h-container');
    resultSection.scrollIntoView({ behavior: 'smooth' });
    // Ambil nilai dari input
    const gender = document.querySelector('input[name="jenis-kelamin"]:checked')?.value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('tinggi').value) / 100;
    const age = parseInt(document.getElementById('usia').value);

    // Validasi input
    if (!gender || isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age < 18) {
        alert("Mohon masukkan data yang valid.");
        return;
    }

    // Hitung BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Tentukan kategori berdasarkan nilai BMI
    let status = "";
    let description = "";
    if (bmi < 18.5) {
        status = "Kekurangan Berat Badan";
        description = "Kamu berada dalam kategori kekurangan berat badan.";
    } else if (bmi >= 18.5 && bmi < 23) {
        status = "Berat Badan Normal";
        description = "Kamu memiliki berat badan normal.";
    } else if (bmi >= 23 && bmi < 25) {
        status = "Kelebihan Berat Badan";
        description = "Kamu kelebihan berat badan.";
    } else {
        status = "Obesitas";
        description = "Kamu berada dalam kategori obesitas.";
    }

    // Tampilkan hasil BMI dan statusnya
    document.querySelector(".span-6").innerText = status; // Tampilkan status
    document.querySelector(".result").innerText = bmi; // Tampilkan hasil BMI
    document.querySelector(".keterangan .keterangan").innerText = description; // Tampilkan deskripsi

    // Tampilkan informasi penyakit jika BMI menunjukkan obesitas atau kelebihan berat badan
    const additionalInfo = document.querySelector(".k-container");
    if (bmi >= 23) {
        additionalInfo.style.display = "block"; 
    } else {
        additionalInfo.style.display = "none"; 
    }
}

// Pastikan tombol "Hitung BMI" tidak mengirimkan form (prevent form submission)
document.querySelector(".calculate").addEventListener("click", function(event) {
    event.preventDefault();
    calculate();
});
