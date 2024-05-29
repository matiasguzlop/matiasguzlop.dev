import { Body, Charge, Company, Container, Header, Location, LogoContainer, Period, Techs } from './ExperienceEntry.style.js';

function ExperienceEntry ({ experience }) {
  return (
      <Container>
          <LogoContainer>
                  <a href={experience.companyUrl}>
                      <img src={experience.logoUrl}/>
                  </a>
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
