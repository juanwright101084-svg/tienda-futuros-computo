import Link from 'next/link'

export default function AprendePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="font-[family-name:var(--font-mono)] text-xs text-[#8B93A3] hover:text-[#E8A33D]"
        >
          ← Volver al mercado
        </Link>

        <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-medium text-[#F5F3EE]">
          Entendiendo el mercado
        </h1>

        <section className="mt-14">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-wide text-[#E8A33D]">
            01
          </p>

          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[#F5F3EE]">
            ¿Qué son los futuros de cómputo?
          </h2>

          <p className="mt-4 leading-7 text-[#8B93A3]">
            Un futuro de cómputo es un contrato que asegura hoy el precio de
            acceder a capacidad de procesamiento en el futuro — horas de GPU,
            capacidad de inferencia o infraestructura de centros de datos.
            Funciona igual que una aerolínea que asegura el precio del
            combustible con anticipación: protege contra la volatilidad de un
            recurso cada vez más escaso frente a la demanda que genera el
            auge de la inteligencia artificial.
          </p>

          <div className="mt-6 aspect-video overflow-hidden border border-[#262B36]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/3O7Pcc70Qc4"
              title="Futuros de cómputo explicados"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="mt-16 border-t border-[#262B36] pt-14">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-wide text-[#E8A33D]">
            02
          </p>

          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[#F5F3EE]">
            ¿Qué son los activos tokenizados y por qué importan hoy?
          </h2>

          <p className="mt-4 leading-7 text-[#8B93A3]">
            Tokenizar un activo significa representar su propiedad —un bono,
            una acción, un fondo— mediante un registro digital verificable en
            una cadena de bloques, en vez de en papel o en un sistema
            bancario cerrado. Esto permite liquidación casi instantánea,
            transferencia 24/7 y trazabilidad total. Ya no es algo
            experimental: el mercado de activos del mundo real tokenizados
            pasó de unos 6,500 millones de dólares a inicios de 2023 a más
            de 24,000 millones a comienzos de 2026, impulsado por fondos
            institucionales como BUIDL de BlackRock.
          </p>

          <div className="mt-6 aspect-video overflow-hidden border border-[#262B36]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/NtE661v-J1k"
              title="Activos tokenizados explicados"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </main>
  )
}