import { useState } from 'react';
import { PROJECTS } from '../data/projects';
import Icon from './Icon';

const FILTERS = ['all','healthcare','enterprise','agritech','saas','web','mobile'];

const ProjectCard = ({ proj, onClick }) => (
  <div
    className="rv"
    onClick={() => onClick(proj.id)}
    style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:14, overflow:'hidden', cursor:'pointer', transition:'transform .25s, box-shadow .25s, border-color .25s', display:'flex', flexDirection:'column' }}
    onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 20px 56px rgba(0,0,0,.45)'; e.currentTarget.style.borderColor='var(--border2)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; e.currentTarget.style.borderColor='var(--border)'; }}
  >
    {/* Top */}
    <div style={{ padding:'22px 18px 16px', position:'relative', minHeight:158, display:'flex', flexDirection:'column', justifyContent:'flex-end', borderBottom:'1px solid var(--border)' }}>
      <div style={{ width:44, height:44, borderRadius:10, background:proj.iconBg, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:12, flexShrink:0 }}>
        <Icon name={proj.icon} size={24} color={proj.iconColor} strokeWidth={1.5}/>
      </div>
      <div style={{ position:'absolute', top:16, right:14, display:'flex', gap:3, flexWrap:'wrap', justifyContent:'flex-end', maxWidth:120, zIndex:2 }}>
        {proj.platforms.map(p => (
          <span key={p} style={{ fontSize:9, fontWeight:600, padding:'2px 7px', borderRadius:20, background:'rgba(255,255,255,.05)', border:'1px solid var(--border2)', color:'var(--t3)' }}>{p}</span>
        ))}
      </div>
      <div style={{ fontSize:22, fontWeight:900, letterSpacing:'-.025em', lineHeight:1, color:'var(--t1)', position:'relative', zIndex:1 }}>{proj.title}</div>
      <div style={{ height:3, width:40, borderRadius:2, background:proj.accentColor, marginTop:10 }}/>
    </div>

    {/* Bottom */}
    <div style={{ padding:'16px 18px 20px', display:'flex', flexDirection:'column', flex:1 }}>
      <div style={{ fontSize:10, fontWeight:600, color:'var(--t3)', textTransform:'uppercase', letterSpacing:'.07em', marginBottom:6 }}>{proj.client}</div>
      <div style={{ fontSize:13, color:'var(--t2)', lineHeight:1.65, marginBottom:12, flex:1 }}>{proj.desc}</div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:12 }}>
        {proj.tags.map(t => (
          <span key={t} style={{ fontSize:10, padding:'3px 9px', borderRadius:20, border:'1px solid var(--border2)', color:'var(--t3)' }}>{t}</span>
        ))}
      </div>
      <div style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:12, fontWeight:600, color:'var(--blue)', marginTop:'auto' }}>
        View Case Study →
      </div>
    </div>
  </div>
);

const Projects = ({ onOpenCS }) => {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat.includes(active));

  return (
    <section id="projects" style={{ background:'var(--bg-secondary)' }}>
      <div className="wrap">
        <div className="sec-hd rv">
          <div className="sec-title">Featured <span className="accent">Projects</span></div>
          <div className="sec-sub">Explore my portfolio of digital products across multiple industries</div>
        </div>

        {/* Filter */}
        <div className="rv d1" style={{ display:'flex', gap:4, background:'var(--bg-card)', borderRadius:10, padding:4, width:'max-content', margin:'28px auto 40px' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActive(f)}
              style={{ padding:'7px 16px', borderRadius:7, border:'none', background: active===f ? 'var(--bg-card3)' : 'transparent', color: active===f ? 'var(--t1)' : 'var(--t2)', fontSize:13, fontWeight:500, cursor:'pointer', fontFamily:'var(--f)', transition:'all .15s', textTransform:'capitalize', whiteSpace:'nowrap' }}>
              {f}
            </button>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
          {filtered.map((proj, i) => (
            <ProjectCard key={`${proj.id}-${i}`} proj={proj} onClick={onOpenCS}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
