import { useEffect } from 'react';
import { CASE_STUDIES } from '../data/projects';
import DashboardMockup from './DashboardMockup';
import Icon from './Icon';

const pill = (text, color, bg) => (
  <div style={{ display:'inline-flex', alignItems:'center', gap:5, padding:'4px 12px', borderRadius:20, background:bg, border:`1px solid ${color}40`, fontSize:10, color, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', marginBottom:18 }}>
    <span style={{ width:5, height:5, borderRadius:'50%', background:color, display:'inline-block' }}/>{text}
  </div>
);

const SectionLabel = ({ text, color }) => (
  <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
    <div style={{ width:3, height:18, background:color, borderRadius:2 }}/>
    <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em', color }}>{text}</div>
  </div>
);

const ProbCard = ({ text }) => (
  <div style={{ background:'rgba(248,81,73,.04)', border:'1px solid rgba(248,81,73,.2)', borderRadius:12, padding:'14px 16px', display:'flex', gap:8, alignItems:'flex-start' }}>
    <span style={{ width:7, height:7, borderRadius:'50%', background:'#f85149', flexShrink:0, marginTop:4 }}/>
    <span style={{ fontSize:13, color:'var(--t2)', lineHeight:1.55 }}>{text}</span>
  </div>
);

const StepCard = ({ n, color, h, p }) => (
  <div style={{ display:'flex', gap:16, marginBottom:18 }}>
    <div style={{ width:34, height:34, borderRadius:'50%', border:`1.5px solid ${color}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:800, color, flexShrink:0 }}>{n}</div>
    <div>
      <h4 style={{ fontSize:13, fontWeight:700, color:'var(--t1)', marginBottom:4 }}>{h}</h4>
      <p style={{ fontSize:12, color:'var(--t2)', lineHeight:1.65 }}>{p}</p>
    </div>
  </div>
);

const FeatCard = ({ h, p, color }) => (
  <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:13, padding:18, transition:'border-color .2s' }}
    onMouseEnter={e=>e.currentTarget.style.borderColor='var(--border2)'}
    onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
    <div style={{ width:36, height:36, borderRadius:9, background:`${color}18`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:10 }}>
      <div style={{ width:12, height:12, borderRadius:2, background:color, opacity:.8 }}/>
    </div>
    <div style={{ fontSize:14, fontWeight:700, color:'var(--t1)', marginBottom:5 }}>{h}</div>
    <div style={{ fontSize:12, color:'var(--t3)', lineHeight:1.6 }}>{p}</div>
  </div>
);

const ChalCard = ({ c, s }) => (
  <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:12, padding:'18px 20px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
    <div>
      <div style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:'#f85149', marginBottom:6 }}>Challenge</div>
      <div style={{ fontSize:12, color:'var(--t2)', lineHeight:1.65 }}>{c}</div>
    </div>
    <div>
      <div style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', color:'#3fb950', marginBottom:6 }}>Solution</div>
      <div style={{ fontSize:12, color:'var(--t2)', lineHeight:1.65 }}>{s}</div>
    </div>
  </div>
);

const OutcomeCard = ({ n, l, c }) => (
  <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:12, padding:20, textAlign:'center', transition:'all .2s' }}
    onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.transform='translateY(-2px)'; }}
    onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform=''; }}>
    <div style={{ fontSize:32, fontWeight:900, letterSpacing:'-.03em', lineHeight:1, marginBottom:6, color:c }}>{n}</div>
    <div style={{ fontSize:11, color:'var(--t3)', lineHeight:1.5 }}>{l}</div>
  </div>
);

const MetaBox = ({ label, value }) => (
  <div style={{ background:'rgba(20,29,43,.7)', border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px' }}>
    <div style={{ fontSize:10, color:'var(--t3)', fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em', marginBottom:4 }}>{label}</div>
    <div style={{ fontSize:14, fontWeight:700, color:'var(--t1)' }}>{value}</div>
  </div>
);

const CaseStudy = ({ csKey, onBack, onNavigate }) => {
  const cs = CASE_STUDIES[csKey];

  useEffect(() => { window.scrollTo(0, 0); }, [csKey]);

  if (!cs) return null;

  const { accentColor, accentBg, heroGrad, title, subtitle, caseBadge,
          client, role, platform, industry,
          prevKey, prevTitle, nextKey, nextTitle,
          overview, goal, problems, roles, steps,
          features, challenges, outcomes, skills,
          index, total } = cs;

  const sec = { padding:'56px 0' };
  const wrap = { maxWidth:1100, margin:'0 auto', padding:'0 40px' };
  const h2style = { fontSize:'clamp(24px,3.5vw,38px)', fontWeight:800, letterSpacing:'-.03em', marginBottom:12 };

  return (
    <div style={{ paddingTop:52 }}>

      {/* ── HERO ── */}
      <div style={{ padding:'60px 40px 48px', background:`linear-gradient(160deg,#0d1117 0%,${heroGrad} 100%)`, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse 50% 60% at 85% 10%,${accentBg},transparent 65%)`, pointerEvents:'none' }}/>
        <div style={{ maxWidth:1100, margin:'0 auto', position:'relative' }}>
          {pill(caseBadge, accentColor, accentBg)}
          <h1 style={{ fontSize:'clamp(44px,7vw,82px)', fontWeight:900, letterSpacing:'-.04em', lineHeight:.92, marginBottom:14, color:'var(--t1)' }}>{title}</h1>
          <p style={{ fontSize:15, color:'var(--t2)', maxWidth:680, lineHeight:1.7, marginBottom:28 }}>{subtitle}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
            <MetaBox label="Role" value={role}/>
            <MetaBox label="Platform" value={platform}/>
            <MetaBox label="Industry" value={industry}/>
            <MetaBox label="Client" value={client}/>
          </div>
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <div style={{ ...sec, background:'var(--bg-secondary)' }}>
        <div style={wrap}>
          <SectionLabel text="Project Overview" color={accentColor}/>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
            <div>
              <p style={{ fontSize:14, color:'var(--t2)', lineHeight:1.8, marginBottom:12 }}>{overview}</p>
            </div>
            <div style={{ background:'var(--bg-card)', border:`1px solid ${accentColor}22`, borderRadius:13, padding:20 }}>
              <div style={{ fontSize:15, fontWeight:700, color:'var(--t1)', marginBottom:8 }}>🎯 The Goal</div>
              <p style={{ fontSize:13, color:'var(--t2)', lineHeight:1.7 }}>{goal}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROBLEMS ── */}
      <div style={{ ...sec, background:'var(--bg-primary)' }}>
        <div style={wrap}>
          <SectionLabel text="Problem Statement" color="#f85149"/>
          <h2 style={h2style}>Key Challenges Identified</h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
            {problems.map((p,i) => <ProbCard key={i} text={p}/>)}
          </div>
        </div>
      </div>

      {/* ── MY ROLE ── */}
      <div style={{ ...sec, background:'var(--bg-secondary)' }}>
        <div style={wrap}>
          <SectionLabel text="My Role & Responsibilities" color={accentColor}/>
          <h2 style={h2style}>What I Designed</h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
            {roles.map((r,i) => (
              <div key={i} style={{ display:'flex', gap:8, alignItems:'flex-start', background:'var(--bg-card)', borderLeft:`2px solid ${accentColor}`, borderRadius:'0 8px 8px 0', padding:'10px 12px', fontSize:12, color:'var(--t2)', lineHeight:1.5 }}>
                <span style={{ fontSize:14, color:accentColor, flexShrink:0 }}>→</span>{r}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <div style={{ ...sec, background:'var(--bg-primary)' }}>
        <div style={wrap}>
          <SectionLabel text="Design Process" color="#3fb950"/>
          <h2 style={h2style}>How I Approached It</h2>
          <div style={{ marginTop:14 }}>
            {steps.map((s,i) => <StepCard key={i} {...s}/>)}
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div style={{ ...sec, background:'var(--bg-secondary)' }}>
        <div style={wrap}>
          <SectionLabel text="Key Features" color={accentColor}/>
          <h2 style={h2style}>Solutions That Drive Impact</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginTop:16 }}>
            {features.map((f,i) => <FeatCard key={i} {...f}/>)}
          </div>
        </div>
      </div>

      {/* ── CHALLENGES ── */}
      <div style={{ ...sec, background:'var(--bg-primary)' }}>
        <div style={wrap}>
          <SectionLabel text="UX Challenges & Solutions" color="#f0883e"/>
          <h2 style={h2style}>Problems I Solved</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:16 }}>
            {challenges.map((c,i) => <ChalCard key={i} {...c}/>)}
          </div>
        </div>
      </div>

      {/* ── OUTCOMES ── */}
      <div style={{ ...sec, background:'var(--bg-secondary)' }}>
        <div style={wrap}>
          <SectionLabel text="Impact & Outcomes" color="#3fb950"/>
          <h2 style={h2style}>Measurable Results</h2>
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${outcomes.length},1fr)`, gap:12, marginTop:16 }}>
            {outcomes.map((o,i) => <OutcomeCard key={i} {...o}/>)}
          </div>
          <div style={{ marginTop:16 }}>
            <div style={{ fontSize:12, fontWeight:700, color:'var(--t3)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:10 }}>UX Skills Applied</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {skills.map(s => (
                <span key={s} style={{ fontSize:11, padding:'5px 12px', borderRadius:20, border:'1px solid var(--border2)', color:'var(--t2)' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOCKUP ── */}
      <div style={{ ...sec, background:'var(--bg-primary)' }}>
        <div style={wrap}>
          <SectionLabel text="User Interface" color={accentColor}/>
          <h2 style={{ ...h2style, marginBottom:20 }}>Mock-up Designs</h2>
          <DashboardMockup/>
        </div>
      </div>

      {/* ── BOTTOM NAV ── */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'24px 40px', borderTop:'1px solid var(--border)', background:'var(--bg-secondary)' }}>
        {prevKey
          ? <button onClick={()=>onNavigate(prevKey)} style={{ display:'flex', alignItems:'center', gap:8, background:'transparent', border:'none', cursor:'pointer', fontFamily:'var(--f)', color:'var(--t2)', transition:'color .2s' }}
              onMouseEnter={e=>e.currentTarget.style.color='var(--t1)'}
              onMouseLeave={e=>e.currentTarget.style.color='var(--t2)'}>
              <span style={{ fontSize:18 }}>←</span>
              <div>
                <span style={{ display:'block', fontSize:10, color:'var(--t3)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:2 }}>Previous</span>
                <span style={{ display:'block', fontSize:13, fontWeight:700 }}>{prevTitle}</span>
              </div>
            </button>
          : <div/>
        }
        <div style={{ fontSize:12, color:'var(--t3)' }}>{index}/{total}</div>
        {nextKey
          ? <button onClick={()=>onNavigate(nextKey)} style={{ display:'flex', alignItems:'center', gap:8, background:'transparent', border:'none', cursor:'pointer', fontFamily:'var(--f)', color:'var(--t2)', textAlign:'right', transition:'color .2s' }}
              onMouseEnter={e=>e.currentTarget.style.color='var(--t1)'}
              onMouseLeave={e=>e.currentTarget.style.color='var(--t2)'}>
              <div>
                <span style={{ display:'block', fontSize:10, color:'var(--t3)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:2 }}>Next</span>
                <span style={{ display:'block', fontSize:13, fontWeight:700 }}>{nextTitle}</span>
              </div>
              <span style={{ fontSize:18 }}>→</span>
            </button>
          : <div/>
        }
      </div>

      {/* ── CTA ── */}
      <div style={{ padding:'48px 40px', textAlign:'center', background:'var(--bg-primary)' }}>
        <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:16, padding:40, maxWidth:600, margin:'0 auto' }}>
          <h3 style={{ fontSize:22, fontWeight:800, marginBottom:8 }}>Want to see more of my work?</h3>
          <p style={{ fontSize:13, color:'var(--t3)', maxWidth:420, margin:'0 auto 24px', lineHeight:1.7 }}>Explore other case studies showcasing user research, design systems, and product strategy.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center' }}>
            <button onClick={onBack} style={{ padding:'11px 22px', background:'var(--blue)', borderRadius:8, fontSize:13, fontWeight:700, color:'#fff', border:'none', cursor:'pointer', fontFamily:'var(--f)' }}>
              View All Projects →
            </button>
            <button onClick={()=>{ onBack(); setTimeout(()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}),100); }}
              style={{ padding:'11px 22px', background:'transparent', borderRadius:8, fontSize:13, fontWeight:600, color:'var(--t2)', border:'1px solid var(--border2)', cursor:'pointer', fontFamily:'var(--f)' }}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CaseStudy;
