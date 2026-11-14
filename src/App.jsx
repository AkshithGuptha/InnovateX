import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Issues from './components/Issues';
import Articles from './components/Articles';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Issues />
        <Articles />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
