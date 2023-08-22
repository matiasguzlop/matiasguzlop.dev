import styled from 'styled-components';

import MainButton from './MainButton.jsx';

export const Button = styled(MainButton)`
  display: block;
  font-family: monospace;
  font-size: 1rem;
  margin: 5em auto;
    &>i{
      margin: 0 auto;
      position: relative;
      animation: floating alternate infinite 0.5s ease-in-out;
      @keyframes floating {
        0%{
          transform: translateY(6px);
        };
        100%{
          transform: translateY(0px);
        }
      }
    }
`;
