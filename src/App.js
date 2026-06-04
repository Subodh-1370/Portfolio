import './App.css';
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";
import NeuralNetworkBackground from "./components/NeuralNetworkBackground";

function App() {
  return (
    <div className="App">
      <NeuralNetworkBackground />
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
