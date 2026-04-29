import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase'; 

export default function Media() {
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [mediaData, setMediaData] = useState<any[]>([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMedia() {
      try {
        const q = query(collection(db, "media_updates"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setMediaData(data);
      } catch (error) {
        console.error("Gagal mengambil data dari Firebase:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMedia();
  },[]);

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl md:text-5xl text-black font-extrabold text-center mb-10">Update Informasi Media</h1>
      
      {loading ? (
        <p className="text-center text-gray-500 font-bold text-xl animate-pulse">Menyinkronkan data dengan server...</p>
      ) : mediaData.length === 0 ? (
        <p className="text-center text-gray-500 font-bold text-xl">Belum ada informasi terbaru saat ini.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {mediaData.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedCard(item)}
              className="bg-white border border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:border-black hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              <div className="overflow-hidden h-32 md:h-48 bg-gray-100 flex-shrink-0">
                <img 
                  src={item.gambar} 
                  alt={item.judul} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" 
                  onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Gambar+Error'}
                />
              </div>
              <div className="p-4 text-center border-t border-gray-200 group-hover:border-black transition-colors flex-grow flex items-center justify-center">
                <h3 className="text-lg md:text-xl text-black font-bold line-clamp-2">{item.judul}</h3>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Popup (Baca Lengkap) */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-gray-300 rounded-2xl max-w-xl w-full relative overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* TOMBOL X CLOSE (Diperjelas & Dipertebal) */}
            <button 
              onClick={() => setSelectedCard(null)} 
              className="absolute top-3 right-3 md:top-4 md:right-4 bg-black p-2 rounded-full text-white border-2 border-white hover:bg-red-600 hover:scale-110 z-50 transition-all shadow-lg"
              title="Tutup"
            >
              <X size={24} strokeWidth={3} />
            </button>

            {/* Gambar Modal */}
            <div className="w-full h-48 md:h-64 bg-gray-200 flex-shrink-0 relative">
              <img 
                src={selectedCard.gambar} 
                alt={selectedCard.judul} 
                className="w-full h-full object-cover"
                onError={(e) => e.currentTarget.style.display='none'} 
              />
            </div>

            {/* Isi Konten */}
            <div className="p-6 md:p-8 space-y-4 overflow-y-auto">
              <h2 className="text-3xl text-black font-extrabold">{selectedCard.judul}</h2>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap font-bold">{selectedCard.deskripsi}</p>
              <div className="pt-4 pb-2">
                <a href={selectedCard.link} target="_blank" rel="noreferrer" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md font-bold">
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