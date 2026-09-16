import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SolicitarAccesoForm from './SolicitarAccesoForm'
import SparkLine from '../../SparkLine'

export default async function ActivoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const { data: activo, error } = await supabase
    .from('activos')
    .select('*, categorias(nombre, slug)')
    .eq('id', id)
    .single()

  if (error || !activo) {
    notFound()
  }

  const { data: historial } = await supabase
    .from('historial_precios')
    .select('precio')
    .eq('activo_id', id)
    .order('fecha', { ascending: true })

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="font-[family-name:var(--font-mono)] text-xs text-[#8B93A3] hover:text-[#E8A33D]"
        >
          ← Volver al mercado
        </Link>

        <div className="mt-10 flex items-center gap-3">
          <span className="font-[family-name:var(--font-mono)] text-xs text-[#E8A33D]">
            {activo.tipo === 'futuro_computo' ? 'FUTURO' : 'TOKENIZADO'}
          </span>
          {activo.categorias && (
            <Link
              href={`/categorias/${activo.categorias.slug}`}
              className="font-[family-name:var(--font-mono)] text-xs text-[#8B93A3] hover:text-[#E8A33D]"
            >
              {activo.categorias.nombre}
            </Link>
          )}
        </div>

        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium text-[#F5F3EE]">
          {activo.nombre}
        </h1>

        <p className="mt-6 leading-7 text-[#8B93A3]">{activo.descripcion}</p>

        {historial && historial.length >= 2 && (
          <div className="mt-8 border-t border-[#262B36] pt-6">
            <SparkLine data={historial} />
          </div>
        )}

        <dl className="mt-8 divide-y divide-[#262B36] border-y border-[#262B36] font-[family-name:var(--font-mono)] text-sm">
          <div className="flex items-center justify-between py-4">
            <dt className="text-[#8B93A3]">Proveedor</dt>
            <dd className="text-[#F5F3EE]">{activo.proveedor || 'No especificado'}</dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="text-[#8B93A3]">Precio</dt>
            <dd className={activo.disponible ? 'text-[#4C9A6A]' : 'text-[#C24E4E]'}>
              ${Number(activo.precio).toLocaleString('es-SV')} / {activo.unidad}
            </dd>
          </div>
          <div className="flex items-center justify-between py-4">
            <dt className="text-[#8B93A3]">Disponibilidad</dt>
            <dd className={activo.disponible ? 'text-[#4C9A6A]' : 'text-[#C24E4E]'}>
              {activo.disponible ? 'Disponible' : 'Agotado'}
            </dd>
          </div>
        </dl>

        <SolicitarAccesoForm activoId={activo.id} />
      </div>
    </main>
  )
}