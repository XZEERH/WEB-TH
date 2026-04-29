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

const visiblePages = pages.filter(p => p.name !== 'Halaman Admin');

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const currentIndex = visiblePages.findIndex(p => p.path === location.pathname);
  const safeIndex = currentIndex !== -1 ? currentIndex : 0; 
  const nextPage = safeIndex < visiblePages.length - 1 ? visiblePages[safeIndex + 1] : visiblePages[0];

  const handleNextPage = () => {
    navigate(nextPage.path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* HEADER */}
      <header className="relative z-40 bg-white border-b border-gray-300 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2 relative">
          
          {/* Logo */}
          <div className="w-28 h-14 md:w-40 md:h-20 flex-shrink-0 flex items-center">
            <img 
              src="/assets/favicon-th.jpg" 
              alt="Logo TH" 
              className="w-full h-full object-contain object-left" 
            />
          </div>

          {/* Teks Ngetik (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-3xl font-extrabold text-black">
            <Typewriter />
          </div>

          {/* Tombol Garis Tiga */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black z-50">
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Teks Ngetik (Mobile) */}
        <div className="md:hidden text-center pb-4 pt-0 text-2xl font-extrabold text-black">
          <Typewriter />
        </div>

        {/* Dropdown Menu - Tanpa password prompt lagi, langsung ke admin.html */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white border-b border-gray-300 p-4 flex flex-col space-y-4 animate-fade-in shadow-xl">
            {pages.map((page) => (
              page.isHtml ? (
                <a 
                  key={page.path} 
                  href={page.path} 
                  className="text-lg text-gray-700 font-bold hover:text-black transition-colors border-b border-gray-200 pb-2"
                >
                  {page.name}
                </a>
              ) : (
                <Link 
                  key={page.path} 
                  to={page.path} 
                  onClick={() => setMenuOpen(false)} 
                  className={`text-lg font-bold transition-colors border-b border-gray-200 pb-2 ${location.pathname === page.path ? 'text-black text-xl' : 'text-gray-700 hover:text-black'}`}
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
        
        {/* Tombol Halaman Berikutnya */}
        <div className="mt-16 flex justify-center md:justify-end">
          <div 
            onClick={handleNextPage}
            className="group cursor-pointer flex items-center gap-4 bg-gray-100 border-2 border-gray-300 p-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
          >
            <div>
              <p className="text-sm text-gray-600 font-bold group-hover:text-gray-300">Halaman berikutnya</p>
              <h3 className="text-xl font-extrabold text-black group-hover:text-white">{nextPage.name}</h3>
            </div>
            <ArrowRight size={28} className="text-black group-hover:text-white" />
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 border-t border-gray-300 text-center p-5 text-sm md:text-base text-black font-bold">
        <p>TH dilindungi undang-undang | Dibuat oleh Razeerh</p>
      </footer>
    </div>
  );
}