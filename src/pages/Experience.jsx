import ExperienceEntry from '../components/ExperienceEntry';
import GoDownButton from '../components/GoDownButton';
import experienceList from '../data/experienceList';
import { Container, ExperienceContainer, Title } from './Experience.style.js';

function Experience ({ refPassed, handleScrollToSection }) {
  return (
      <Container ref={refPassed}>
          <Title>Experience</Title>
          <ExperienceContainer>
              {experienceList.map(experience => <ExperienceEntry key={experience.company} experience={experience}/>)}
          </ExperienceContainer>
          <GoDownButton
            text="Checkout what i've built"
            onClick={() => handleScrollToSection('projects')}
          ></GoDownButton>
      </Container >
  );
}

export default Experience;
