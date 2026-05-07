import { useEffect, useRef } from 'react'
import bodyHTML from './bodyHTML.js'
import './styles.css'
import Chart from 'chart.js/auto'

export default function App() {
  const ready = useRef(false)

  useEffect(() => {
    if (ready.current) return
    ready.current = true

    // Expose Chart.js for the non-bundled /public/portfolio.js script.
    window.Chart = Chart

    // ── Step 1: Inject the full portfolio HTML into #root ──────────────────
    const root = document.getElementById('root')
    root.innerHTML = bodyHTML

    // ── Step 2: Apply body styles (cursor:none, overflow:hidden) ──────────
    document.body.style.cursor = 'none'
    document.body.style.overflowX = 'hidden'
    document.body.style.background = '#0d1117'
    document.body.style.color = '#e6edf3'
    document.body.style.fontFamily = "'Inter', system-ui, sans-serif"

    // ── Step 3: Load portfolio.js from /public AFTER DOM is injected ──────
    // portfolio.js is served as a static asset from /public/
    // It contains all interactive logic: loader, cursor, nav, charts,
    // project filter, scroll reveal, case study renderer, contact form.
    const script = document.createElement('script')
    script.src = '/portfolio.js'
    script.async = false
    document.body.appendChild(script)
  }, [])

  // React renders nothing directly — the injected HTML is the entire UI
  return null
}
