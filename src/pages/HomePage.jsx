import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import UnitSection from '../components/UnitSection';
import LearningSection from '../components/LearningSection';
import WorksSection from '../components/WorksSection';
import VirtualAssistant from '../components/VirtualAssistant';
import Footer from '../components/Footer';
import { content } from '../data/content';

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
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
                <LearningSection />
                <WorksSection />
            </main>
            <Footer />
            <VirtualAssistant />
        </>
    );
}

export default HomePage;
