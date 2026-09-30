import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { businessUnits } from '../content/site.js'
import './GroupWheel.css'

// Colours taken from the original "Our Group" wheel
const colors = ['#76a08f', '#3f6456', '#124633', '#1f5a5a', '#134346', '#475359', '#333e48']

const CX = 200
const CY = 200
const R_OUT = 190
const R_IN = 92
const GAP = 2.2 // degrees

const polar = (r, deg) => {
  const a = ((deg - 90) * Math.PI) / 180
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)]
}

function segmentPath(start, end) {
  const [x1, y1] = polar(R_OUT, start)
  const [x2, y2] = polar(R_OUT, end)
  const [x3, y3] = polar(R_IN, end)
  const [x4, y4] = polar(R_IN, start)
  return `M${x1},${y1} A${R_OUT},${R_OUT} 0 0 1 ${x2},${y2} L${x3},${y3} A${R_IN},${R_IN} 0 0 0 ${x4},${y4} Z`
}

export default function GroupWheel() {
  const [active, setActive] = useState(null)
  const step = 360 / businessUnits.length

  return (
    <div className="wheel">
      <svg className="wheel__svg" viewBox="0 0 400 400" role="img" aria-label="The 7 Business Units of the PRIMA group">
        {businessUnits.map((bu, i) => {
          const start = i * step + GAP / 2
          const end = start + step - GAP
          const [lx, ly] = polar((R_OUT + R_IN) / 2, start + (step - GAP) / 2)
          return (
            <g
              key={bu.name}
              className={`wheel__seg ${active === i ? 'is-active' : ''} ${active !== null && active !== i ? 'is-dim' : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <path d={segmentPath(start, end)} fill={colors[i]} />
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central">{String(i + 1).padStart(2, '0')}</text>
            </g>
          )
        })}
        <circle cx={CX} cy={CY} r={R_IN - 10} fill="#2f7bc4" />
        <text x={CX} y={CY + 6} textAnchor="middle" dominantBaseline="central" className="wheel__phi">φ</text>
      </svg>

      <ol className="wheel__list">
        {businessUnits.map((bu, i) => {
          const content = (
            <>
              <span className="wheel__swatch" style={{ background: colors[i] }}>{String(i + 1).padStart(2, '0')}</span>
              <span className="wheel__name">{bu.name}</span>
              {bu.slug && <ArrowRight size={16} className="wheel__arrow" />}
            </>
          )
          return (
            <li
              key={bu.name}
              className={active === i ? 'is-active' : ''}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {bu.slug ? <Link to={`/expertise/${bu.slug}`}>{content}</Link> : <span className="wheel__static">{content}</span>}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
