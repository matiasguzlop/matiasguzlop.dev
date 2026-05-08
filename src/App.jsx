import React, { Suspense, lazy, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container } from './App.styles.js';
import AnimatedBg from './components/AnimatedBg/AnimatedBg';
import Footer from './components/Footer.jsx';
import Header from './components/Header';
import Presentation from './pages/Presentation';
import darkTheme from './styles/darkTheme';

const Experience = lazy(() => import('./pages/Experience.jsx'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function SectionFallback () {
  return <div style={{ minHeight: '100vh' }} />;
}

function App () {
  const toGoElementsRefs = {
    matias: useRef(),
    experience: useRef(),
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
              <Suspense fallback={<SectionFallback />}>
                <Experience
                  handleScrollToSection={handleScrollToSection}
                  refPassed={toGoElementsRefs.experience}
                />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <About
                  handleScrollToSection={handleScrollToSection}
                  refPassed={toGoElementsRefs.about}
                />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Contact refPassed={toGoElementsRefs.contact} />
              </Suspense>
              <Footer/>
          </Container>
      </ThemeProvider>
  );
}

export default App;
