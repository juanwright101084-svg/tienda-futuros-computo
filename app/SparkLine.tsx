export default function SparkLine({ data }: { data: { precio: number }[] }) {
  if (data.length < 2) return null

  const prices = data.map((d) => d.precio)
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  const range = max - min || 1

  const width = 240
  const height = 56
  const step = width / (data.length - 1)

  const points = prices
    .map((p, i) => {
      const x = i * step
      const y = height - ((p - min) / range) * height
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  const first = prices[0]
  const last = prices[prices.length - 1]
  const pctChange = ((last - first) / first) * 100
  const isUp = pctChange >= 0
  const color = isUp ? '#4C9A6A' : '#C24E4E'

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-14 w-full">
        <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" />
      </svg>
      <p className="mt-1 font-[family-name:var(--font-mono)] text-xs" style={{ color }}>
        {isUp ? '+' : ''}
        {pctChange.toFixed(1)}% (6 meses)
      </p>
    </div>
  )
}