import ExperienceEntry from '../components/ExperienceEntry';
import GoDownButton from '../components/GoDownButton';
import experienceList from '../data/experienceList';
import { Container, ExperienceContainer, Title } from './Experience.style.js';
import { ImportantLink } from './ImportantLink.style.js';

function Experience ({ refPassed, handleScrollToSection }) {
  return (
      <Container ref={refPassed}>
          <Title>Experience</Title>
          <ExperienceContainer>
              {experienceList.map(experience => <ExperienceEntry key={experience.company} experience={experience}/>)}
          </ExperienceContainer>
          <ImportantLink
                      href='https://drive.google.com/file/d/13a-aZrlHVDmpJsh6HqgtHiX81Mllc9CW/view?usp=sharing'
                      target='_blank'
                      rel='noreferrer'
          >
            Checkout my PDF resume ⬇️
          </ImportantLink>
          <GoDownButton
            text='More about me'
            onClick={() => handleScrollToSection('about')}
          ></GoDownButton>
      </Container >
  );
}

export default Experience;
