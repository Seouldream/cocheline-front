import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NewbieCampsPage from './pages/NewbieCampsPage';
import JuniorCampsPage from './pages/JuniorCampsPage';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import StudiesPage from './pages/StudiesPage';
import TalksPage from './pages/TalksPage';
import Study from './components/Study';
import Talk from './components/Talk';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newbieCamps" element={<NewbieCampsPage />} />
        <Route path="/juniorCamps" element={<JuniorCampsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/studies" element={<StudiesPage />} />
        <Route path="/studies/:id" element={<Study />} />
        <Route path="/talks" element={<TalksPage />} />
        <Route path="/talks/:id" element={<Talk />} />
      </Routes>
    </div>
  );
}
