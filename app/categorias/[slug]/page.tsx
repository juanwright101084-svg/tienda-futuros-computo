import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: categoria, error: categoriaError } = await supabase
    .from('categorias')
    .select('*')
    .eq('slug', slug)
    .single()

  if (categoriaError || !categoria) {
    notFound()
  }

  const { data: activos } = await supabase
    .from('activos')
    .select('*')
    .eq('categoria_id', categoria.id)
    .order('created_at', { ascending: false })

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="font-[family-name:var(--font-mono)] text-xs text-[#8B93A3] hover:text-[#E8A33D]"
        >
          ← Volver al mercado
        </Link>

        <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-medium text-[#F5F3EE]">
          {categoria.nombre}
        </h1>
        <p className="mt-2 max-w-xl text-[#8B93A3]">{categoria.descripcion}</p>

        <div className="mt-10 divide-y divide-[#262B36] border-y border-[#262B36]">
          {activos && activos.length > 0 ? (
            activos.map((activo) => (
              <Link
                key={activo.id}
                href={`/activos/${activo.id}`}
                className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-[#0D131C]"
              >
                <div className="min-w-0">
                  <h2 className="truncate font-medium text-[#F5F3EE]">{activo.nombre}</h2>
                  <p className="mt-1 truncate text-sm text-[#8B93A3]">{activo.descripcion}</p>
                </div>
                <div className="shrink-0 text-right font-[family-name:var(--font-mono)]">
                  <div className={activo.disponible ? 'text-[#4C9A6A]' : 'text-[#C24E4E]'}>
                    ${Number(activo.precio).toLocaleString('es-SV')}
                  </div>
                  <div className="text-xs text-[#8B93A3]">{activo.unidad}</div>
                </div>
              </Link>
            ))
          ) : (
            <p className="py-6 text-[#8B93A3]">No hay activos en esta categoria todavia.</p>
          )}
        </div>
      </div>
    </main>
  )
}