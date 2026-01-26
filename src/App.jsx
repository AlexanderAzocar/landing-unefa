import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UnitSection from './components/UnitSection';
import Footer from './components/Footer';
import { content } from './data/content';

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden selection:bg-unefa-blue selection:text-white">
      <Navbar />
      <Hero />
      <main className="relative">
        <UnitSection
          id={content.unit8.id}
          title={content.unit8.title}
          description="Contenido de la Unidad 8"
          topics={content.unit8.topics}
        />
        <UnitSection
          id={content.unit9.id}
          title={content.unit9.title}
          description="Contenido de la Unidad 9"
          topics={content.unit9.topics}
          isRightAligned={true}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App;
