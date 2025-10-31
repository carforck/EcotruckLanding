// src/components/sections/EchoFade.jsx
export default function EchoFade() {
  return (
    // Fondo: Color principal de la marca. Padding: Ajustado para mayor presencia.
    <footer className="bg-[#014D40] text-gray-200 text-center py-10 md:py-12 border-t border-[#A6E22E]/30">
      
      {/* Texto: Mantiene el año actual y un tamaño legible */}
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} **EcoTruck**. El eco continúa...
      </p>
      
    </footer>
  );
}