import GoDownButton from '../components/GoDownButton';
import { Container, Drop, DropContainer, Img, PreTitle, SubTitle, Title, TitleContainer } from './Presentation.style.js';

function Presentation({ refPassed, handleScrollToSection }) {
    return (
        <Container ref={refPassed}>
            <TitleContainer>
                <Img src='img/profile3.png'></Img>
                <PreTitle>Hi, my name is</PreTitle>
                <Title>Matias Guzman</Title>
                <SubTitle>I'm a Full Stack Developer</SubTitle>
            </TitleContainer>
            <DropContainer>
                <Drop>
                    <p>
                        <strong>6 years</strong> of experience.
                    </p>
                    <p>
                        My most valuable skill is my <strong>commitment to good programming practices</strong> and clear <strong>communication with the team</strong>.
                    </p>
                    <p>
                        What drives me is the process of <strong>creating solutions</strong>, which is why I am not tied to any specific programming language.
                    </p>
                    <p>
                        Sportsman, sociable and <strong>team worker</strong>.
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
