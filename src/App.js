import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import VantaBackground from './components/VantaBackground';

function App() {
  return (
    <div className="App">
      <VantaBackground>
        <NavBar />
        <Banner />
        <TechStack />
        <Projects />
        
        <Footer />
      </VantaBackground>
    </div>
  );
}

export default App;
