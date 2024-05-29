import GoDownButton from '../components/GoDownButton';
import { Container, List, TechsBox, Title } from './About.style.js';

function About({ refPassed, handleScrollToSection }) {
    return (
        <Container ref={refPassed}>
            <Title>About me</Title>
            <List>
                <li>
                    <div>🎓</div>Graduated as an Electronic Engineer from Universidad de La Frontera, Temuco, Chile.
                </li>
                <li>
                    <div>⚙️</div>Started as a freelancer building data monitoring systems for industrial companies, managing Linux servers, and creating UIs using jQuery, PHP, and MySQL.
                </li>
                <li>
                    <div>👨‍💻</div>Dove deeper into software development, learning techniques like 💚 TDD and frameworks such as React, Express, NestJS, and Django.
                </li>
                <li>
                    <div>🚀</div>Joined great companies and collaborated with talented teams.
                </li>
                <li>
                    <div>📈</div>Enthusiast of challenges and continuous learning. Beyond coding, I enjoy on solving problems and building solutions, making me 'language agnostic.'
                </li>
                <li>
                    <div>🎾</div>Sports enthusiast with strong social and soft skills.
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
