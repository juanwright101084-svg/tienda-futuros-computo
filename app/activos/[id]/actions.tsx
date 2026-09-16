'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function solicitarAcceso(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const activoId = formData.get('activoId') as string
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const mensaje = formData.get('mensaje') as string

  const supabase = await createClient()

  const { error } = await supabase.from('leads').insert({
    activo_id: activoId,
    nombre,
    email,
    mensaje,
  })

  if (error) {
    return { success: false, message: 'Hubo un error, intenta de nuevo.' }
  }

  revalidatePath(`/activos/${activoId}`)
  return { success: true, message: 'Solicitud enviada. Un asesor te contactara pronto.' }
}