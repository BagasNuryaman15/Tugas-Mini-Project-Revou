function calculateBMI() {
    // Ambil nilai dari form
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("tinggi").value) / 100; // Konversi cm ke meter
    
    // Validasi input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Masukkan data berat dan tinggi badan yang valid!");
        return;
    }

    // Hitung BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Tentukan diagnosis berdasarkan BMI
    let diagnosis;
    if (bmi < 18.5) {
        diagnosis = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        diagnosis = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        diagnosis = "Kelebihan Berat Badan";
    } else {
        diagnosis = "Obesitas";
    }

    // Tampilkan hasil dan diagnosis
    document.getElementById("bmi-result").textContent = bmi;
    document.getElementById("diagnosis").textContent = diagnosis;
}