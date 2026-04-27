export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl text-neonBlue text-center mb-10 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">Media Global TH</h1>
      
      <div className="space-y-6 text-gray-300 leading-relaxed text-justify md:text-lg">
        <p>Media Global TH adalah platform informasi terdepan yang berfokus pada penyebaran berita dan pembaruan terkini dengan akurasi tinggi. Kami menjembatani kesenjangan informasi di era digital yang bergerak cepat.</p>
        <p>Didirikan dengan visi untuk menciptakan ekosistem informasi yang transparan, TH terus berinovasi dalam menyajikan konten yang relevan, edukatif, dan inspiratif bagi komunitas global tanpa ada batasan sensor yang manipulatif.</p>
        <p>Dengan mengadopsi teknologi web futuristik terbaru, sistem kami dirancang untuk memberikan pengalaman membaca yang ringan, tanpa lag, teratur secara presisi tanpa pecah, dan interaktif di berbagai perangkat, baik ponsel pintar maupun laptop.</p>
        <p>Keamanan, integritas jaringan, dan privasi data pengguna adalah prioritas mutlak kami. Oleh karena itu, seluruh infrastruktur dan operasional Media Global TH dilindungi oleh undang-undang siber dan diawasi ketat oleh struktur admin yang sangat profesional.</p>
        <p>Bergabunglah bersama kami dalam revolusi informasi dunia maya. Jelajahi sudut pandang baru, temukan rentetan fakta tak terungkap, dan jadilah bagian dari pergerakan komunitas TH yang terus berekspansi secara global setiap detiknya.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="aspect-square bg-darkCard border border-gray-800 rounded-lg overflow-hidden group hover:border-neonBlue hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
             <img src={`https://picsum.photos/400?random=${i}`} alt={`Media ${i}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}