// src/components/sections/ImpactRipple.jsx
export default function ImpactRipple() {
  return (
    // Fondo: Color claro de la marca. Padding: Ajuste vertical para desktop.
    <section 
        id="impacto" 
        className="bg-[#F5F7F4] text-[#014D40] py-16 md:py-28 text-center px-4" // Fondo claro, Texto verde oscuro
    >
      
      {/* Título Principal */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
        Cada ruta genera un cambio
      </h2>
      
      {/* Subtítulo */}
      <p className="text-base md:text-xl max-w-3xl mx-auto mb-10 md:mb-16 text-[#4A4A4A]"> 
        EcoTruck contribuye directamente a los Objetivos de Desarrollo Sostenible de la ONU.
      </p>
      
      {/* Contenedor de Tarjetas ODS */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
        
        {/* ODS 11 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-[#A6E22E] 
                        w-full sm:w-[280px] transform hover:scale-[1.03] transition-all duration-300">
          <h3 className="text-[#014D40] text-3xl font-bold mb-2">ODS 11 🏙️</h3>
          <p className="text-[#4A4A4A] font-medium text-lg">Ciudades y comunidades sostenibles</p>
        </div>
        
        {/* ODS 13 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-[#A6E22E] 
                        w-full sm:w-[280px] transform hover:scale-[1.03] transition-all duration-300">
          <h3 className="text-[#014D40] text-3xl font-bold mb-2">ODS 13 🌡️</h3>
          <p className="text-[#4A4A4A] font-medium text-lg">Acción por el clima</p>
        </div>
        
        {/* ODS 3 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-[#A6E22E] 
                        w-full sm:w-[280px] transform hover:scale-[1.03] transition-all duration-300">
          <h3 className="text-[#014D40] text-3xl font-bold mb-2">ODS 3 ⚕️</h3>
          <p className="text-[#4A4A4A] font-medium text-lg">Salud y bienestar</p>
        </div>
        
      </div>
    </section>
  );
}