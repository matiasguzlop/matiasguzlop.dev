import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container } from './App.styles.js';
import AnimatedBg from './components/AnimatedBg/AnimatedBg';
import Footer from './components/Footer.jsx';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience.jsx';
import Presentation from './pages/Presentation';
import Projects from './pages/Projects.jsx';
import darkTheme from './styles/darkTheme';

function App () {
  const toGoElementsRefs = {
    matias: useRef(),
    experience: useRef(),
    projects: useRef(),
    about: useRef(),
    contact: useRef()
  };

  const handleScrollToSection = toGoElement => {
    const element = toGoElementsRefs[toGoElement].current;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
      <ThemeProvider theme={darkTheme}>
          <Container>
              <AnimatedBg numberOfElements={30}></AnimatedBg>
              <Header handleScrollToSection={handleScrollToSection} />
              <Presentation
                handleScrollToSection={handleScrollToSection}
                refPassed={toGoElementsRefs.matias}
              />
              <Experience
                handleScrollToSection={handleScrollToSection}
                refPassed={toGoElementsRefs.experience}
              />
              <Projects
                handleScrollToSection={handleScrollToSection}
                refPassed={toGoElementsRefs.projects}
              />
              <About
                handleScrollToSection={handleScrollToSection}
                refPassed={toGoElementsRefs.about}
              />
              <Contact refPassed={toGoElementsRefs.contact} />
              <Footer/>
          </Container>
      </ThemeProvider>
  );
}

export default App;
