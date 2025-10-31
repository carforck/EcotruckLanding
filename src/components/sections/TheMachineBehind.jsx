// src/components/sections/TheMachineBehind.jsx
export default function TheMachineBehind() {
  return (
    // Fondo: Color principal (Verde Oscuro). Padding: Ajuste vertical para desktop.
    <section className="bg-[#014D40] text-white py-16 md:py-24 text-center px-4">
      
      {/* Título Principal */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
        Lo que hace posible el cambio
      </h2>
      
      {/* Subtítulo / Descripción */}
      <p className="text-base md:text-xl max-w-3xl mx-auto text-gray-300 mb-10 md:mb-12">
        EcoTruck está construido con tecnologías modernas: React, Spring Boot, APIs REST y arquitectura escalable.
      </p>
      
      {/* Tags de Tecnología */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base max-w-4xl mx-auto">
        
        {/* Usamos el verde brillante para que los tags destaquen */}
        <span className="bg-[#A6E22E] text-[#014D40] font-semibold px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105">
          React
        </span>
        <span className="bg-[#A6E22E] text-[#014D40] font-semibold px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105">
          Spring Boot
        </span>
        <span className="bg-[#A6E22E] text-[#014D40] font-semibold px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105">
          MySQL
        </span>
        <span className="bg-[#A6E22E] text-[#014D40] font-semibold px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105">
          Tailwind CSS
        </span>
        <span className="bg-[#A6E22E] text-[#014D40] font-semibold px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105">
          APIs REST
        </span>
        <span className="bg-[#A6E22E] text-[#014D40] font-semibold px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105">
          Microservicios
        </span>
      </div>
    </section>
  );
}