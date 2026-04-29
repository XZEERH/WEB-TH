export default function StrukturAdmin() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl text-black text-center mb-10">Struktur Admin TH</h1>
      
      <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300">
        <h2 className="text-3xl text-black mb-4">Konsep Admin</h2>
        <p className="text-gray-700 text-lg text-justify leading-relaxed">
          Admin TH dirancang dengan konsep desentralisasi komando namun tetap terpusat pada satu visi global. Setiap admin memegang kendali atas sektor informasi spesifik, memastikan tidak ada manipulasi data yang bocor, dan menjaga integritas setiap berita yang dipublikasikan secara global kepada khalayak.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300">
          <h2 className="text-3xl text-black mb-4">Tugas Admin</h2>
          <ul className="list-none text-gray-700 space-y-3 text-lg">
            <li className="flex gap-2"><span>⚡</span> Memverifikasi keakuratan informasi sebelum rilis.</li>
            <li className="flex gap-2"><span>⚡</span> Mengelola halaman dashboard admin untuk upload data.</li>
            <li className="flex gap-2"><span>⚡</span> Menjaga keamanan web dari spam dan serangan siber.</li>
            <li className="flex gap-2"><span>⚡</span> Mengatur jadwal pembaruan artikel Media Global.</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300">
          <h2 className="text-3xl text-black mb-4">Tujuan Admin</h2>
          <ul className="list-none text-gray-700 space-y-3 text-lg">
            <li className="flex gap-2"><span>🎯</span> Menciptakan ekosistem web yang bersih dan informatif.</li>
            <li className="flex gap-2"><span>🎯</span> Mempercepat penyebaran informasi secara real-time.</li>
            <li className="flex gap-2"><span>🎯</span> Melayani komunitas TH dengan transparansi tinggi.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 mt-8">
        <h2 className="text-3xl text-black mb-6 text-center">Daftar Nama Admin Lengkap</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Razeerh (Founder web)", "Gerald (Owner TH)", "Admin Not Found!", "Admin Not Found!", "Admin Not Found!", "Admin Not Found!", "Admin Not Found!", "Admin Not Found!"].map((nama, idx) => (
            <div key={idx} className="p-4 border border-gray-300 rounded-lg bg-gray-50 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-sm">
              {nama}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}