import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';

function App() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden selection:bg-unefa-blue selection:text-white">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trabajo/:id" element={<ProjectDetail />} />
            </Routes>
        </div>
    );
}

export default App;
