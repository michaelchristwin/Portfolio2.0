import "../components/CSS/styles.css";
import Hero from "./JSX/Hero";
import NavBar from "./JSX/NavBar";
import About from "./JSX/About";
import "../components/CSS/styles.css";
import Skills from "./JSX/Skills";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

export default App;
