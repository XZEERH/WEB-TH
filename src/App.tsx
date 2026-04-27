import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Media from './pages/Media';
// Import halaman lain jika sudah dibuat:
// import StrukturAdmin from './pages/StrukturAdmin';
// import TentangKami from './pages/TentangKami';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        {/* Placeholder untuk halaman lain yang belum dibuat di atas */}
        <Route path="/struktur" element={<div className="text-center text-neonBlue mt-20 text-2xl">Halaman Struktur Admin</div>} />
        <Route path="/admin-info" element={<div className="text-center text-neonBlue mt-20 text-2xl">Info Konsep Admin (Terhubung ke pages/admin.html nanti)</div>} />
        <Route path="/tentang" element={<div className="text-center text-neonBlue mt-20 text-2xl">Halaman Tentang Kami</div>} />
      </Routes>
    </Layout>
  );
}

export default App;