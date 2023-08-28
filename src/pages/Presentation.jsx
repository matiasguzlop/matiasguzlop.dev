import GoDownButton from '../components/GoDownButton';
import { Container, Drop, DropContainer, Img, PreTitle, SubTitle, Title, TitleContainer } from './Presentation.style.js';

function Presentation ({ refPassed, handleScrollToSection }) {
  return (
      <Container ref={refPassed}>
          <TitleContainer>
              <Img src='img/profile3.png'></Img>
              <PreTitle>Hi, my name is</PreTitle>
              <Title>Matías Guzmán</Title>
              <SubTitle>I'm a Full Stack Developer</SubTitle>
          </TitleContainer>
          <DropContainer>
              <Drop>
                  <li>
                      5 years of experience working in teams and as a freelancer.
                  </li>
                  <li>
                      Committed to good programming practices and clear communication with the team.
                  </li>
                  <li>
                      I love working with TDD.
                  </li>
                  <li>
                      Sportsman, sociable and team worker.
                  </li>
              </Drop>
          </DropContainer>
          <GoDownButton
            text='See my experience'
            onClick={() => handleScrollToSection('experience')}
          >
          </GoDownButton>
      </Container >
  );
}

export default Presentation;
