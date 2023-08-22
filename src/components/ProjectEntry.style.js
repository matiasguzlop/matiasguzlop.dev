import styled from 'styled-components';

import { sizeQueries } from '../styles/constants.js';
export const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const Entry = styled.article`
  border: 1px dashed ${(props) => props.theme.color.primary};
  border-radius: 20px;
  padding: 0 1em 1em 1em;
  color: ${(props) => props.theme.color.tertiary};
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  max-width: 40ch;
  @media ${sizeQueries.md} {
    max-width: 30ch;
  }
  @media ${sizeQueries.sm} {
    max-width: 50ch;
  }
`;

export const Body = styled.main`
  & > h2 {
    margin-top: 1em;
    margin-bottom: 0;
    display: inline-block;
    span {
      font-size: 1em !important;
    }
  }
  & > h5 {
    margin: 0.2em 0;
    color: ${(props) => props.theme.color.primary};
  }
  & > p {
    font-weight: lighter;
    margin-top: 0.5em;
  }
`;

export const Footer = styled.footer`
  span {
    font-family: monospace;
    font-weight: lighter;
    opacity: 0.6;
  }
`;
