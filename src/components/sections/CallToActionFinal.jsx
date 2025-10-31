// src/components/sections/CallToActionFinal.jsx
export default function CallToActionFinal() {
  return (
    <section
      id="cta"
      className="bg-[#014D40] text-white text-center py-16 md:py-24 lg:py-32"
    >
      {/* Título con animación */}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight"
        data-aos="fade-up"
      >
        Tú también haces parte del cambio
      </h2>

      {/* Subtítulo con animación */}
      <p
        className="text-lg md:text-xl max-w-xl mx-auto mb-4 px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Súmate a la transformación digital de la limpieza urbana en Cartagena.
      </p>

      {/* Frase emocional */}
      <p
        className="text-sm italic text-[#D1D5DB] mb-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Cada decisión cuenta. Cada clic transforma.
      </p>

      {/* Métrica de impacto */}
      <div
        className="text-sm text-[#D1D5DB] mb-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        +12,000 km monitoreados • +1,000 ciudadanos conectados
      </div>

      {/* Botón CTA con animación */}
      <a
        href="http://localhost:5175/login"
        className="inline-block bg-[#A6E22E] text-[#014D40] px-8 py-3 md:px-10 md:py-4 
                   rounded-full font-bold text-lg md:text-xl shadow-xl 
                   hover:bg-[#FFC300] hover:scale-[1.03] transition-all duration-300 transform"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        Únete ahora
      </a>
    </section>
  );
}
