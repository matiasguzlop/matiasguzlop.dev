import { BoxContainer, Container, Icon, Title } from './Contact.style.js';

function Contact ({ refPassed }) {
  return (
      <Container ref={refPassed}>
          <Title>Contact</Title>
          <BoxContainer>
              <a href='https://linkedin.com/in/matiasguzlop' target='_blank' rel='noreferrer'>
                  <div>
                      <Icon src='icons/linkedin.svg'></Icon>
                      linkedin.com/matiasguzlop
                  </div>
              </a>
              <a href='https://github.com/matiasguzlop' target='_blank' rel='noreferrer'>
                  <div>
                      <Icon src='icons/github.svg'></Icon>
                      github.com/matiasguzlop
                  </div>
              </a>
              <a href='mailto:matiasguzlop@gmail.com'>
                  <div>
                      <Icon src='icons/email.svg'></Icon>
                      matiasguzlop@gmail.com
                  </div>
              </a>
          </BoxContainer>
      </Container>
  );
}

export default Contact;
