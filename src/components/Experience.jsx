import Icon from './Icon';

const tudipPills = [
  { label:'STORM II', c:'#4493f8', bg:'rgba(68,147,248,.07)' },
  { label:'Boomcloud', c:'#3ecfcf', bg:'rgba(62,207,207,.07)' },
  { label:'PYVIT', c:'#a371f7', bg:'rgba(163,113,247,.07)' },
  { label:'TMED', c:'#3ecfcf', bg:'rgba(62,207,207,.07)' },
  { label:'MTM', c:'#f0883e', bg:'rgba(240,136,62,.07)' },
  { label:'SyncMetra', c:'#4493f8', bg:'rgba(68,147,248,.07)' },
  { label:'ResolveIT', c:'#f85149', bg:'rgba(248,81,73,.07)' },
];

const agrosonPills = [
  { label:'AgrosonAadhar', c:'#3ecfcf', bg:'rgba(62,207,207,.07)' },
  { label:'AgrosonCare', c:'#3fb950', bg:'rgba(63,185,80,.07)' },
  { label:'Plotplus', c:'#3ecfcf', bg:'rgba(62,207,207,.07)' },
];

const ExpCard = ({ iconName, iconBg, iconColor, company, dateRange, roles, bullets, pills }) => (
  <div className="rv" style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:14, padding:'26px 28px', transition:'border-color .2s' }}
    onMouseEnter={e => e.currentTarget.style.borderColor='var(--border2)'}
    onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}
  >
    <div style={{ width:44, height:44, borderRadius:10, background:iconBg, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 }}>
      <Icon name={iconName} size={22} color={iconColor} strokeWidth={1.6}/>
    </div>
    <div style={{ fontSize:18, fontWeight:800, color:'var(--t1)', letterSpacing:'-.015em', marginBottom:4 }}>{company}</div>
    <div style={{ display:'flex', alignItems:'center', gap:5, fontSize:12, color:'var(--t3)', marginBottom:14 }}>
      <Icon name="calendar" size={12} color="var(--t3)"/> {dateRange}
    </div>
    <div style={{ height:1, background:'var(--border)', margin:'14px 0' }}/>
    {roles.map(({ title, period, green }) => (
      <div key={title} style={{ background:'var(--bg-card3)', borderRadius:8, padding:'10px 14px', marginBottom:10 }}>
        <div style={{ fontSize:13, fontWeight:600, color: green ? 'var(--cyan)' : 'var(--blue)' }}>{title}</div>
        <div style={{ fontSize:11, color:'var(--t3)', marginTop:2 }}>{period}</div>
      </div>
    ))}
    <ul style={{ listStyle:'none', marginTop:12 }}>
      {bullets.map(b => (
        <li key={b} style={{ fontSize:13, color:'var(--t2)', lineHeight:1.7, paddingLeft:14, position:'relative', marginBottom:4 }}>
          <span style={{ position:'absolute', left:0, color:'var(--blue)', fontSize:12, top:1 }}>•</span>{b}
        </li>
      ))}
    </ul>
    <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginTop:16 }}>
      {pills.map(({ label, c, bg }) => (
        <span key={label} style={{ fontSize:11, padding:'4px 12px', borderRadius:20, border:`1px solid ${c}66`, color:c, background:bg }}>{label}</span>
      ))}
    </div>
  </div>
);

const Experience = () => (
  <section id="experience" style={{ background:'var(--bg-primary)' }}>
    <div className="wrap">
      <div className="sec-hd rv">
        <div className="sec-title">Work <span className="accent">Experience</span></div>
        <div className="sec-bar"/>
        <div className="sec-sub">My professional journey designing impactful digital products</div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginTop:48 }}>
        <ExpCard
          iconName="building" iconBg="rgba(68,147,248,.12)" iconColor="#4493f8"
          company="Tudip Digital" dateRange="Nov 2023 – Present"
          roles={[
            { title:'UI UX Design Consultant (L1)', period:'Apr 2024 – Present' },
            { title:'Associate UI UX Designer (L1)', period:'Nov 2023 – Apr 2024' },
          ]}
          bullets={[
            'Designed enterprise-level dashboards and admin panels for Fortune 500 clients',
            'Built and maintained comprehensive design systems for scalability',
            'Collaborated with cross-functional teams in Agile sprints',
            'Conducted user research and usability testing to inform design decisions',
            'Improved user engagement by 40% through intuitive interface redesigns',
          ]}
          pills={tudipPills}
        />
        <ExpCard
          iconName="globe" iconBg="rgba(62,207,207,.12)" iconColor="#3ecfcf"
          company="Agroson Alliance" dateRange="Nov 2022 – Nov 2023"
          roles={[{ title:'UI/UX Designer', period:'1 Year', green: true }]}
          bullets={[
            'Led end-to-end UX design for agri-tech platforms from research to high-fidelity UI',
            'Designed Agroson Aadhar and Agrosoncare platforms serving 10,000+ farmers',
            'Conducted extensive field research to understand farmer needs and pain points',
            'Created mobile-first designs optimized for low-bandwidth rural areas',
            'Worked on Plotplus real estate platform with focus on user journey optimization',
          ]}
          pills={agrosonPills}
        />
      </div>
    </div>
  </section>
);

export default Experience;
