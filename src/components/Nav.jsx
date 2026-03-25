import { useEffect, useState } from 'react';
import Icon from './Icon';

const Nav = ({ onNav, onContact }) => {
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`main-nav${pinned ? ' pinned' : ''}`}>
      <a className="nav-logo" href="#home">RJ<b>.</b></a>
      <div className="nav-links">
        {['about','experience','projects','skills','contact'].map(id => (
          <a key={id} onClick={() => scrollTo(id)} style={{ textTransform: 'capitalize' }}>{id}</a>
        ))}
      </div>
      <div className="nav-right">
        <button className="nav-theme" title="Toggle theme">
          <Icon name="sun" size={16} color="currentColor"/>
        </button>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>Get in Touch</button>
      </div>
    </nav>
  );
};

export default Nav;
