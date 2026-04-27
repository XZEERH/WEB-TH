import { useState } from 'react';
import { X } from 'lucide-react';

const dummyData =[
  { id: 1, title: "Update Global Alpha", desc: "Penjelasan lengkap mengenai update informasi global terkini terkait teknologi web3.", img: "https://picsum.photos/400?random=20", link: "#" },
  { id: 2, title: "Kecerdasan Buatan", desc: "Perkembangan AI dan dampaknya terhadap arus informasi media massa.", img: "https://picsum.photos/400?random=21", link: "#" },
  { id: 3, title: "Ekonomi Digital", desc: "Pergerakan pasar saham global di era kebangkitan digital crypto.", img: "https://picsum.photos/400?random=22", link: "#" },
  { id: 4, title: "Keamanan Cyber", desc: "Pentingnya menjaga privasi data dalam era algoritma tanpa batas.", img: "https://picsum.photos/400?random=23", link: "#" },
];

export default function Media() {
  const[selectedCard, setSelectedCard] = useState<any>(null);

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl md:text-5xl text-neonBlue text-center mb-10">Update Informasi Media</h1>
      
      {/* Grid 2 Mobile / 4 Laptop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {dummyData.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedCard(item)}
            className="bg-darkCard border border-gray-800 rounded-xl overflow-hidden cursor-pointer hover:border-neonBlue hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 group"
          >
            <div className="overflow-hidden h-32 md:h-48">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            <div className="p-4 text-center border-t border-gray-800 group-hover:border-neonBlue transition-colors">
              <h3 className="text-lg md:text-xl text-gray-200">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-darkCard border border-neonBlue rounded-2xl max-w-xl w-full relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            <button onClick={() => setSelectedCard(null)} className="absolute top-3 right-3 bg-black/60 p-2 rounded-full text-white hover:text-neonBlue hover:bg-black z-10 transition-colors">
              <X size={24} />
            </button>
            <img src={selectedCard.img} alt={selectedCard.title} className="w-full h-64 object-cover" />
            <div className="p-8 space-y-4">
              <h2 className="text-3xl text-neonBlue">{selectedCard.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{selectedCard.desc}</p>
              <div className="pt-4">
                <a href={selectedCard.link} className="inline-block bg-neonBlue text-black px-6 py-3 rounded-lg hover:bg-white transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  Baca Artikel Lengkap →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}