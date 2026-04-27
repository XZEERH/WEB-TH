export default function StrukturAdmin() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl md:text-5xl text-neonBlue text-center mb-8">Struktur Admin TH</h1>
      
      <div className="bg-darkCard p-6 rounded-lg border border-neonBlue/30 hover:border-neonBlue transition-colors shadow-[0_0_10px_rgba(0,240,255,0.05)]">
        <h2 className="text-2xl text-white mb-3">Konsep Admin</h2>
        <p className="text-gray-300 text-justify">
          Admin TH dirancang dengan konsep desentralisasi komando namun tetap terpusat pada satu visi. Setiap admin memegang kendali atas sektor informasi spesifik, memastikan tidak ada manipulasi data, dan menjaga integritas setiap berita yang dipublikasikan secara global.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-darkCard p-6 rounded-lg border border-neonBlue/30">
          <h2 className="text-2xl text-white mb-3">Tugas Admin</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Memverifikasi keakuratan informasi sebelum rilis.</li>
            <li>Mengelola halaman <i>dashboard admin</i> untuk upload data.</li>
            <li>Menjaga keamanan web dari spam dan serangan siber.</li>
            <li>Mengatur jadwal pembaruan artikel Media Global.</li>
          </ul>
        </div>

        <div className="bg-darkCard p-6 rounded-lg border border-neonBlue/30">
          <h2 className="text-2xl text-white mb-3">Tujuan Admin</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Menciptakan ekosistem web yang bersih dan informatif.</li>
            <li>Mempercepat penyebaran informasi secara *real-time*.</li>
            <li>Melayani komunitas TH dengan transparansi tinggi.</li>
          </ul>
        </div>
      </div>

      <div className="bg-darkCard p-6 rounded-lg border border-neonBlue/30 mt-6">
        <h2 className="text-2xl text-neonBlue mb-4 text-center">Daftar Nama Admin</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {/* Nama-nama ini bisa lu ubah atau tambah nanti */}
          {["Admin Alpha", "Admin Beta", "Admin Charlie", "Admin Delta", "Admin Echo", "Admin Foxtrot"].map((nama, idx) => (
            <div key={idx} className="p-3 border border-gray-700 rounded bg-black/30 hover:bg-neonBlue hover:text-black transition-all">
              {nama}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}