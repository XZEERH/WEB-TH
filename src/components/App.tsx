import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Media from './Media';
import StrukturAdmin from './StrukturAdmin';
import TentangKami from './TentangKami';

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