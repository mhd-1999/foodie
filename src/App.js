
// import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Welcome from './components/Welcome';
import OurTeam from './components/OurTeam';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Address from './components/Address';
import Footer from './components/Footer';
import ButtonTop from './components/ButtonTop';

function App() {
  return (
    <div className="App">
      <ButtonTop />
      <Header />
      <Banner />
      <About />
      <Welcome />
      <OurTeam />
      <Menu />
      <Contact />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
