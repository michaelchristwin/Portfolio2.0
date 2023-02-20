import "../components/CSS/styles.css";
import Hero from "./JSX/Hero";
import NavBar from "./JSX/NavBar";
import About from "./JSX/About";
import "../components/CSS/styles.css";
import Skills from "./JSX/Skills";
import Projects from "./JSX/Projects";

function App() {
  return (
    <main className="main">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
