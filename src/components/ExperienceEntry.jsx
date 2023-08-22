import { Body, Charge, Company, Container, Header, Location, LogoContainer, LogoInnerContainer, Period, Techs } from './ExperienceEntry.style.js';

function ExperienceEntry ({ experience }) {
  return (
      <Container>
          <LogoContainer>
              <LogoInnerContainer>
                  <a href={experience.companyUrl}>
                      <img src={experience.logoUrl}/>
                  </a>
              </LogoInnerContainer>
          </LogoContainer>
          <Header>
              <Company>
                  {experience.company}
              </Company>
              <Location>
                  {experience.location}
              </Location>
              <Charge>
                  {experience.charge}
              </Charge>
          </Header>
          <Period>
              {experience.period}
          </Period>
          <Body>
              {experience.body}
          </Body>
          <Techs>
              {experience.techs}
          </Techs>
      </Container>
  );
}

export default ExperienceEntry;
