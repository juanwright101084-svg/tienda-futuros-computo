'use client'

import { useEffect, useState } from 'react'

const LINES = [
  'INICIALIZANDO TERMINAL...',
  'CONECTANDO A MERCADOS GLOBALES...',
  'CARGANDO FUTUROS DE COMPUTO...',
  'MERCADO ABIERTO',
]

const LINE_DELAYS = [300, 900, 1500, 2100]

const NODES = [
  { x: 100, y: 32 },
  { x: 165, y: 80 },
  { x: 150, y: 155 },
  { x: 55, y: 160 },
  { x: 35, y: 70 },
]

type Phase = 'idle' | 'booting' | 'fading' | 'done'

export default function IntroSequence({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [visibleLines, setVisibleLines] = useState(0)
  const [showNodes, setShowNodes] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const alreadySeen = sessionStorage.getItem('intro-seen')

    if (reduceMotion || alreadySeen) {
      setPhase('done')
      return
    }

    setPhase('booting')

    const timers: ReturnType<typeof setTimeout>[] = []
    LINE_DELAYS.forEach((delay) => {
      timers.push(setTimeout(() => setVisibleLines((n) => n + 1), delay))
    })
    timers.push(setTimeout(() => setShowNodes(true), 2000))
    timers.push(
      setTimeout(() => {
        sessionStorage.setItem('intro-seen', '1')
        setPhase('fading')
      }, 4200)
    )
    timers.push(setTimeout(() => setPhase('done'), 4900))

    return () => timers.forEach(clearTimeout)
  }, [])

  const skipIntro = () => {
    sessionStorage.setItem('intro-seen', '1')
    setPhase('done')
  }

  return (
    <>
      {phase !== 'done' && phase !== 'idle' && (
        <div
          onClick={skipIntro}
          className={`fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center gap-6 bg-[#0A0E14] transition-opacity duration-700 ${
            phase === 'fading' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <svg viewBox="0 0 200 200" className="h-40 w-40 opacity-90">
            <circle cx="100" cy="100" r="70" pathLength="100" className="globe-draw" style={{ animationDelay: '0s' }} />
            <ellipse cx="100" cy="100" rx="30" ry="70" pathLength="100" className="globe-draw" style={{ animationDelay: '0.25s' }} />
            <ellipse cx="100" cy="100" rx="55" ry="70" pathLength="100" className="globe-draw" style={{ animationDelay: '0.45s' }} />
            <ellipse cx="100" cy="100" rx="70" ry="30" pathLength="100" className="globe-draw" style={{ animationDelay: '0.65s' }} />
            <ellipse cx="100" cy="100" rx="70" ry="50" pathLength="100" className="globe-draw" style={{ animationDelay: '0.85s' }} />

            {showNodes &&
              NODES.map((n, i) => (
                <circle
                  key={i}
                  cx={n.x}
                  cy={n.y}
                  r="2.2"
                  className="node-pulse"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}

            {showNodes &&
              NODES.map((n, i) => {
                const next = NODES[(i + 1) % NODES.length]
                return (
                  <line
                    key={`l-${i}`}
                    x1={n.x}
                    y1={n.y}
                    x2={next.x}
                    y2={next.y}
                    pathLength="100"
                    className="link-draw"
                    style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                  />
                )
              })}
          </svg>

          <div className="font-[family-name:var(--font-mono)] text-sm text-[#4C9A6A]">
            {LINES.slice(0, visibleLines).map((line, i) => (
              <p key={i} className={i === LINES.length - 1 ? 'mt-2 text-[#E8A33D]' : ''}>
                {'>'} {line}
              </p>
            ))}
            {visibleLines < LINES.length && <span className="animate-pulse">_</span>}
          </div>
        </div>
      )}
      {children}
    </>
  )
}