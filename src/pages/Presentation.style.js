import styled from 'styled-components';

import { headerHeight, sizeQueries } from '../styles/constants';

export const Container = styled.div`
  min-height: calc(100vh - ${headerHeight});
  padding: ${headerHeight} 2em 0em 2em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  @media ${sizeQueries.xsm}{
    padding: ${headerHeight} 1em 0 1em;
  }
`;

export const TitleContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: grid;
  align-self: last baseline;
  grid-template-rows: 20px 60px auto;
  grid-template-columns: 80px 1fr;
  column-gap: 1em;
  &>div{
    margin-left: 1em;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  object-fit: cover;
  filter: grayscale(0%);
  grid-column: 1/2;
  grid-row: 1/4;
`;

export const PreTitle = styled.h3`
  margin: 0;
  width: 100%;
  grid-column: 2/3;
  grid-row: 1/2;
  color: ${props => props.theme.color.tertiary};
`;

export const Title = styled.h1`
  width: 100%;
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 0;
  color: ${props => props.theme.color.primary};
  font-size: 3rem;
  @media ${sizeQueries.sm}{
    font-size: 2rem;
  }
  @media ${sizeQueries.xsm}{
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  grid-column: 2/3;
  grid-row: 3/4;
  margin:0;
  text-align: right;
  font-weight: bolder;
  color: ${props => props.theme.color.tertiary};
  @media ${sizeQueries.sm}{
    font-size: 1rem;
  }
  @media ${sizeQueries.xsm}{
    font-size: .9rem;
  }
`;

export const DropContainer = styled.main`
  align-self: baseline;
  max-width: 90ch;
  `;

export const Drop = styled.ul`
  list-style-type: '- ';
  text-align: left;
  font-weight: lighter;
  font-size: 1.2rem;
  color: ${props => props.theme.color.tertiary};
`;
