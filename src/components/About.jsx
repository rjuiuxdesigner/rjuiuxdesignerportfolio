import { useReveal } from '../hooks/useReveal';
import Icon from './Icon';

const traits = [
  { icon: 'clipboard', color: '#a371f7', bg: 'rgba(163,113,247,.12)', text: 'Engineering Background with UI/UX Certification' },
  { icon: 'users',     color: '#4493f8', bg: 'rgba(68,147,248,.12)',  text: 'Agile & Collaborative Team Experience' },
  { icon: 'user',      color: '#3ecfcf', bg: 'rgba(62,207,207,.12)',  text: 'User-Centered Design Philosophy' },
  { icon: 'refresh',   color: '#facc15', bg: 'rgba(250,204,21,.12)',  text: 'End-to-End Product Design Expertise' },
];

const About = () => {
  const ref = useReveal();
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="wrap">
        <div className="sec-hd rv" ref={ref}>
          <div className="sec-title">About <span className="accent">Me</span></div>
          <div className="sec-bar"/>
        </div>

        {/* 2-col layout: photo | text */}
        <div style={{ display:'grid', gridTemplateColumns:'300px 1fr', gap:56, marginTop:52, alignItems:'start' }}>
          {/* Photo col */}
          <div className="rv d1">
            <div style={{ width:'100%', aspectRatio:'1/1.05', borderRadius:14, background:'var(--bg-card)', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', background:'linear-gradient(145deg,#161e2e,#0f1923)' }}>
                <img src='src/Assets/About Me Section Image.png' style={{width: '200px'}}/>
              </div>
            </div>
            <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px', marginTop:12, display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:36, height:36, borderRadius:'50%', background:'linear-gradient(135deg,var(--blue),var(--purple))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:800, color:'#fff', flexShrink:0 }}>RJ</div>
              <div>
                <div style={{ fontSize:13, fontWeight:700, color:'var(--t1)' }}>Rushikesh Jagadale</div>
                <div style={{ fontSize:11, color:'var(--t3)', marginTop:2 }}>UI/UX Designer | Product Designer</div>
              </div>
            </div>
          </div>

          {/* Text col */}
          <div className="rv d2">
            <h2 style={{ fontSize:'clamp(14px,1.6vw,18px)', fontWeight:700, lineHeight:1.4, marginBottom:14, color:'var(--t1)' }}>
              I'm a passionate <span style={{ color:'var(--blue)' }}>UI/UX Designer</span> and <span style={{ color:'var(--purple)' }}>Product Designer</span> based in Pune, India, with over 3.5 years of experience creating meaningful digital experiences.
            </h2>
            <p style={{ fontSize:14, color:'var(--t2)', lineHeight:1.8, marginBottom:12 }}>My journey into design began with an <strong style={{ color:'var(--t1)', fontWeight:600 }}>engineering background</strong>, which gives me a unique perspective on technical feasibility. I've complemented this with specialized <strong style={{ color:'var(--t1)', fontWeight:600 }}>UI/UX certifications</strong>.</p>
            <p style={{ fontSize:14, color:'var(--t2)', lineHeight:1.8, marginBottom:12 }}>I've worked across <strong style={{ color:'var(--t1)', fontWeight:600 }}>enterprise dashboards, healthcare applications, SaaS platforms, and agri-tech solutions</strong>, thriving in <strong style={{ color:'var(--t1)', fontWeight:600 }}>Agile environments</strong>.</p>
            <p style={{ fontSize:14, color:'var(--t2)', lineHeight:1.8 }}>My design philosophy centers on understanding users deeply, solving real problems creatively, and creating interfaces that are not just beautiful, but intuitive and accessible to all.</p>
          </div>
        </div>

        {/* Full-width trait cards */}
        <div className="rv d3" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginTop:32 }}>
          {traits.map(({ icon, color, bg, text }) => (
            <div key={text} style={{ display:'flex', alignItems:'flex-start', gap:12, padding:'16px 18px', background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:12, fontSize:13, color:'var(--t2)', lineHeight:1.5, transition:'border-color .2s', cursor:'default' }}
              onMouseEnter={e => e.currentTarget.style.borderColor='var(--border2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}
            >
              <div style={{ width:32, height:32, borderRadius:8, background:bg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <Icon name={icon} size={16} color={color} strokeWidth={1.8}/>
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
