import Icon from './Icon';

const Hero = ({ onViewProjects }) => (
  <section className="hero" id="home" style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'80px 40px 100px', position:'relative', overflow:'hidden' }}>
    {/* Glows */}
    <div style={{ position:'absolute', width:700, height:700, top:-150, right:-200, background:'radial-gradient(circle,rgba(163,113,247,.12) 0%,transparent 65%)', pointerEvents:'none' }}/>
    <div style={{ position:'absolute', width:500, height:500, bottom:-100, left:-100, background:'radial-gradient(circle,rgba(68,147,248,.08) 0%,transparent 65%)', pointerEvents:'none' }}/>

    <div className="rv" style={{ display:'inline-flex', alignItems:'center', padding:'6px 18px', borderRadius:20, border:'1px solid rgba(68,147,248,.3)', background:'rgba(68,147,248,.07)', fontSize:13, color:'var(--blue)', marginBottom:28, animation:'fadeUp .6s .05s both' }}>
      UI/UX Designer / Product Designer
    </div>

    <h1 className="rv" style={{ fontSize:'clamp(40px,5.5vw,72px)', fontWeight:800, lineHeight:1.1, letterSpacing:'-.035em', marginBottom:20, animation:'fadeUp .7s .1s both' }}>
      Designing Meaningful<br/>
      <span style={{ background:'linear-gradient(135deg,#4493f8 0%,#a371f7 50%,#79c0ff 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Digital Experiences</span><br/>
      That Solve Real Problems
    </h1>

    <p className="rv" style={{ fontSize:16, color:'var(--t2)', lineHeight:1.7, maxWidth:660, marginBottom:36, animation:'fadeUp .7s .18s both' }}>
      3.5+ years of experience crafting user-centered designs for enterprise, CRM, healthcare, SaaS, and agri-tech products. Transforming complex problems into intuitive, delightful solutions.
    </p>

    <div className="rv" style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', animation:'fadeUp .7s .25s both' }}>
      <button className="btn-primary" onClick={onViewProjects}>View Projects →</button>
      <a className="btn-secondary" href="#">
        <Icon name="download" size={14} color="currentColor"/> Download Resume
      </a>
    </div>

    <div className="rv" style={{ display:'flex', gap:24, justifyContent:'center', flexWrap:'wrap', marginTop:24, animation:'fadeUp .7s .32s both' }}>
      {[
        { icon: 'location', text: 'Pune, India' },
        { icon: 'phone', text: '8275572520' },
        { icon: 'email', text: 'rushikesh@email.com' },
      ].map(({ icon, text }) => (
        <div key={text} style={{ display:'flex', alignItems:'center', gap:7, fontSize:13, color:'var(--t3)' }}>
          <Icon name={icon} size={14} color="var(--t3)"/> {text}
        </div>
      ))}
      <div style={{ display:'flex', alignItems:'center', gap:7, fontSize:13, color:'var(--t3)' }}>
        <span style={{ fontSize:13, fontWeight:700 }}>Bē</span> /rushikeshjagadale
      </div>
    </div>

    {/* Bottom border */}
    <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent 0%,var(--border) 20%,var(--border) 80%,transparent 100%)' }}/>

    <style>{`
      @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:none; } }
    `}</style>
  </section>
);

export default Hero;
