import { useEffect, useState } from 'react';

function useWindowSize () {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    let timeout;
    function handleResize () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 150);
    }
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeout);
    };
  }, []);
  return windowSize;
}
export default useWindowSize;
