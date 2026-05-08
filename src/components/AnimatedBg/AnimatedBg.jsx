import React, { useMemo } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import { Container } from './AnimatedBg.styles.js';
import { ANIMATION_PERIOD, BOX_SIZE } from './constants.js';

function generateElements (numberOfElements, windowWidth) {
  const baseArray = [...Array(numberOfElements)];
  const xPositions = baseArray.map(() =>
    Math.floor(Math.random() * (windowWidth || 1920) / (BOX_SIZE)) * BOX_SIZE
  );
  const xPositionsSet = [...new Set(xPositions)];
  const delays = baseArray.map(() =>
    Math.floor(Math.random() * ANIMATION_PERIOD)
  );
  const durations = baseArray.map(() =>
    ANIMATION_PERIOD + (Math.floor((10 * (Math.random() - 0.5))) / 10)
  );
  return xPositionsSet.map((xPos, index) => ({
    delay: delays[index],
    duration: durations[index],
    xPos
  }));
}

function AnimatedBg ({ numberOfElements }) {
  const wSize = useWindowSize();
  const elements = useMemo(
    () => generateElements(numberOfElements, wSize.width),
    [numberOfElements, wSize.width]
  );
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
