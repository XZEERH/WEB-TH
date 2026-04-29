import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase'; 
import { createPortal } from 'react-dom'; // <-- TAMBAHAN BARU: Fitur biar pop-up terbang ke paling atas

export default function Media() {
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const[mediaData, setMediaData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Mengambil data dari Firebase secara otomatis
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
      
      {/* Tampilan Loading saat narik data */}
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
              className="bg-white border border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:border-black hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="overflow-hidden h-32 md:h-48 bg-gray-100">
                <img src={item.gambar} alt={item.judul} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
              </div>
              <div className="p-4 text-center border-t border-gray-200 group-hover:border-black transition-colors">
                <h3 className="text-lg md:text-xl text-black font-bold truncate">{item.judul}</h3>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL POP-UP (Sekarang dipaksa melayang paling depan pakai createPortal) */}
      {selectedCard && createPortal(
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-gray-300 rounded-2xl max-w-xl w-full relative overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
            
            {/* Tanda X (Close) Diperjelas */}
            <button 
              onClick={() => setSelectedCard(null)} 
              className="absolute top-3 right-3 bg-white border border-gray-300 p-2 rounded-full text-black hover:bg-black hover:text-white z-50 transition-colors shadow-lg"
            >
              <X size={24} />
            </button>

            <img src={selectedCard.gambar} alt={selectedCard.judul} className="w-full h-56 md:h-64 object-cover flex-shrink-0" />
            
            <div className="p-6 md:p-8 space-y-4 overflow-y-auto">
              <h2 className="text-2xl md:text-3xl text-black font-extrabold">{selectedCard.judul}</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-bold">{selectedCard.deskripsi}</p>
              <div className="pt-2 pb-2">
                <a href={selectedCard.link} target="_blank" rel="noreferrer" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md font-bold">
                  Baca Artikel Lengkap →
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body // Memaksa pop-up muncul di lapisan terluar layar
      )}
    </div>
  );
}