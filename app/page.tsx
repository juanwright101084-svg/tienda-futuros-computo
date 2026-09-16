import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function HomePage() {
  const supabase = await createClient()

  const { data: categorias } = await supabase.from('categorias').select('*')
  const { data: activos } = await supabase
    .from('activos')
    .select('*, categorias(nombre, slug)')
    .order('created_at', { ascending: false })
  const { data: historial } = await supabase
    .from('historial_precios')
    .select('activo_id, precio')
    .order('fecha', { ascending: true })

  const porActivo = new Map<string, number[]>()
  historial?.forEach((h) => {
    const arr = porActivo.get(h.activo_id) ?? []
    arr.push(Number(h.precio))
    porActivo.set(h.activo_id, arr)
  })

  function pctChange(id: string) {
    const arr = porActivo.get(id)
    if (!arr || arr.length < 2) return null
    return ((arr[arr.length - 1] - arr[0]) / arr[0]) * 100
  }

  const tickerItems = activos ?? []

  return (
    <main className="min-h-screen">
      <div className="overflow-hidden border-b border-[#262B36] bg-[#0D131C] py-2">
        <div className="flex w-max animate-ticker gap-10 whitespace-nowrap font-[family-name:var(--font-mono)] text-xs text-[#8B93A3]">
          {[...tickerItems, ...tickerItems].map((a, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-[#F5F3EE]">{a.nombre}</span>
              <span className={a.disponible ? 'text-[#4C9A6A]' : 'text-[#C24E4E]'}>
                ${Number(a.precio).toLocaleString('es-SV')}
              </span>
            </span>
          ))}
        </div>
      </div>

      <header className="relative overflow-hidden border-b border-[#262B36] px-6 py-24 text-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/san-salvador.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/city-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/35 via-[#0A0E14]/25 to-[#0A0E14]" />
        </div>

        <div className="relative">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-wide text-[#F5F3EE] [text-shadow:0_2px_8px_rgba(10,14,20,0.9)]">
            Nueva clase de activo
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-medium text-[#F5F3EE] [text-shadow:0_4px_20px_rgba(10,14,20,0.95)]">
            The World of Compute. Now Investable.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[#F5F3EE] [text-shadow:0_2px_10px_rgba(10,14,20,0.9)]">
            La potencia de cálculo se está convirtiendo en la próxima materia
            prima global — tan cotizada como el petróleo, tan escasa como el oro.
            Asegura tu posición antes que el mercado la valore.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8 flex gap-2">
          {categorias?.map((cat) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className="rounded-sm border border-[#262B36] px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs text-[#8B93A3] transition-colors hover:border-[#E8A33D] hover:text-[#E8A33D]"
            >
              {cat.nombre}
            </Link>
          ))}
          <Link
            href="/aprende"
            className="rounded-sm border border-[#E8A33D] px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs text-[#E8A33D] transition-colors hover:bg-[#E8A33D] hover:text-[#0A0E14]"
          >
            Aprende
          </Link>
        </div>

        <div className="divide-y divide-[#262B36] border-y border-[#262B36]">
          {activos?.map((activo) => {
            const change = pctChange(activo.id)
            const isUp = change !== null && change >= 0
            return (
              <Link
                key={activo.id}
                href={`/activos/${activo.id}`}
                className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-[#0D131C]"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h2 className="truncate font-medium text-[#F5F3EE]">{activo.nombre}</h2>
                    <span className="shrink-0 font-[family-name:var(--font-mono)] text-[10px] text-[#8B93A3]">
                      {activo.tipo === 'futuro_computo' ? 'FUT' : 'TOK'}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-[#8B93A3]">{activo.descripcion}</p>
                </div>
                <div className="shrink-0 text-right font-[family-name:var(--font-mono)]">
                  <div className={activo.disponible ? 'text-[#4C9A6A]' : 'text-[#C24E4E]'}>
                    ${Number(activo.precio).toLocaleString('es-SV')}
                  </div>
                  <div className="text-xs text-[#8B93A3]">{activo.unidad}</div>
                  {change !== null && (
                    <div className={`text-xs ${isUp ? 'text-[#4C9A6A]' : 'text-[#C24E4E]'}`}>
                      {isUp ? '+' : ''}
                      {change.toFixed(1)}%
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}