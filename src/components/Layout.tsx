const pages =[
  { path: '/', name: 'Home', isHtml: false },
  { path: '/media', name: 'Media', isHtml: false },
  { path: '/struktur', name: 'Struktur Admin', isHtml: false },
  { path: '/pages/admin.html', name: 'Halaman Admin', isHtml: true }, // Ini nembak ke file HTML murni
  { path: '/tentang', name: 'Tentang Kami', isHtml: false }
];
{pages.map((page) => (
  page.isHtml ? (
    <a 
      key={page.path} 
      href={page.path} 
      className={`text-lg hover:text-neonBlue transition-colors text-gray-300`}
    >
      {page.name}
    </a>
  ) : (
    <Link 
      key={page.path} 
      to={page.path} 
      onClick={() => setMenuOpen(false)}
      className={`text-lg hover:text-neonBlue transition-colors ${location.pathname === page.path ? 'text-neonBlue' : 'text-gray-300'}`}
    >
      {page.name}
    </Link>
  )
))}