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
                      href='https://drive.google.com/file/d/1ZU6PqOkVZ4hEJYUWkAnyJapWpGAQ4-z6/view?usp=drive_link'
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
