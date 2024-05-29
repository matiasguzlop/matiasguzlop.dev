import { styled } from 'styled-components';

import { sizeQueries } from '../styles/constants.js';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 4em auto auto;
  width: 70ch;
  height: 450px;
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
  margin: 2em auto 2em auto;
  display: flex;
  align-items: center;
  img{
    width: 300px;
    /* max-width: 300px; */
    max-height: 150px;
  }
`;


export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  `;

export const Company = styled.h1`
  font-size: 1.2em;
  margin: 0;
  width: 100%;
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
