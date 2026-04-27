export default function TentangKami() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center animate-fade-in">
      {/* Tanpa shadow, teks murni hitam */}
      <h1 className="text-4xl md:text-5xl text-black font-extrabold text-center mb-8">
        Tentang Komunitas TH
      </h1>
      
      {/* Box deskripsi: Background abu-abu muda, teks hitam solid */}
      <div className="space-y-6 text-black font-bold text-justify md:text-lg bg-gray-100 p-8 md:p-12 rounded-2xl border border-gray-300 shadow-sm">
        <p>
          Komunitas TH adalah aliansi digital global yang terbentuk dari individu-individu visioner. Kami berfokus pada pertukaran ide, penyebaran informasi faktual, serta pengembangan teknologi berbasis komunitas. TH hadir sebagai rumah bagi para pemikir kritis di era modernisasi.
        </p>
        <p>
          Tujuan utama TH adalah mematahkan batasan geografis dalam mengakses berita dan inovasi terbaru. Kami percaya bahwa informasi yang transparan dan terstruktur akan melahirkan masyarakat yang lebih cerdas, tanggap, dan adaptif terhadap perkembangan zaman yang serba futuristik ini.
        </p>
        <p>
          Lebih dari sekadar website, TH adalah pergerakan nyata. Bersama para admin yang berdedikasi tinggi, kami terus memperluas jaringan, berkolaborasi dalam berbagai proyek media siber, dan memastikan eksistensi TH membawa dampak positif yang masif bagi seluruh anggotanya.
        </p>
      </div>

      {/* Social Media Links - Solid Black */}
      <div className="flex space-x-8 mt-10">
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-black hover:scale-110 transition-transform duration-300">
          <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.31-1.92 1.57-4.58 2.22-6.99 1.64-2.61-.62-4.9-2.6-5.59-5.18-.74-2.76.01-5.83 2.15-7.7 2.01-1.74 4.88-2.3 7.42-1.58.05 1.45.02 2.91.03 4.36-1.32-.42-2.85-.31-4.04.41-1.07.65-1.77 1.83-1.8 3.09-.04 1.34.56 2.68 1.63 3.48 1.36 1 3.32 1.05 4.69.1 1.22-.85 1.88-2.32 1.87-3.79-.02-5.71-.01-11.43-.01-17.14h-.05z"/>
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-black hover:scale-110 transition-transform duration-300">
          <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}