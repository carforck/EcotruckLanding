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
        <span className="bg-[#A6E22E] text-[#014D40] px-2 rounded-md">
          despierta
        </span>{" "}
        a una nueva era
      </>
    ),
    text: "Cartagena inicia su camino hacia una ciudad más limpia, tecnológica y sostenible.",
    position:
      "items-center justify-center text-center md:items-center md:justify-end md:pb-24",
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
    position:
      "items-center justify-center text-center md:items-start md:justify-center md:pl-10 md:text-left",
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
    position:
      "items-center justify-center text-center md:items-end md:justify-center md:pr-10 md:text-right",
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
    position:
      "items-center justify-center text-center md:items-start md:justify-center md:pl-10 md:text-left",
  },
];

export default function Awaken() {
  const [current, setCurrent] = useState(0);

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
            <img
              src={slide.img}
              alt="Fondo EcoTruck"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div
              className={`absolute inset-0 flex flex-col ${slide.position} text-white px-6 transition-all duration-700`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-2xl leading-tight max-w-5xl tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mt-4 md:mt-6 max-w-3xl">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 top-1/2 flex justify-between items-center px-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="bg-[#A6E22E]/80 hover:bg-[#FFC300] text-[#014D40] font-bold text-xl md:text-3xl rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#A6E22E]/80 hover:bg-[#FFC300] text-[#014D40] font-bold text-xl md:text-3xl rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          ❯
        </button>
      </div>

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
