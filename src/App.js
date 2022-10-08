import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

import {
  aboutLink,
  resumeLink,
  projectsLink,
  contactLink
} from './utils/metadata';
import UnderDevelopment from './components/UnderDevelopment';

function App() {
  return (
    <>
      <Navbar/>
      <UnderDevelopment/>
      <Routes>
        <Route path={aboutLink} element={<About/>} />
        <Route path={resumeLink} element={<Resume/>} />
        <Route path={projectsLink} element={<Projects/>} />
        <Route path={contactLink} element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
