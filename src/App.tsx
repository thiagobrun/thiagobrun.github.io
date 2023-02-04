import "./app.css";
import About from "./components/about";
import Header from "./components/header/index";
import Home from "./components/home/index";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
