import Navbar from "./Components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutMeTab from "./Components/AboutMeTab";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
    >
      <Navbar />
      <Intro />
      <AboutMeTab />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
