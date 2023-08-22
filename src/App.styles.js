import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor.primary};
  color: ${props => props.theme.color.primary};
  min-height: 100vh;
  font-weight: bold;
  z-index: -2;
  position: relative;
`;
