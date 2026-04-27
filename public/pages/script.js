document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const judul = document.getElementById('judul').value;
    const gambar = document.getElementById('gambar').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const link = document.getElementById('link').value;

    console.log("Data siap diupload:", { judul, gambar, deskripsi, link });
    
    alert(`Berhasil! Data "${judul}" siap diintegrasikan ke database nanti.`);
    this.reset();
});