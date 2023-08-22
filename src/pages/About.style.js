import styled from 'styled-components';

import { headerHeight, sizeQueries } from '../styles/constants';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: ${headerHeight} 8em 0em 8em;
  justify-content: center;
  align-content: center;
  padding-top: ${headerHeight};
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

export const List = styled.ul`
  font-size: 1.2rem;
  font-weight: lighter;
  max-width: 70ch;
  color: ${props => props.theme.color.tertiary};
  &>li{
    width:100%;
    padding-bottom: 1rem;
    margin-bottom: 0.5em;
    list-style: none;
    div{
      display: inline-block;
      margin-left: -2.2em;
      margin-right: 1em;
      font-style:none ;
    }
  }
`;

export const TechsBox = styled.div`
  h3{
    width: 100%;
    text-align: center;
  }
  max-width: 70ch;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  @media ${sizeQueries.sm}{
    font-size: 1rem;
  }
  @media ${sizeQueries.xsm}{
    font-size: 1rem;
  }
  gap: 0.5em;
  color: ${props => props.theme.color.tertiary};
  &>li{
    transition: background-color 0.2s ease-in-out;
    display: inline-block;
    min-width: 20ch;
    text-align: center;
    padding: 0.5em 0;
    border-radius: 20px;
    background-color: ${props => props.theme.backgroundColor.tertiary};
    &:hover{
      color: ${props => props.theme.color.secondary};
      background-color: ${props => props.theme.backgroundColor.secondary};
    }
  }
`;
