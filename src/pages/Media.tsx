import { useState } from 'react';
import { X } from 'lucide-react';

const dummyData =[
  { id: 1, title: "Update Global 1", desc: "Penjelasan lengkap mengenai update informasi global terkini dari sumber terpercaya.", img: "https://picsum.photos/400?random=20", link: "#" },
  { id: 2, title: "Teknologi Masa Depan", desc: "Perkembangan AI dan dampaknya terhadap media informasi.", img: "https://picsum.photos/400?random=21", link: "#" },
  { id: 3, title: "Ekonomi Digital", desc: "Pergerakan pasar di era web3.", img: "https://picsum.photos/400?random=22", link: "#" },
  { id: 4, title: "Keamanan Cyber", desc: "Pentingnya menjaga privasi data.", img: "https://picsum.photos/400?random=23", link: "#" },
];

export default function Media() {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl text-neonBlue text-center mb-8">Update Informasi Media</h1>
      
      {/* Grid Cards: 2 per row (mobile), 4 per row (desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dummyData.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedCard(item)}
            className="bg-darkCard border border-gray-800 rounded-lg overflow-hidden cursor-pointer hover:border-neonBlue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
          >
            <img src={item.img} alt={item.title} className="w-full h-32 md:h-48 object-cover" />
            <div className="p-3 text-center">
              <h3 className="text-lg text-gray-200">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-darkCard border border-neonBlue rounded-xl max-w-lg w-full relative overflow-hidden">
            <button onClick={() => setSelectedCard(null)} className="absolute top-2 right-2 bg-black/50 p-1 rounded-full text-white hover:text-neonBlue z-10">
              <X size={24} />
            </button>
            <img src={selectedCard.img} alt={selectedCard.title} className="w-full h-56 object-cover" />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl text-neonBlue">{selectedCard.title}</h2>
              <p className="text-gray-300 text-sm md:text-base">{selectedCard.desc}</p>
              <a href={selectedCard.link} className="inline-block bg-neonBlue text-black px-4 py-2 rounded font-bold hover:bg-white transition-colors">
                Baca Artikel Lengkap
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}