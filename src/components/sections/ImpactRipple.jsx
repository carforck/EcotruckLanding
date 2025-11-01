// src/components/sections/ImpactRipple.jsx
export default function ImpactRipple() {
  return (
    <section
      id="impacto"
      className="bg-[#F5F7F4] text-[#014D40] py-16 md:py-28 text-center px-4"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
        Cada ruta genera un cambio
      </h2>

      <p className="text-base md:text-xl max-w-3xl mx-auto mb-4 text-[#4A4A4A]">
        EcoTruck transforma el seguimiento de flotas en una herramienta de
        impacto ambiental y social.
      </p>

      <p className="text-sm md:text-base italic text-[#4A4A4A] mb-12 max-w-xl mx-auto">
        Cada kilómetro monitoreado contribuye a ciudades más limpias, decisiones
        más inteligentes y comunidades más saludables.
      </p>

      {/* Tarjetas con efecto flip */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
        {/* Tarjeta ODS 11 */}
        <div className="group perspective w-full sm:w-72 h-80">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            {/* Frente */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg border-t-4 border-[#A6E22E] overflow-hidden">
              <img
                src="/ods/E_GIF_11.gif"
                alt="ODS 11"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Reverso */}
            <a
              href="https://www.un.org/sustainabledevelopment/cities/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#014D40] text-white rounded-xl shadow-lg p-6 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-2">ODS 11</h3>
              <p className="text-sm mb-2">Ciudades y comunidades sostenibles</p>
              <p className="text-sm text-gray-200">
                EcoTruck ayuda a reducir la congestión urbana y mejora la
                planificación de rutas.
              </p>
            </a>
          </div>
        </div>

        {/* Tarjeta ODS 13 */}
        <div className="group perspective w-full sm:w-72 h-80">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            {/* Frente */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg border-t-4 border-[#A6E22E] overflow-hidden">
              <img
                src="/ods/E_GIF_13.gif"
                alt="ODS 13"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Reverso */}
            <a
              href="https://www.un.org/sustainabledevelopment/climate-change/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#014D40] text-white rounded-xl shadow-lg p-6 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-2">ODS 13</h3>
              <p className="text-sm mb-2">Acción por el clima</p>
              <p className="text-sm text-gray-200">
                Optimización de rutas que reduce emisiones de CO₂ y consumo de
                combustible.
              </p>
            </a>
          </div>
        </div>

        {/* Tarjeta ODS 3 */}
        <div className="group perspective w-full sm:w-72 h-80">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            {/* Frente */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg border-t-4 border-[#A6E22E] overflow-hidden">
              <img
                src="/ods/E_GIF_03.gif"
                alt="ODS 3"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Reverso */}
            <a
              href="https://www.un.org/sustainabledevelopment/health/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#014D40] text-white rounded-xl shadow-lg p-6 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-2">ODS 3</h3>
              <p className="text-sm mb-2">Salud y bienestar</p>
              <p className="text-sm text-gray-200">
                Menos contaminación en zonas urbanas gracias a rutas más
                eficientes.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Métrica de impacto */}
      <div className="mt-16 text-center text-[#014D40]">
        <p className="text-2xl font-bold">+12,000 km monitoreados</p>
        <p className="text-sm text-[#4A4A4A]">
          Contribuyendo a decisiones más sostenibles en tiempo real
        </p>
      </div>

      {/* CTA */}
      <a
        href="/login"
        className="inline-block mt-10 px-6 py-3 bg-[#A6E22E] text-[#014D40] font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
      >
        Quiero ser parte del cambio
      </a>
    </section>
  );
}
