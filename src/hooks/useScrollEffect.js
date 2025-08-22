import { useState, useEffect } from 'react';

const useScrollEffect = (ref) => {
  const [hhProgress, setHhProgress] = useState(0);
  const [hhTranslateY, setHhTranslateY] = useState(0);
  const SCROLL_LEN_VH = 110;

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const el = ref.current;
      const sectionTop = el.offsetTop;
      const sectionHeight = el.offsetHeight;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const denom = Math.max(1, sectionHeight - vh);
      const p = Math.min(1, Math.max(0, (scrollY - sectionTop) / denom));
      setHhProgress(p);
      setHhTranslateY((0.30 - 0.40 * p) * vh);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);

  return { hhProgress, hhTranslateY };
};

export default useScrollEffect;