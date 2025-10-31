// src/components/sections/TheSolutionSpeaks.jsx
export default function TheSolutionSpeaks() {
  return (
    <section className="bg-green-50 py-20 text-center">
      <h2 className="text-3xl font-bold text-green-900 mb-8">EcoTruck: la tecnología que responde</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Tracking en tiempo real</h3>
          <p>Conoce dónde está tu camión de aseo en este momento.</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Comunicación directa</h3>
          <p>Conecta empresa y comunidad sin intermediarios.</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Eficiencia y transparencia</h3>
          <p>Datos abiertos, decisiones inteligentes, Cartagena sostenible.</p>
        </div>
      </div>
    </section>
  );
}
