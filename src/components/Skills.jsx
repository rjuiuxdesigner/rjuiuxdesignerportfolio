import Icon from './Icon';

const coreSkills = [
  { icon:'grid',    color:'#a371f7', bg:'rgba(163,113,247,.12)', name:'UI/UX Design' },
  { icon:'clipboard',color:'#4493f8', bg:'rgba(68,147,248,.12)',  name:'Wireframing' },
  { icon:'lightning',color:'#3ecfcf', bg:'rgba(62,207,207,.12)',  name:'Interaction Design' },
  { icon:'package', color:'#f472b6', bg:'rgba(244,114,182,.12)', name:'Design Systems' },
  { icon:'shield',  color:'#facc15', bg:'rgba(250,204,21,.12)',   name:'User Research' },
  { icon:'shield',  color:'#4ade80', bg:'rgba(74,222,128,.12)',   name:'Usability Testing' },
  { icon:'mobile',  color:'#a371f7', bg:'rgba(163,113,247,.12)',  name:'Mobile App Design' },
];

const tools = [
  { name:'Figma',      icon:'figma',    color:'#4493f8' },
  { name:'Adobe XD',   icon:'grid',     color:'#f0883e' },
  { name:'Illustrator',icon:'image',    color:'#f0883e' },
  { name:'Photoshop',  icon:'image',    color:'#4493f8' },
  { name:'Miro',       icon:'map',      color:'#facc15' },
  { name:'Sketch',     icon:'clipboard',color:'#f0883e' },
  { name:'Lovable',    icon:'heart',    color:'#a371f7' },
  { name:'Readdy',     icon:'shield',   color:'#3ecfcf' },
  { name:'UX Pilot',   icon:'map',      color:'#4493f8' },
  { name:'G.Stitch',   icon:'link',     color:'#3ecfcf' },
  { name:'Make AI',    icon:'refresh',  color:'#a371f7' },
  { name:'Maze',       icon:'shield',   color:'#3fb950' },
  { name:'v0',         icon:'code',     color:'#3ecfcf' },
  { name:'Uizard',     icon:'mobile',   color:'#a371f7' },
  { name:'Emergent',   icon:'lightning',color:'#3fb950' },
  { name:'Zeplin',     icon:'clipboard',color:'#facc15' },
  { name:'Banani',     icon:'image',    color:'#f0883e' },
  { name:'Cloud.AI',   icon:'clipboard',color:'#4493f8' },
  { name:'FigJam',     icon:'clipboard',color:'#facc15' },
  { name:'InVision',   icon:'video',    color:'#f85149' },
  { name:'Jira',       icon:'lightning',color:'#4493f8' },
  { name:'Confluence', icon:'clipboard',color:'#4493f8' },
];

const chips = [
  'Responsive Design','Design Thinking','Agile Methodology','Prototyping',
  'Information Architecture','Accessibility (WCAG)','Cross-platform Design',
  'Component Libraries','User Journey Mapping','A/B Testing',
];

const SkillBox = ({ icon, color, bg, name }) => (
  <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:12, padding:'20px 14px', textAlign:'center', transition:'border-color .2s' }}
    onMouseEnter={e=>e.currentTarget.style.borderColor='var(--border2)'}
    onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
    <div style={{ width:46, height:46, borderRadius:12, background:bg, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 12px' }}>
      <Icon name={icon} size={22} color={color} strokeWidth={1.7}/>
    </div>
    <div style={{ fontSize:12, fontWeight:600, color:'var(--t1)' }}>{name}</div>
  </div>
);

const ToolCard = ({ name, icon, color }) => (
  <div style={{ width:82, background:'var(--bg-card2)', border:'1px solid var(--border)', borderRadius:10, padding:'12px 6px', textAlign:'center', transition:'border-color .2s' }}
    onMouseEnter={e=>e.currentTarget.style.borderColor='var(--border2)'}
    onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
    <div style={{ display:'flex', justifyContent:'center', marginBottom:7 }}>
      <Icon name={icon} size={24} color={color} strokeWidth={1.6}/>
    </div>
    <div style={{ fontSize:10, color:'var(--t3)', lineHeight:1.3 }}>{name}</div>
  </div>
);

const Skills = () => (
  <section id="skills" style={{ background:'var(--bg-secondary)' }}>
    <div className="wrap">
      <div className="sec-hd rv">
        <div className="sec-title">Skills &amp; <span className="accent">Tools</span></div>
        <div className="sec-sub">My expertise and toolkit for creating exceptional digital experiences</div>
      </div>

      <div className="rv" style={{ fontSize:15, fontWeight:600, color:'var(--t1)', textAlign:'center', margin:'36px 0 20px' }}>Core Competencies</div>

      <div className="rv d1" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
        {coreSkills.slice(0,4).map(s=><SkillBox key={s.name} {...s}/>)}
      </div>
      <div className="rv d2" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, maxWidth:'76%', margin:'12px auto 0' }}>
        {coreSkills.slice(4).map(s=><SkillBox key={s.name} {...s}/>)}
      </div>

      <div className="rv d1" style={{ marginTop:36 }}>
        <div style={{ fontSize:15, fontWeight:600, color:'var(--t1)', textAlign:'center', marginBottom:20 }}>Design Tools</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center' }}>
          {tools.map(t=><ToolCard key={t.name} {...t}/>)}
        </div>
      </div>

      <div className="rv d2" style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:14, padding:'28px 32px', marginTop:14 }}>
        <div style={{ fontSize:14, fontWeight:600, color:'var(--t1)', textAlign:'center', marginBottom:18 }}>Additional Expertise</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center' }}>
          {chips.map(c=>(
            <span key={c} style={{ fontSize:12, padding:'6px 14px', borderRadius:20, border:'1px solid var(--border2)', color:'var(--t2)' }}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
