import styled from 'styled-components';

import { BOX_SIZE } from './constants.js';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  div{
    background-color: ${props => props.theme.color.tertiary};
    width: ${BOX_SIZE}px;
    height: ${BOX_SIZE}px;
    position: fixed;
    bottom: -${BOX_SIZE}px;
    opacity: 0.05;
    animation-name: rising;
    animation-timing-function:linear ;
    animation-iteration-count: infinite ;
    @keyframes rising {
      0%{
        transform: translateY(0);
        opacity: 0.05
      }
      100%{
        transform: translateY(-100vh) rotate(100deg);
        opacity: 0;
      }
    }
  }
`;
