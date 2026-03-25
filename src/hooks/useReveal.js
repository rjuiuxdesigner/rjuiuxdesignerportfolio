import { useEffect, useRef } from 'react';

export const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          // also reveal all .rv children
          e.target.querySelectorAll('.rv').forEach(el => el.classList.add('vis'));
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    const el = ref.current;
    if (el) {
      observer.observe(el);
      el.querySelectorAll('.rv').forEach(child => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
};

// Global reveal observer — attach to any section wrapper
export const useGlobalReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('vis'); observer.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    const attach = () => document.querySelectorAll('.rv:not(.vis)').forEach(el => observer.observe(el));
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mo.disconnect(); };
  }, []);
};
