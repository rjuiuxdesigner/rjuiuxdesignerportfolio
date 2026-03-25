import React from 'react';

const DashboardMockup = () => (
  <div style={{ width: '100%', borderRadius: 16, border: '1px solid #1e2d3d', overflow: 'hidden', background: '#0d1117' }}>
    <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <linearGradient id="mg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4493f8" stopOpacity=".5"/>
          <stop offset="100%" stopColor="#a371f7" stopOpacity=".5"/>
        </linearGradient>
        <linearGradient id="mg2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4493f8"/>
          <stop offset="100%" stopColor="#3ecfcf"/>
        </linearGradient>
      </defs>
      {/* bg */}
      <rect width="900" height="420" rx="12" fill="#0d1117"/>
      {/* sidebar */}
      <rect x="0" y="0" width="180" height="420" rx="12" fill="#0f1923"/>
      <rect x="180" y="0" width="1" height="420" fill="#1e2d3d"/>
      {/* sidebar logo */}
      <rect x="20" y="20" width="32" height="32" rx="8" fill="url(#mg1)"/>
      <rect x="60" y="26" width="70" height="8" rx="4" fill="#253347"/>
      <rect x="60" y="38" width="50" height="5" rx="2.5" fill="#1e2d3d"/>
      {/* sidebar nav items */}
      {[0,1,2,3,4,5].map(i => {
        const y = 90 + i * 44;
        const active = i === 0;
        return (
          <g key={i}>
            <rect x="12" y={y} width="156" height="34" rx="7" fill={active ? 'rgba(68,147,248,.15)' : 'transparent'}/>
            <rect x="24" y={y+9} width="16" height="16" rx="4" fill={active ? 'rgba(68,147,248,.3)' : 'rgba(255,255,255,.04)'}/>
            <rect x="48" y={y+12} width={active ? 80 : 60+i*5} height="8" rx="4" fill={active ? '#4493f8' : '#253347'}/>
            {active && <rect x="164" y={y} width="4" height="34" rx="2" fill="#4493f8"/>}
          </g>
        );
      })}
      {/* header */}
      <rect x="180" y="0" width="720" height="52" fill="#0d1117"/>
      <rect x="180" y="52" width="720" height="1" fill="#1e2d3d"/>
      <rect x="200" y="18" width="140" height="10" rx="5" fill="#253347"/>
      <rect x="200" y="32" width="80" height="6" rx="3" fill="#1e2d3d"/>
      <rect x="790" y="14" width="60" height="26" rx="7" fill="rgba(68,147,248,.2)" stroke="#4493f8" strokeWidth="1"/>
      <rect x="800" y="22" width="40" height="8" rx="4" fill="#4493f8"/>
      <circle cx="762" cy="27" r="13" fill="#141d2b" stroke="#1e2d3d" strokeWidth="1"/>
      <circle cx="762" cy="27" r="5" fill="#253347"/>
      {/* KPI cards */}
      {[0,1,2,3].map(i => {
        const x = 200 + i * 168;
        const colors = ['#4493f8','#3ecfcf','#a371f7','#3fb950'];
        const c = colors[i];
        return (
          <g key={i}>
            <rect x={x} y="72" width="152" height="76" rx="10" fill="#141d2b" stroke="#1e2d3d" strokeWidth="1"/>
            <rect x={x+14} y="86" width="18" height="18" rx="5" fill={c+'22'}/>
            <rect x={x+36} y="90" width="55" height="7" rx="3.5" fill="#253347"/>
            <rect x={x+14} y="114" width="70" height="12" rx="6" fill={c+'cc'}/>
            <rect x={x+92} y="88" width="46" height="22" rx="5" fill={c+'11'}/>
          </g>
        );
      })}
      {/* Bar chart card */}
      <rect x="200" y="162" width="440" height="196" rx="10" fill="#141d2b" stroke="#1e2d3d" strokeWidth="1"/>
      <rect x="218" y="178" width="120" height="9" rx="4.5" fill="#253347"/>
      <rect x="218" y="192" width="70" height="6" rx="3" fill="#1e2d3d"/>
      {[0,1,2,3,4,5,6].map(i => {
        const barX = 228 + i * 52;
        const heights = [80,120,60,100,140,90,110];
        const barColors = ['#4493f8','#3ecfcf','#4493f8','#a371f7','#4493f8','#3ecfcf','#3fb950'];
        return <rect key={i} x={barX} y={320-heights[i]} width="32" height={heights[i]} rx="4" fill={barColors[i]} opacity=".7"/>;
      })}
      <line x1="218" y1="322" x2="626" y2="322" stroke="#1e2d3d" strokeWidth="1"/>
      {/* Donut card */}
      <rect x="654" y="162" width="246" height="196" rx="10" fill="#141d2b" stroke="#1e2d3d" strokeWidth="1"/>
      <rect x="672" y="178" width="90" height="9" rx="4.5" fill="#253347"/>
      <circle cx="777" cy="270" r="52" fill="none" stroke="#1e2d3d" strokeWidth="18"/>
      <circle cx="777" cy="270" r="52" fill="none" stroke="url(#mg2)" strokeWidth="18" strokeDasharray="165 163" strokeDashoffset="-20" strokeLinecap="round"/>
      <circle cx="777" cy="270" r="52" fill="none" stroke="#a371f7" strokeWidth="18" strokeDasharray="80 248" strokeDashoffset="-185" strokeLinecap="round"/>
      {[['#4493f8', 0],['#3ecfcf', 1],['#a371f7', 2]].map(([c, i]) => (
        <g key={i}>
          <rect x="672" y={196+i*22} width="8" height="8" rx="2" fill={c}/>
          <rect x="686" y={198+i*22} width="55" height="6" rx="3" fill="#253347"/>
        </g>
      ))}
      {/* Bottom table */}
      <rect x="200" y="368" width="700" height="44" rx="10" fill="#141d2b" stroke="#1e2d3d" strokeWidth="1"/>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={218+i*140} y="382" width={[120,80,90,70,100][i]} height="7" rx="3.5" fill={i===0?'#253347':'#1e2d3d'}/>
      ))}
    </svg>
  </div>
);

export default DashboardMockup;
