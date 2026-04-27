import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Typewriter from './Typewriter';

const pages =[
  { path: '/', name: 'Home', isHtml: false },
  { path: '/media', name: 'Media', isHtml: false },
  { path: '/struktur', name: 'Struktur Admin', isHtml: false },
  { path: '/pages/admin.html', name: 'Halaman Admin', isHtml: true },
  { path: '/tentang', name: 'Tentang Kami', isHtml: false }
];

// Buat array baru khusus Next Page (Tanpa Halaman Admin)
const visiblePages = pages.filter(p => p.name !== 'Halaman Admin');

export default function Layout({ children }: { children: React.ReactNode }) {
  const[menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  },[location.pathname]);

  // Hitung next page (hanya dari yang visible)
  const currentIndex = visiblePages.findIndex(p => p.path === location.pathname);
  const safeIndex = currentIndex !== -1 ? currentIndex : 0; 
  const nextPage = safeIndex < visiblePages.length - 1 ? visiblePages[safeIndex + 1] : visiblePages[0];

  const handleNextPage = () => {
    navigate(nextPage.path);
  };

  // Fungsi Password Admin
  const handleAdminClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const pass = prompt("Masukkan password untuk mengakses halaman ini:");
    if (pass === "TH 2026") {
      window.location.href = path;
    } else {
      alert("Password salah atau dibatalkan!");
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Terang */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="w-24 h-14 overflow-hidden rounded border border-gray-300 bg-gray-100 flex items-center justify-center">
            <img src="/assets/favicon-th.jpg" alt="TH Logo" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display='none'} />
          </div>

          {/* Typewriter Center Desktop (Dibuat Lebih Besar) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-extrabold">
            <Typewriter />
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black z-50">
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Typewriter Mobile (Dibuat Lebih Besar) */}
        <div className="md:hidden text-center pb-3 text-xl font-extrabold mt-1">
          <Typewriter />
        </div>

        {/* Dropdown Menu Terang */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-4 flex flex-col space-y-4 animate-fade-in shadow-lg">
            {pages.map((page) => (
              page.isHtml ? (
                <a 
                  key={page.path} 
                  href={page.path} 
                  onClick={(e) => handleAdminClick(e, page.path)}
                  className="text-lg text-gray-600 hover:text-black transition-colors border-b border-gray-100 pb-2"
                >
                  {page.name}
                </a>
              ) : (
                <Link 
                  key={page.path} 
                  to={page.path} 
                  onClick={() => setMenuOpen(false)} 
                  className={`text-lg transition-colors border-b border-gray-100 pb-2 ${location.pathname === page.path ? 'text-black font-extrabold' : 'text-gray-600 hover:text-black'}`}
                >
                  {page.name}
                </Link>
              )
            ))}
          </nav>
        )}
      </header>

      <main className="flex-grow p-4 md:p-8 animate-fade-in" key={location.pathname}>
        {children}
        
        {/* Icon Card Halaman Berikutnya (Admin sudah tidak ada di sini) */}
        <div className="mt-16 flex justify-center md:justify-end">
          <div 
            onClick={handleNextPage}
            className="group cursor-pointer flex items-center gap-4 bg-gray-50 border-2 border-gray-200 p-4 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div>
              <p className="text-sm text-gray-500 group-hover:text-gray-300">Halaman berikutnya</p>
              <h3 className="text-xl text-black group-hover:text-white">{nextPage.name}</h3>
            </div>
            <ArrowRight size={28} className="text-black group-hover:text-white" />
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 text-center p-5 text-sm md:text-base text-gray-500">
        <p>TH dilindungi undang-undang | Dibuat oleh Razeerh</p>
      </footer>
    </div>
  );
}