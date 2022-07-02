
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Welcome from './components/Welcome';
import OurTeam from './components/OurTeam';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Welcome />
      <OurTeam />
      <Menu />
    </div>
  );
}

export default App;
