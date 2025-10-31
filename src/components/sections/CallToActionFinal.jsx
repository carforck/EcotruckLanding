// src/components/sections/CallToActionFinal.jsx
export default function CallToActionFinal() {
  return (
    // Ajuste de padding vertical: Más espacio en pantallas grandes
    <section id="cta" className="bg-[#014D40] text-white text-center py-16 md:py-24 lg:py-32"> 
      
      {/* Título: Escalado de fuente para ser más grande en desktop */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
        Tú también haces parte del cambio
      </h2>
      
      {/* Párrafo: Asegurando que el ancho máximo y el texto se vean bien */}
      <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 md:mb-10 px-4">
        Súmate a la transformación digital de la limpieza urbana en Cartagena.
      </p>
      
      {/* Botón: Ajustando tamaño y hover effect */}
      <a 
        href="#contacto" // Usar un <a> con href para hacerlo accesible/navegable
        className="inline-block bg-[#A6E22E] text-[#014D40] px-8 py-3 md:px-10 md:py-4 
                   rounded-full font-bold text-lg md:text-xl shadow-xl 
                   hover:bg-[#FFC300] hover:scale-[1.03] transition-all duration-300 transform"
      >
        Únete ahora
      </a>
    </section>
  );
}