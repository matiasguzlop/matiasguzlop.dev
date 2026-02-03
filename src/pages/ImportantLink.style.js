import styled from 'styled-components';

export const ImportantLink = styled.a`
  width: 400ch;
  color: ${props => props.theme.color.tertiary};
  text-decoration: underline;
  font-size: 2rem;
  text-align: center;
  margin: 1em 0;
  cursor: pointer;
`;
