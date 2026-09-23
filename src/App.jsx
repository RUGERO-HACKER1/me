import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import History from './components/History';
import Projects from './components/Projects';
import Footer from './components/Footer';
import WaveBackground from './components/WaveBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07070d] text-zinc-200">
      <WaveBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Expertise />
          <History />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
