import { useEffect, useRef } from 'react';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, DoughnutController, BarController } from 'chart.js';
import Icon from './Icon';

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, DoughnutController, BarController);

const StatCard = ({ iconName, iconBg, iconColor, num, label }) => (
  <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:14, padding:20 }}>
    <div style={{ width:42, height:42, borderRadius:10, background:iconBg, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:14 }}>
      <Icon name={iconName} size={22} color={iconColor} strokeWidth={1.7}/>
    </div>
    <div style={{ fontSize:28, fontWeight:800, letterSpacing:'-.025em', color:'var(--t1)' }}>{num}</div>
    <div style={{ fontSize:12, color:'var(--t3)', marginTop:2 }}>{label}</div>
  </div>
);

const ProfBar = ({ name, val, gradient }) => (
  <div style={{ marginBottom:15 }}>
    <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, marginBottom:6 }}>
      <span style={{ color:'var(--t2)' }}>{name}</span>
      <span style={{ color:'var(--t3)' }}>{val}%</span>
    </div>
    <div style={{ height:4, background:'rgba(255,255,255,.05)', borderRadius:2, overflow:'hidden' }}>
      <div style={{ height:'100%', width:`${val}%`, borderRadius:2, background:gradient }}/>
    </div>
  </div>
);

const ImpactDashboard = () => {
  const pieRef = useRef(null);
  const barRef = useRef(null);
  const pieChart = useRef(null);
  const barChart = useRef(null);

  useEffect(() => {
    if (pieRef.current && !pieChart.current) {
      pieChart.current = new Chart(pieRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Enterprise','Healthcare','Agri-Tech','SaaS','Other'],
          datasets: [{ data:[35,25,20,15,5], backgroundColor:['#4493f8','#a371f7','#3fb950','#f0883e','#6e7681'], borderWidth:2, borderColor:'#141d2b', hoverOffset:6 }],
        },
        options: { responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false}, tooltip:{callbacks:{label:c=>` ${c.label}: ${c.parsed}%`}}}, cutout:'62%' },
      });
    }
    if (barRef.current && !barChart.current) {
      barChart.current = new Chart(barRef.current, {
        type: 'bar',
        data: {
          labels: ['Web','Mobile','Tablet'],
          datasets: [{ data:[72,48,18], backgroundColor:['rgba(68,147,248,.55)','rgba(62,207,207,.45)','rgba(163,113,247,.4)'], borderRadius:5, borderSkipped:false }],
        },
        options: {
          responsive:true, maintainAspectRatio:false,
          plugins:{ legend:{display:false} },
          scales:{
            x:{ grid:{color:'rgba(255,255,255,.03)'}, ticks:{color:'#484f58',font:{size:11,family:'Inter'}} },
            y:{ grid:{color:'rgba(255,255,255,.03)'}, ticks:{color:'#484f58',font:{size:11,family:'Inter'}}, max:100, beginAtZero:true },
          },
        },
      });
    }
    return () => {
      pieChart.current?.destroy(); pieChart.current = null;
      barChart.current?.destroy(); barChart.current = null;
    };
  }, []);

  const profBars = [
    { name:'Research',           val:95, gradient:'linear-gradient(90deg,var(--blue),var(--purple))' },
    { name:'Wireframing',        val:98, gradient:'linear-gradient(90deg,var(--cyan),var(--blue))' },
    { name:'Design Interaction', val:90, gradient:'linear-gradient(90deg,#3ecfcf,#3fb950)' },
    { name:'Prototyping',        val:92, gradient:'linear-gradient(90deg,var(--purple),#e879f9)' },
    { name:'Testing',            val:88, gradient:'linear-gradient(90deg,#facc15,var(--blue))' },
  ];

  return (
    <section id="impact" style={{ background:'var(--bg-primary)' }}>
      <div className="wrap">
        <div className="sec-hd rv">
          <div className="sec-title">Design Impact <span className="accent-b">Dashboard</span></div>
          <div className="sec-sub">A data-driven view of my design journey and impact across multiple industries</div>
        </div>

        <div className="rv d1" style={{ marginTop:48, display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:14 }}>
          {/* Stats + proficiency */}
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
              <StatCard iconName="building" iconBg="rgba(163,113,247,.12)" iconColor="#a371f7" num="3+" label="Years Experience"/>
              <StatCard iconName="grid"     iconBg="rgba(68,147,248,.12)"   iconColor="#4493f8" num="10+" label="Projects"/>
              <StatCard iconName="building" iconBg="rgba(62,207,207,.12)"   iconColor="#3ecfcf" num="5"   label="Industries"/>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
              <StatCard iconName="image"    iconBg="rgba(250,204,21,.12)"   iconColor="#facc15" num="100+" label="Screens Designed"/>
              <StatCard iconName="map"      iconBg="rgba(244,114,182,.12)"  iconColor="#f472b6" num="20+"  label="User Flows"/>
              <StatCard iconName="lightning" iconBg="rgba(163,113,247,.12)" iconColor="#a371f7" num="50+"  label="Agile Sprints"/>
            </div>
          </div>

          {/* Proficiency bars */}
          <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:14, padding:'22px 24px' }}>
            <h3 style={{ fontSize:14, fontWeight:700, color:'var(--t1)', marginBottom:20 }}>UX Process Proficiency</h3>
            {profBars.map(b => <ProfBar key={b.name} {...b}/>)}
          </div>
        </div>

        {/* Charts */}
        <div className="rv d2" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginTop:14 }}>
          <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:14, padding:22 }}>
            <h3 style={{ fontSize:14, fontWeight:700, color:'var(--t1)', marginBottom:16 }}>Industry Distribution</h3>
            <div style={{ height:170, position:'relative' }}><canvas ref={pieRef}/></div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginTop:14 }}>
              {[['#4493f8','Enterprise 35%'],['#a371f7','Healthcare 25%'],['#3fb950','Agri-Tech 20%'],['#f0883e','SaaS 15%'],['#6e7681','Other 5%']].map(([c,l])=>(
                <div key={l} style={{ display:'flex', alignItems:'center', gap:5, fontSize:11, color:'var(--t3)' }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:c, flexShrink:0 }}/>{l}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:14, padding:22 }}>
            <h3 style={{ fontSize:14, fontWeight:700, color:'var(--t1)', marginBottom:16 }}>Platform Breakdown</h3>
            <div style={{ height:170, position:'relative' }}><canvas ref={barRef}/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
