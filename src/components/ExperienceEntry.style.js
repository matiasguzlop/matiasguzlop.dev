import { styled } from 'styled-components';

import { sizeQueries } from '../styles/constants.js';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1em auto;
  width: 70ch;
  height: 340px;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 20px;
  padding: 1em;
  margin-top: 2em;
  @media ${sizeQueries.sm}{
    height: auto;
  }
  @media ${sizeQueries.xsm}{
    height: auto;
  }
`;

export const LogoContainer = styled.div`
  margin: 1em auto 0 auto;
  img{
    width: 100%;
    height: auto;
  }
`;

export const LogoInnerContainer = styled.div`
  width: 200px;
  height: 80px;
  display:flex;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1ch;
`;

export const Company = styled.h1`
  font-size: 1.2em;
  margin: 0;
`;

export const Location = styled.span`
  color: ${props => props.theme.color.tertiary};
  font-weight: lighter;
  font-style: italic;
  font-size: 1.2em;
`;

export const Charge = styled.span`
  color: ${props => props.theme.color.tertiary};
  font-size: 1.2em;
  font-weight: lighter;
  font-style: italic;
`;

export const Period = styled.span`
  text-transform: uppercase;
  font-weight: lighter;
  color: ${props => props.theme.color.tertiary};
  opacity: 0.6;
  font-size: 0.9em;
`;

export const Body = styled.main`
  color: ${props => props.theme.color.tertiary};
  font-weight: normal;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const Techs = styled.span`
  color: ${props => props.theme.color.tertiary};
  font-weight: lighter;
  font-family: monospace;
  opacity: 0.6;
`;
