// src/components/sections/TheSolutionSpeaks.jsx
import { Player } from "@lottiefiles/react-lottie-player";

export default function TheSolutionSpeaks() {
  const solutions = [
    {
      icon: "/src/assets/lottie/Pick-up Pin.json",
      title: "Tracking en tiempo real",
      description:
        "Conoce dónde está tu camión de aseo en este momento y su hora estimada de llegada.",
    },
    {
      icon: "/src/assets/lottie/Nyt-Mesaj.json",
      title: "Comunicación directa",
      description:
        "Conecta la empresa y la comunidad a través de alertas instantáneas y canales sin intermediarios.",
    },
    {
      icon: "/src/assets/lottie/Sucesso.json",
      title: "Eficiencia y transparencia",
      description:
        "Datos abiertos, rutas optimizadas y decisiones inteligentes para una Cartagena sostenible.",
    },
  ];

  return (
    <section
      id="solucion"
      className="bg-[#F5F7F4] py-16 md:py-24 text-center px-4"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#014D40] mb-4 md:mb-6 leading-tight">
        EcoTruck: la tecnología que responde
      </h2>

      <p className="text-sm text-[#4A4A4A] italic mb-10">
        Tecnología pensada para servir a la ciudad y a su gente.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border-t-4 border-[#A6E22E] flex flex-col items-center transform hover:-translate-y-1 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Ícono animado */}
            <div className="w-24 h-24 mb-4">
              <Player
                autoplay
                loop
                src={solution.icon}
                style={{ height: "100%", width: "100%" }}
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#014D40] mb-2">
              {solution.title}
            </h3>

            <p className="text-base text-[#4A4A4A] leading-relaxed">
              {solution.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="http://localhost:5175/login"
        className="inline-block mt-12 px-6 py-3 bg-[#A6E22E] text-[#014D40] font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
      >
        Ver cómo funciona
      </a>
    </section>
  );
}
