import styled from 'styled-components';

import { headerHeight, sizeQueries } from '../styles/constants';

export const Container = styled.section`
  min-height: 100vh;
  padding: ${headerHeight} 2em 0 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${sizeQueries.sm}{
    padding: ${headerHeight} 1em 0 1em;
  }
  @media ${sizeQueries.xsm}{
    padding: ${headerHeight} 0.5em 0 0.5em;
  }
`;

export const Title = styled.h1`
  text-align: center;
  flex-basis: 100%;
`;

export const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 400ch;
  justify-content: center;
  gap: 1em;
`;

export const ImportantLink = styled.a`
  width: 400ch;
  color: ${props => props.theme.color.tertiary};
  text-decoration: underline;
  font-size: 2rem;
  text-align: center;
  margin: 1em 0;
  cursor: pointer;
`;
