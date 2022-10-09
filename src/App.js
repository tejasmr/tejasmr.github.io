import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

import UnderDevelopment from './components/UnderDevelopment';

function App() {
  return (
    <>
      <Navbar />
      <div style={{height: "39px"}}></div>
      <UnderDevelopment />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
