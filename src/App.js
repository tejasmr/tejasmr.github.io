import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
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
      <div style={{height: "39px"}}></div>
      <Footer />
    </>
  );
}

export default App;
