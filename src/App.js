import './App.css';
<<<<<<< HEAD
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";
import NeuralNetworkBackground from "./components/NeuralNetworkBackground";
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import VantaBackground from './components/VantaBackground';
>>>>>>> 9a6103467ab9a523fe0874d470fc047e3ced5b9f

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <VantaBackground>
        <NavBar />
        <Banner />
        <TechStack />
        <Projects />
        <Footer />
      </VantaBackground>
>>>>>>> 9a6103467ab9a523fe0874d470fc047e3ced5b9f
    </div>
  );
}

export default App;
