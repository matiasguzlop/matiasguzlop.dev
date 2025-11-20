import GoDownButton from '../components/GoDownButton';
import ProjectEntry from '../components/ProjectEntry';
import projectsList from '../data/projectsList';
import { Container, ImportantLink, ProjectsContainer, Title } from './Projects.style.js';

function Projects ({ refPassed, handleScrollToSection }) {
  return (
      <Container ref={refPassed}>
          <Title>Projects</Title>
          <ProjectsContainer>
              {projectsList.map(project => <ProjectEntry key={project.title} project={project}/>)}
          </ProjectsContainer>
          <ImportantLink
            href='https://docs.google.com/document/d/1vPU_7AEMQuesBtWP3SI9f6kphz4Sud1H04Rbn3wKjRo/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >Checkout my PDF resume ⬇️</ImportantLink>
          <GoDownButton
            text='More about me'
            onClick={() => handleScrollToSection('about')}
          ></GoDownButton>
      </Container >
  );
}

export default Projects;
