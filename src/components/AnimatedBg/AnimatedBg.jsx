import React from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import { Container } from './AnimatedBg.styles.js';
import { ANIMATION_PERIOD, BOX_SIZE } from './constants.js';

function AnimatedBg ({ numberOfElements }) {
  const wSize = useWindowSize();
  const baseArray = [...Array(numberOfElements)];
  const xPositions = baseArray.map(() =>
    Math.floor(Math.random() * wSize.width / (BOX_SIZE)) * BOX_SIZE
  );
  const xPositionsSet = [...new Set(xPositions)];
  const delays = baseArray.map(() =>
    Math.floor(Math.random() * ANIMATION_PERIOD)
  );
  const durations = baseArray.map(() =>
    ANIMATION_PERIOD + (Math.floor((10 * (Math.random() - 0.5))) / 10)
  );
  const elements = xPositionsSet.map((xPos, index) => (
    {
      delay: delays[index],
      duration: durations[index],
      xPos
    }
  ));
  return (
      <Container>{
        elements.map(el => <div
          key={el.xPos}
          style={{
            left: `${el.xPos}px`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`
          }}></div>)
      }
      </Container >
  );
}

export default AnimatedBg;
