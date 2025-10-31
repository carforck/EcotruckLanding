// src/components/sections/TheMachineBehind.jsx
export default function TheMachineBehind() {
  return (
    <section className="bg-gray-900 text-white py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Lo que hace posible el cambio</h2>
      <p className="max-w-3xl mx-auto text-gray-300 mb-10">
        EcoTruck está construido con tecnologías modernas: React, Spring Boot, APIs REST y arquitectura escalable.
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <span className="bg-green-800 px-4 py-2 rounded-full">React</span>
        <span className="bg-green-800 px-4 py-2 rounded-full">Spring Boot</span>
        <span className="bg-green-800 px-4 py-2 rounded-full">MySQL</span>
        <span className="bg-green-800 px-4 py-2 rounded-full">Tailwind CSS</span>
        <span className="bg-green-800 px-4 py-2 rounded-full">APIs REST</span>
      </div>
    </section>
  );
}
