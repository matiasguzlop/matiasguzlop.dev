import GoDownButton from '../components/GoDownButton';
import { Container, List, TechsBox, Title } from './About.style.js';

function About ({ refPassed, handleScrollToSection }) {
  return (
      <Container ref={refPassed}>
          <Title>About me</Title>
          <List>
              <li>
                  <div>🎓</div>University graduated Electronic Engineer from Universidad de La Frontera, Temuco, Chile.
              </li>
              <li>
                  <div>⚙️</div>I started as Freelancer building data monitoring systems for industrial companies, managing Linux servers and building UIs using Jquery, PHP and MySQL.
              </li>
              <li>
                  <div>👨‍💻</div>Then I delve more into software development and learned new techniques like 💚TDD and frameworks like React, Express, NestJS, Django, etc.
              </li>
              <li>
                  <div>🚀</div>I've joined great companies and have learned a lot for great teams.
              </li>
              <li>
                  <div>📈</div>I'm a lover of challenges and learning, and more than coding, I love to solve problems by building things, thus, I am 'language agnostic'.
              </li>
              <li>
                  <div>🎾</div>Sportsman, sociable with good soft skills.
              </li>
          </List>
          <TechsBox>
              <h3>Technologies I've been working with recently:</h3>
              <li>Django</li>
              <li>React</li>
              <li>Typescript</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Docker</li>
          </TechsBox>
          <GoDownButton
            text='Contact me'
            onClick={() => handleScrollToSection('contact')}
          ></GoDownButton>
      </Container>
  );
}

export default About;
