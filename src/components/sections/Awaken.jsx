// src/components/sections/Awaken.jsx
import { useEffect, useState } from "react";
import fondo6 from "../../assets/images/fondo6.png";
import fondo2 from "../../assets/images/fondo2.jpg";
import fondo3 from "../../assets/images/fondo3.jpg";
import fondo5 from "../../assets/images/fondo5.jpeg";

const slides = [
  {
    id: 1,
    img: fondo6,
    title: (
      <>
        EcoTruck{" "}
        <span className=" bg-[#A6E22E] text-[#014D40] px-2 rounded-md">
          despierta
        </span>{" "}
        a una nueva era
      </>
    ),
    text: "Cartagena inicia su camino hacia una ciudad más limpia, tecnológica y sostenible.",
    position: "items-center justify-end text-center pb-24",
  },
  {
    id: 2,
    img: fondo2,
    title: (
      <>
        Transformamos{" "}
        <span className="bg-[#A6E22E] text-[#014D40] px-2 rounded-md">
          residuos
        </span>{" "}
        en oportunidades
      </>
    ),
    text: "La tecnología impulsa un modelo de recolección inteligente y eficiente.",
    position: "items-start justify-center text-left pl-10",
  },
 {
  id: 3,
  img: fondo3,
  title: (
    <>
      Innovación{" "}
      <span className="bg-[#A6E22E] text-[#014D40] px-2 rounded-md">
        verde
      </span>{" "}
      en movimiento
    </>
  ),
  text: "Seguimiento en tiempo real y rutas optimizadas para un futuro sostenible.",
  position: "items-end justify-center text-right pr-10",
},

  {
    id: 4,
    img: fondo5,
    title: (
      <>
        EcoTruck, la{" "}
        <span className="bg-[#A6E22E] text-[#014D40] px-2 rounded-md">
          evolución
        </span>{" "}
        ecológica
      </>
    ),
    text: "Conectando comunidades con el poder de la tecnología limpia.",
    position: "items-start justify-center text-left pl-10",
  },
];

export default function Awaken() {
  const [current, setCurrent] = useState(0);

  // autoplay cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carrusel */}
      <div className="relative w-full h-full">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              i === current
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Imagen de fondo */}
            <img
              src={slide.img}
              alt="Fondo EcoTruck"
              className="w-full h-full object-cover object-center"
            />

            {/* Texto directamente sobre la imagen (sin capa oscura) */}
            <div
              className={`absolute inset-0 flex flex-col ${slide.position} text-white px-6 transition-all duration-700`}
            >
              <h1 className="text-7xl sm:text-6xl md:text-8xl font-extrabold drop-shadow-2xl leading-tight max-w-5xl tracking-tight">
                {slide.title}
              </h1>
              <p className="text-2xl sm:text-xl md:text-3xl text-white mt-6 max-w-3xl">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botones */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between items-center px-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="bg-[#A6E22E]/80 hover:bg-[#FFC300] text-[#014D40] font-bold text-3xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#A6E22E]/80 hover:bg-[#FFC300] text-[#014D40] font-bold text-3xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          ❯
        </button>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#A6E22E] scale-125 shadow-md"
                : "bg-white/50 hover:bg-[#A6E22E]/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
