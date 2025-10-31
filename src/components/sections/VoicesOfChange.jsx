// src/components/sections/VoicesOfChange.jsx
import { motion } from "framer-motion";
import moisesImg from "../../assets/images/moises.png";
import carlosImg from "../../assets/images/carlos.jpeg";
import JoshImg from "../../assets/images/josh.jpeg";

export default function VoicesOfChange() {
  const team = [
    { name: "Moisés Ruiz", role: "Backend Developer", photo: moisesImg },
    { name: "Carlos Carranza", role: "Frontend Developer", photo: carlosImg },
    {
      name: "Osmar Torres",
      role: "Diseñador UI/UX",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Josh Vanegas",
      role: "Analista de Datos",
      photo: JoshImg,
    },
  ];

  return (
    <section 
        id="equipo" 
        className="bg-white py-16 md:py-24 text-center overflow-hidden px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3, once: false }}
        // TAMAÑO RESPONSIVE: Escalado del título
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 md:mb-12 text-[#014D40] leading-tight" // <- Color: Verde Oscuro
      >
        Las mentes detrás del movimiento
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
        {team.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 70,
            }}
            viewport={{ amount: 0.2, once: false }}
            // EFECTOS HOVER MEJORADOS: Escala y ligera rotación en 3D
            whileHover={{ scale: 1.05, rotateY: 3 }} 
            className="bg-[#F5F7F4] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center" // <- Fondo: Color claro
          >
            <motion.img
              src={person.photo}
              alt={person.name}
              // Borde de imagen usando el color verde brillante
              className="w-28 h-28 object-cover rounded-full border-4 border-[#A6E22E] mb-4 shadow-lg" 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="text-xl font-bold text-[#014D40] mb-1">
              {person.name}
            </h3>
            <p className="text-base text-[#4A4A4A]">{person.role}</p> {/* <- Color: Gris Oscuro */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}