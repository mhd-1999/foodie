
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Welcome from './components/Welcome';
import OurTeam from './components/OurTeam';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Welcome />
      <OurTeam />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
