import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Media from './components/Media';
import StrukturAdmin from './components/StrukturAdmin';
import TentangKami from './components/TentangKami';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/struktur" element={<StrukturAdmin />} />
        <Route path="/tentang" element={<TentangKami />} />
      </Routes>
    </Layout>
  );
}