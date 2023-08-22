import { styled } from 'styled-components';

import { footerHeight } from '../styles/constants.js';

export const Container = styled.div`
    text-align: center;
    height: ${footerHeight};
  span{
    color: ${props => props.theme.color.tertiary};
    font-weight: lighter;
    font-size: 0.8em;
    display: block;
    opacity: 0.5;
  }
  a{
    color: inherit;
  }`;
