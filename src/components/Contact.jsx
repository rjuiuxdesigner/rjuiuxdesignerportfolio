import { useState } from 'react';
import Icon from './Icon';

const ContactCard = ({ icon, iconBg, iconColor, type, value, href }) => (
  <a href={href} style={{ display:'flex', alignItems:'center', gap:14, background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', textDecoration:'none', transition:'border-color .2s' }}
    onMouseEnter={e=>e.currentTarget.style.borderColor='var(--border2)'}
    onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
    <div style={{ width:40, height:40, borderRadius:10, background:iconBg, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <Icon name={icon} size={20} color={iconColor} strokeWidth={1.7}/>
    </div>
    <div>
      <div style={{ fontSize:11, fontWeight:600, color:'var(--t3)', textTransform:'uppercase', letterSpacing:'.06em', marginBottom:3 }}>{type}</div>
      <div style={{ fontSize:13, fontWeight:600, color:'var(--t1)' }}>{value}</div>
    </div>
  </a>
);

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name:'', email:'', subject:'', message:'' });
  };

  const inputStyle = { background:'var(--bg-input)', border:'1px solid var(--border)', borderRadius:8, padding:'10px 12px', fontSize:13, color:'var(--t1)', fontFamily:'var(--f)', outline:'none', width:'100%', transition:'border-color .2s' };

  return (
    <section id="contact" style={{ background:'var(--bg-secondary)' }}>
      <div className="wrap">
        <div className="sec-hd rv">
          <div className="sec-title">Let's Build Something <span className="accent-b">Meaningful Together</span></div>
          <div className="sec-sub">Have a project in mind? Let's discuss how we can create impactful user experiences together.</div>
        </div>

        <div className="rv d1" style={{ display:'grid', gridTemplateColumns:'360px 1fr', gap:40, marginTop:48, alignItems:'start' }}>
          {/* Left col */}
          <div>
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:16 }}>
              <ContactCard icon="email"    iconBg="rgba(163,113,247,.12)" iconColor="#a371f7" type="Email"    value="rushikesh@email.com"   href="mailto:rushikesh@email.com"/>
              <ContactCard icon="phone"    iconBg="rgba(163,113,247,.15)" iconColor="#a371f7" type="Phone"    value="+91 8275572520"         href="tel:+918275572520"/>
              <ContactCard icon="location" iconBg="rgba(74,222,128,.1)"   iconColor="#4ade80" type="Location" value="Pune, India"            href="#"/>
            </div>
            <div style={{ background:'var(--bg-card2)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:12 }}>
              <div>
                <h4 style={{ fontSize:13, fontWeight:700, color:'var(--t1)' }}>Schedule a Call</h4>
                <p style={{ fontSize:11, color:'var(--t3)', marginTop:2 }}>Book a 30-minute consultation</p>
              </div>
              <div style={{ display:'flex', gap:7, alignItems:'center', flexShrink:0 }}>
                <button style={{ display:'flex', alignItems:'center', gap:5, padding:'8px 14px', background:'var(--blue)', border:'none', borderRadius:8, fontSize:11, fontWeight:600, color:'#fff', cursor:'pointer', fontFamily:'var(--f)', whiteSpace:'nowrap' }}>
                  <Icon name="calendar" size={12} color="#fff"/> Book a Meeting
                </button>
                {['Bē','in'].map(s=>(
                  <button key={s} style={{ width:30, height:30, border:'1px solid var(--border2)', borderRadius:8, background:'transparent', color:'var(--t2)', fontSize:11, fontWeight:700, cursor:'pointer', fontFamily:'var(--f)', display:'flex', alignItems:'center', justifyContent:'center' }}>{s}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:14, padding:'28px 30px' }}>
            <h3 style={{ fontSize:15, fontWeight:700, color:'var(--t1)', marginBottom:22 }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
                {[['name','Name','Your name','text'],['email','Email','your@email.com','email']].map(([k,l,ph,t])=>(
                  <div key={k} style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:14 }}>
                    <label style={{ fontSize:11, fontWeight:600, color:'var(--t3)', letterSpacing:'.04em' }}>{l}</label>
                    <input type={t} placeholder={ph} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} required
                      style={inputStyle}
                      onFocus={e=>e.target.style.borderColor='var(--blue)'}
                      onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                  </div>
                ))}
              </div>
              {[['subject','Subject',"What's this about?",'text'],['message','Message','Tell me about your project...','textarea']].map(([k,l,ph,t])=>(
                <div key={k} style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:14 }}>
                  <label style={{ fontSize:11, fontWeight:600, color:'var(--t3)', letterSpacing:'.04em' }}>{l}</label>
                  {t==='textarea'
                    ? <textarea placeholder={ph} value={form[k]} rows={4} onChange={e=>setForm({...form,[k]:e.target.value})} required
                        style={{...inputStyle, resize:'vertical', minHeight:100}}
                        onFocus={e=>e.target.style.borderColor='var(--blue)'}
                        onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                    : <input type="text" placeholder={ph} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} required
                        style={inputStyle}
                        onFocus={e=>e.target.style.borderColor='var(--blue)'}
                        onBlur={e=>e.target.style.borderColor='var(--border)'}/>
                  }
                </div>
              ))}
              <button type="submit" style={{ width:'100%', padding:12, background: sent ? 'var(--green)' : 'var(--blue)', border:'none', borderRadius:8, fontSize:13, fontWeight:700, color:'#fff', cursor:'pointer', fontFamily:'var(--f)', display:'flex', alignItems:'center', justifyContent:'center', gap:8, transition:'background .3s' }}>
                <Icon name="send" size={14} color="#fff"/>
                {sent ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
