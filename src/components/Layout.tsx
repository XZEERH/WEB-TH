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

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top ketika ganti halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const currentIndex = pages.findIndex(p => p.path === location.pathname);
  // Jika tidak ketemu (misal lg di html), default ke home
  const safeIndex = currentIndex !== -1 ? currentIndex : 0; 
  const nextPage = safeIndex < pages.length - 1 ? pages[safeIndex + 1] : pages[0];

  const handleNextPage = () => {
    if (nextPage.isHtml) {
      window.location.href = nextPage.path;
    } else {
      navigate(nextPage.path);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-darkBg/90 backdrop-blur-md border-b border-neonBlue/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="w-24 h-14 overflow-hidden rounded border border-neonBlue/50 bg-black flex items-center justify-center">
            <img src="/assets/favicon-th.jpg" alt="TH Logo" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display='none'} />
            <span className="absolute text-xs text-neonBlue">Logo 16:9</span>
          </div>

          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl">
            <Typewriter />
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-neonBlue z-50">
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <div className="md:hidden text-center pb-2 text-sm">
          <Typewriter />
        </div>

        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-darkBg border-b border-neonBlue p-4 flex flex-col space-y-4 animate-fade-in shadow-xl">
            {pages.map((page) => (
              page.isHtml ? (
                <a key={page.path} href={page.path} className="text-lg text-gray-300 hover:text-neonBlue transition-colors border-b border-gray-800 pb-2">
                  {page.name}
                </a>
              ) : (
                <Link key={page.path} to={page.path} onClick={() => setMenuOpen(false)} className={`text-lg transition-colors border-b border-gray-800 pb-2 ${location.pathname === page.path ? 'text-neonBlue' : 'text-gray-300 hover:text-neonBlue'}`}>
                  {page.name}
                </Link>
              )
            ))}
          </nav>
        )}
      </header>

      <main className="flex-grow p-4 md:p-8 animate-fade-in" key={location.pathname}>
        {children}
        
        {/* Icon Card Halaman Berikutnya */}
        <div className="mt-16 flex justify-center md:justify-end">
          <div 
            onClick={handleNextPage}
            className="group cursor-pointer flex items-center gap-4 bg-darkCard border-2 border-neonBlue/50 p-4 rounded-xl hover:bg-neonBlue hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <div>
              <p className="text-sm text-gray-400 group-hover:text-black/70">Halaman berikutnya</p>
              <h3 className="text-xl">{nextPage.name}</h3>
            </div>
            <ArrowRight size={28} className="text-neonBlue group-hover:text-black" />
          </div>
        </div>
      </main>

      <footer className="bg-darkCard border-t border-neonBlue/30 text-center p-5 text-sm md:text-base text-gray-400">
        <p>TH dilindungi undang-undang | Dibuat oleh Razeerh</p>
      </footer>
    </div>
  );
}