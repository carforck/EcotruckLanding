// src/components/sections/TheSolutionSpeaks.jsx
export default function TheSolutionSpeaks() {
  const solutions = [
    {
      icon: "📍",
      title: "Tracking en tiempo real",
      description: "Conoce dónde está tu camión de aseo en este momento y su hora estimada de llegada.",
    },
    {
      icon: "💬",
      title: "Comunicación directa",
      description: "Conecta la empresa y la comunidad a través de alertas instantáneas y canales sin intermediarios.",
    },
    {
      icon: "✅",
      title: "Eficiencia y transparencia",
      description: "Datos abiertos, rutas optimizadas y decisiones inteligentes para una Cartagena sostenible.",
    },
  ];

  return (
    <section 
        id="solucion" 
        // Fondo: Color claro de la marca. Padding: Ajuste vertical.
        className="bg-[#F5F7F4] py-16 md:py-24 text-center px-4"
    >
      
      {/* Título Principal */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#014D40] mb-8 md:mb-12 leading-tight">
        EcoTruck: la tecnología que responde
      </h2>
      
      {/* Grid de Cards de Soluciones */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <div 
            key={index}
            // CLASE ACTUALIZADA: Usando el utility predefinido de Tailwind
            className="bg-white shadow-xl rounded-2xl p-6 md:p-8 
                       border-t-4 border-[#A6E22E] flex flex-col items-center 
                       transform hover:-translate-y-1 transition-all duration-300" 
          >
            {/* Ícono/Emoji destacado */}
            <span className="text-4xl mb-3 p-3 bg-[#A6E22E]/20 rounded-full">
              {solution.icon}
            </span>

            {/* Título de la tarjeta */}
            <h3 className="text-xl md:text-2xl font-bold text-[#014D40] mb-2">
              {solution.title}
            </h3>
            
            {/* Descripción */}
            <p className="text-base text-[#4A4A4A] leading-relaxed">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}