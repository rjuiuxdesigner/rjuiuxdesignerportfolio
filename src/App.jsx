import { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ImpactDashboard from './components/ImpactDashboard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import { useGlobalReveal } from './hooks/useReveal';

// Custom cursor
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    let raf;
    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = Math.round(ring.current.x) + 'px';
        ringRef.current.style.top  = Math.round(ring.current.y) + 'px';
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const hoverEls = 'a,button,.pcard,.nav-cta,.btn-primary,.btn-secondary,[role="button"]';
    const addHov = e => { if (e.target.closest(hoverEls)) document.body.classList.add('hov'); };
    const remHov = () => document.body.classList.remove('hov');
    document.addEventListener('mouseover', addHov);
    document.addEventListener('mouseout', remHov);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', addHov);
      document.removeEventListener('mouseout', remHov);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"/>
      <div ref={ringRef} className="cursor-ring"/>
    </>
  );
};

// Loader
const Loader = ({ onDone }) => {
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 22;
      if (p >= 100) {
        p = 100;
        clearInterval(t);
        setTimeout(() => { setGone(true); onDone(); }, 300);
      }
      setPct(Math.round(p));
    }, 80);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`loader${gone ? ' gone' : ''}`}>
      <div className="ld-brand">RJ<em>.</em></div>
      <div className="ld-track">
        <div className="ld-bar" style={{ width: pct + '%' }}/>
      </div>
      <div className="ld-pct">{pct}%</div>
    </div>
  );
};

// Home page — all sections
const HomePage = ({ onOpenCS }) => {
  useGlobalReveal();
  return (
    <>
      <Hero onViewProjects={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}/>
      <About/>
      <Experience/>
      <Projects onOpenCS={onOpenCS}/>
      <ImpactDashboard/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
};

// ── APP ROOT ──
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [page, setPage]   = useState('home');   // 'home' | 'case'
  const [csKey, setCsKey] = useState(null);

  const openCS = (key) => {
    setCsKey(key);
    setPage('case');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setPage('home');
    setCsKey(null);
    setTimeout(() => window.scrollTo(0, 0), 50);
  };

  return (
    <>
      <Cursor/>
      {!loaded && <Loader onDone={() => setLoaded(true)}/>}
      <Nav onContact={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}/>

      {page === 'home'
        ? <HomePage onOpenCS={openCS}/>
        : <CaseStudy csKey={csKey} onBack={goHome} onNavigate={openCS}/>
      }
    </>
  );
}
