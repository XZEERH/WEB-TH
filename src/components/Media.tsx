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
      <h1 className="text-4xl md:text-5xl text-black text-center mb-10">Update Informasi Media</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {dummyData.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedCard(item)}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:border-black hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="overflow-hidden h-32 md:h-48 bg-gray-100">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
            </div>
            <div className="p-4 text-center border-t border-gray-100 group-hover:border-black transition-colors">
              <h3 className="text-lg md:text-xl text-black">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-gray-300 rounded-2xl max-w-xl w-full relative overflow-hidden shadow-2xl">
            <button onClick={() => setSelectedCard(null)} className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full text-black hover:bg-black hover:text-white z-10 transition-colors">
              <X size={24} />
            </button>
            <img src={selectedCard.img} alt={selectedCard.title} className="w-full h-64 object-cover" />
            <div className="p-8 space-y-4">
              <h2 className="text-3xl text-black">{selectedCard.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{selectedCard.desc}</p>
              <div className="pt-4">
                <a href={selectedCard.link} className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md">
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