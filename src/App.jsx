import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CampsPage from './pages/CampsPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/camps" element={<CampsPage />} />
      </Routes>
    </div>
  );
}