import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
