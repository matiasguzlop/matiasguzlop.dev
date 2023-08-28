import { Container } from './Footer.styles.js';

function Footer () {
  return (
      <Container>
          <span>
              Built by Matías Guzmán using React and Styled-Components
          </span>
          <span>
              Checkout the source <a href='https://github.com/matiasguzlop/matiasguzlop.dev' target='_blank' rel='noreferrer'>here</a>
          </span>
      </Container>
  );
}

export default Footer;
