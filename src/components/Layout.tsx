{/* Dropdown Menu */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white border-b border-gray-300 p-4 flex flex-col space-y-4 animate-fade-in shadow-xl">
            {pages.map((page) => (
              page.isHtml ? (
                // Sandi prompt dihapus, biarkan masuk ke admin.html. Karena disana nanti ada gembok loginnya.
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