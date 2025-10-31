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
    <section id="equipo" className="bg-white py-20 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3, once: false }} // 👈 se repite cada vez
        className="text-3xl font-bold mb-10 text-green-900"
      >
        Las mentes detrás del movimiento
      </motion.h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto px-4">
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
            viewport={{ amount: 0.2, once: false }} // 👈 vuelve a animar al entrar
            whileHover={{ scale: 1.05, rotateY: 3 }}
            className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-xl transition-transform duration-300 flex flex-col items-center"
          >
            <motion.img
              src={person.photo}
              alt={person.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-green-300 mb-4 shadow-md"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="text-lg font-semibold text-green-900">
              {person.name}
            </h3>
            <p className="text-sm text-green-700">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
