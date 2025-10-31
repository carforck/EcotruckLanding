// src/components/sections/ImpactRipple.jsx
export default function ImpactRipple() {
  return (
    <section className="bg-lime-100 text-gray-900 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Cada ruta genera un cambio</h2>
      <p className="max-w-2xl mx-auto mb-10">
        EcoTruck contribuye directamente a los Objetivos de Desarrollo Sostenible.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">ODS 11</h3>
          <p>Ciudades y comunidades sostenibles</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">ODS 13</h3>
          <p>Acción por el clima</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">ODS 3</h3>
          <p>Salud y bienestar</p>
        </div>
      </div>
    </section>
  );
}
