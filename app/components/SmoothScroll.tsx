'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

const SmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = () => {
      gsap.to(window, {
        scrollTo: { y: window.scrollY + 100, autoKill: false },
        duration: 1,
        ease: "power2.inOut"
      });
    };

    window.addEventListener('wheel', smoothScroll);

    return () => {
      window.removeEventListener('wheel', smoothScroll);
    };
  }, []);

  return null; // This component does not render anything
};

export default SmoothScroll; 