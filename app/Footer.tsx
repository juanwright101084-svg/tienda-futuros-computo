export default function Footer() {
  return (
    <footer className="border-t border-[#262B36] px-6 py-10">
      <div className="mx-auto max-w-4xl font-[family-name:var(--font-mono)] text-xs leading-6 text-[#8B93A3]">
        <p className="text-[#F5F3EE]">Compute Capital Markets, S.A. de C.V.</p>
        <p className="mt-1">
          Entidad ficticia con fines académicos. Este sitio es un proyecto
          educativo y no constituye asesoría financiera ni una oferta real
          de valores.
        </p>

        <div className="mt-6 grid gap-6 border-t border-[#262B36] pt-6 sm:grid-cols-2">
          <div>
            <p className="text-[#F5F3EE]">Custodia</p>
            <p className="mt-1">
              Los activos tokenizados se resguardan mediante un custodio
              calificado con supervisión independiente, separado del
              operador de la plataforma.
            </p>
          </div>
          <div>
            <p className="text-[#F5F3EE]">Liquidación</p>
            <p className="mt-1">
              Los futuros de cómputo se liquidan mediante contratos
              inteligentes verificables en cadena, con contraparte
              central regulada.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 border-t border-[#262B36] pt-6 sm:grid-cols-2">
          <div>
            <p className="text-[#F5F3EE]">Contacto institucional</p>
            <p className="mt-1"><a href="mailto:contacto@computocapital.com" className="hover:text-[#E8A33D]">contacto@computocapital.com</a></p>
            <p className="mt-1">
              Atención exclusiva para inversionistas calificados. No se
              atienden consultas de retail.
            </p>
          </div>
          <div>
            <p className="text-[#F5F3EE]">Domicilio legal</p>
            <p className="mt-1">
              Torre Futura, Nivel 12
              <br />
              Boulevard El Hipódromo, San Salvador
              <br />
              El Salvador
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#262B36] pt-6">
          <a href="#" className="hover:text-[#E8A33D]">
            Términos de servicio
          </a>
          <a href="#" className="hover:text-[#E8A33D]">
            Aviso de privacidad
          </a>
          <a href="#" className="hover:text-[#E8A33D]">
            Divulgación de riesgos
          </a>
        </div>

        <p className="mt-6 border-t border-[#262B36] pt-6 text-[10px]">
          © 2026 Compute Capital Markets. Sujeto a supervisión regulatoria en
          las jurisdicciones donde opera. Invertir en futuros de cómputo y
          activos tokenizados implica riesgo de pérdida, incluyendo la
          pérdida total del capital.
        </p>
      </div>
    </footer>
  )
}