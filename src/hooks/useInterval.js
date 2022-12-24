import { useState, useEffect } from 'react';


export default function useInterval (items = []) {
  const [current, setCurrent] = useState(
    items && items.length > 0 ? 0 : undefined
  );

  const [auto, setAuto] = useState(false);

  const next = () => setCurrent((current + 1) % items.length);
  const prev = () => setCurrent(current ? current - 1 : items.length - 1);
  const reset = () => setCurrent(0);
  const start = _ => setAuto(true);
  const stop = _ => setAuto(false);


useEffect(() => {
    const interval = setInterval(_ => {
      if (auto) {
        next();
      } else {
        // do nothing
      }
    }, 3000);
    return _ => clearInterval(interval);
  });

  return {
    current,
    next,
    prev,
    reset,
    start,
    stop
  };
};