export default function Home() {
  // Array berisi 9 link buatan lu + 1 link sejarah Wikipedia
  const homeImages =[
    "https://www.image2url.com/r2/default/images/1777369388352-13124ff0-9d13-4078-86a1-ba28e3f3e32e.jpg",
    "https://www.image2url.com/r2/default/images/1777369346282-6f5fe374-5e8f-4122-8374-fce3a885bb5d.jpg",
    "https://www.image2url.com/r2/default/images/1777369309538-0b87bc7b-a08d-468c-9fd7-57de62b1cd54.jpg",
    "https://www.image2url.com/r2/default/images/1777369274470-40fcc74b-31dd-44df-a679-5781e0e40107.jpg",
    "https://www.image2url.com/r2/default/images/1777369242220-ab09ad1a-a561-494f-bc19-67ae1e213e1f.jpg",
    "https://www.image2url.com/r2/default/images/1777369209306-7972bd53-241b-443d-815e-65c895ce25e4.jpg",
    "https://www.image2url.com/r2/default/images/1777369169374-7c1c487e-0cf9-4181-888a-42bba5a3bfc4.jpg",
    "https://www.image2url.com/r2/default/images/1777369062655-98cec5db-8147-470b-94ed-79eaa318c9fb.jpg",
    "https://www.image2url.com/r2/default/images/1777368929913-631bd5a5-6d34-45c1-aee8-af28bc269de0.jpg",
    "https://www.image2url.com/r2/default/images/1777452847589-080e23ba-01d4-45d8-b4cd-4c865d4e7fc2.jpg"
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl text-black font-extrabold text-center mb-10">Media Global TH</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed text-justify md:text-lg font-bold">
        <p>Media Global TH adalah platform informasi terdepan yang berfokus pada penyebaran berita dan pembaruan terkini dengan akurasi tinggi. Kami menjembatani kesenjangan informasi di era digital yang bergerak cepat.</p>
        <p>Didirikan dengan visi untuk menciptakan ekosistem informasi yang transparan, TH terus berinovasi dalam menyajikan konten yang relevan, edukatif, dan inspiratif bagi komunitas global tanpa ada batasan sensor yang manipulatif.</p>
        <p>Dengan mengadopsi teknologi web futuristik terbaru, sistem kami dirancang untuk memberikan pengalaman membaca yang ringan, tanpa lag, teratur secara presisi tanpa pecah, dan interaktif di berbagai perangkat, baik ponsel pintar maupun laptop.</p>
        <p>Keamanan, integritas jaringan, dan privasi data pengguna adalah prioritas mutlak kami. Oleh karena itu, seluruh infrastruktur dan operasional Media Global TH dilindungi oleh undang-undang siber dan diawasi ketat oleh struktur admin yang sangat profesional.</p>
        <p>Bergabunglah bersama kami dalam revolusi informasi dunia maya. Jelajahi sudut pandang baru, temukan rentetan fakta tak terungkap, dan jadilah bagian dari pergerakan komunitas TH yang terus berekspansi secara global setiap detiknya.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
        {/* Melakukan looping (perulangan) dari array homeImages yang udah dibuat di atas */}
        {homeImages.map((imgUrl, i) => (
          <div key={i} className="aspect-square bg-gray-100 border border-gray-300 rounded-lg overflow-hidden group hover:border-black hover:shadow-md transition-all">
             <img 
               src={imgUrl} 
               alt={`Media Global ${i + 1}`} 
               className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
             />
          </div>
        ))}
      </div>
    </div>
  );
}