import { useState, useEffect } from 'react';

export default function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return scrollPosition;
};