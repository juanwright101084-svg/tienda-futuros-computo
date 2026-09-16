'use client'

import { useActionState } from 'react'
import { solicitarAcceso } from './actions'

const initialState = { success: false, message: '' }

export default function SolicitarAccesoForm({ activoId }: { activoId: string }) {
  const [state, formAction, isPending] = useActionState(solicitarAcceso, initialState)

  if (state.success) {
    return (
      <p className="mt-10 border border-[#4C9A6A] bg-[#0D131C] px-4 py-3 font-[family-name:var(--font-mono)] text-sm text-[#4C9A6A]">
        {state.message}
      </p>
    )
  }

  return (
    <form action={formAction} className="mt-10 border-t border-[#262B36] pt-8">
      <input type="hidden" name="activoId" value={activoId} />
      <h2 className="font-[family-name:var(--font-display)] text-xl text-[#F5F3EE]">
        Solicitar acceso
      </h2>
      <p className="mt-1 text-sm text-[#8B93A3]">
        Un asesor se pondra en contacto para los siguientes pasos.
      </p>

      <div className="mt-5 space-y-4">
        <input
          name="nombre"
          type="text"
          required
          placeholder="Nombre completo"
          className="w-full border border-[#262B36] bg-[#0D131C] px-4 py-2.5 text-sm text-[#F5F3EE] placeholder:text-[#8B93A3] focus:border-[#E8A33D] focus:outline-none"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Correo institucional"
          className="w-full border border-[#262B36] bg-[#0D131C] px-4 py-2.5 text-sm text-[#F5F3EE] placeholder:text-[#8B93A3] focus:border-[#E8A33D] focus:outline-none"
        />
        <textarea
          name="mensaje"
          rows={3}
          placeholder="Monto aproximado de interes (opcional)"
          className="w-full border border-[#262B36] bg-[#0D131C] px-4 py-2.5 text-sm text-[#F5F3EE] placeholder:text-[#8B93A3] focus:border-[#E8A33D] focus:outline-none"
        />
      </div>

      {state.message && !state.success && (
        <p className="mt-3 text-sm text-[#C24E4E]">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-5 border border-[#E8A33D] px-6 py-2.5 font-[family-name:var(--font-mono)] text-xs text-[#E8A33D] transition-colors hover:bg-[#E8A33D] hover:text-[#0A0E14] disabled:opacity-50"
      >
        {isPending ? 'Enviando...' : 'Solicitar acceso'}
      </button>
    </form>
  )
}