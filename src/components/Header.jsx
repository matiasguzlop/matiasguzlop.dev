import { useState } from 'react';

// import {useTranslation} from 'react-i18next';
import { Container, MenuContent, MenuIcon, MenuIconContainer, Title, Veil } from './Header.style.js';

function Header ({ handleScrollToSection }) {
  const [menuDeployed, setMenuDeployed] = useState(false);

  const handleClickMenuIcon = () => {
    setMenuDeployed(prev => !prev);
  };

  // const {t} = useTranslation();
  return (
      <Container>
          <MenuIconContainer onClick={handleClickMenuIcon}>
              <MenuIcon></MenuIcon>
          </MenuIconContainer>
          <Title>MATIASGUZLOP.DEV</Title>
          <MenuContent className={menuDeployed && 'deployed'}>
              <li
                onClick={() => {
                  handleScrollToSection('matias');
                  handleClickMenuIcon();
                }}
              >Matías Guzmán</li>
              <li
                onClick={() => {
                  handleScrollToSection('experience');
                  handleClickMenuIcon();
                }}
              >Experience</li>
              <li
                onClick={() => {
                  handleScrollToSection('projects');
                  handleClickMenuIcon();
                }}
              >Projects</li>
              <li
                onClick={() => {
                  handleScrollToSection('about');
                  handleClickMenuIcon();
                }}
              >About</li>
              <li
                onClick={() => {
                  handleScrollToSection('contact');
                  handleClickMenuIcon();
                }}
              >Contact</li>
          </MenuContent>
          <Veil className={menuDeployed && 'visible'} onClick={handleClickMenuIcon}></Veil>
      </Container>
  );
}

export default Header;
