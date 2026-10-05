import GoDownButton from '../components/GoDownButton';
import { Container, Drop, DropContainer, Img, PreTitle, SubTitle, Title, TitleContainer } from './Presentation.style.js';

function Presentation({ refPassed, handleScrollToSection }) {
    return (
        <Container ref={refPassed}>
            <TitleContainer>
                <picture>
                    <source srcSet='img/profile1.jpg' type='image/jpg' />
                    <Img src='img/profile1.jpg' alt='Matias Guzman'></Img>
                </picture>
                <PreTitle>Hi, my name is</PreTitle>
                <Title>Matias Guzman</Title>
                <SubTitle>Infrastructure / Site Reliability Engineer</SubTitle>
            </TitleContainer>
            <DropContainer>
                <Drop>
                  <p>
                    Over 8 years across startups and government organizations, I've worked on infrastructure, DevOps,
                    CI/CD, reliability, and technical leadership.<br/>

                    I believe maintainability, clear communication, and ownership are more important than quick wins.<br/>
                    Good systems are not only built to work today, but to remain understandable and reliable as they
                    evolve.
                  </p>
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
