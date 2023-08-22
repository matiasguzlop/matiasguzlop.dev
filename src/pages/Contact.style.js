import styled from 'styled-components';

import { footerHeight, headerHeight, sizeQueries } from '../styles/constants';

export const Container = styled.section`
  min-height: calc(100vh - ${footerHeight} - ${headerHeight});
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding-top: ${headerHeight};
`;

export const Title = styled.h1`
  text-align: center;
  margin: 1em 0;
  width: 100%;
`;

export const BoxContainer = styled.main`
  font-weight: lighter;
  a{
      text-decoration: none;
      color: inherit;
      text-align: center;
  }
  div{
    background-color: ${props => props.theme.backgroundColor.tertiary};
    padding: 1em ;
    margin-bottom: 2em;
    border-radius: 20px;
    transition: background-color 0.2s ease-in-out;
    font-family: monospace;
    width: 60ch;
    @media ${sizeQueries.sm}{
      width: 40ch;
    }
    @media ${sizeQueries.xsm}{
      width: 30ch;
    }
    &:hover{
      background-color: ${props => props.theme.backgroundColor.secondary};
      color: ${props => props.theme.color.secondary};
    }
  }
  div>img{
    display: block;
    margin: 0 auto;
  }
`;

export const Icon = styled.img`
  width: 40px;
  filter: ${props => props.theme.name === 'dark' ? 'invert()' : 'none'};
`;
