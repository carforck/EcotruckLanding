import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// ✅ Ruta pública directa desde /public
const logo = "/logos/LogoEcoTruck.svg";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#E6FFF2] to-[#D1FAE5] text-[#014D40] py-14 mt-24 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        {/* Logo y descripción */}
        <div
          className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
          data-aos="fade-up"
        >
          <a href="#inicio" title="Ir al inicio">
            <img
              src={logo}
              alt="EcoTruck Logo"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          </a>
          <p className="text-sm leading-relaxed text-[#065F46] max-w-xs">
            Transformamos la gestión de residuos en Cartagena con tecnología
            inteligente, rutas optimizadas y compromiso ecológico.
          </p>
        </div>

        {/* Navegación rápida */}
        <div
          className="flex flex-col gap-3 text-sm items-center sm:items-start text-center sm:text-left"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h4 className="text-lg font-semibold text-[#065F46] mb-1">
            Navegación
          </h4>
          <ul className="space-y-1">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#problema" className="hover:underline">Problema</a></li>
            <li><a href="#solucion" className="hover:underline">Solución</a></li>
            <li><a href="#tecnologias" className="hover:underline">Tecnologías</a></li>
            <li><a href="#impacto" className="hover:underline">Impacto</a></li>
            <li><a href="#equipo" className="hover:underline">Equipo</a></li>
            <li><a href="#cta" className="hover:underline">Solicita demo</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div
          className="flex flex-col gap-3 text-sm items-center sm:items-start text-center sm:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h4 className="text-lg font-semibold text-[#065F46] mb-1">
            Contáctanos
          </h4>
          <ul className="space-y-1">
            <li><strong>Dirección:</strong> Calle 45 #42-85, Cartagena, Colombia</li>
            <li><strong>Teléfono:</strong> +57 300 625 4357</li>
            <li><strong>Email:</strong> contact@ecotruck.co</li>
            <li><strong>Horario:</strong> Lunes a viernes, 8:00am - 6:00pm</li>
          </ul>
        </div>

        {/* Redes sociales y newsletter */}
        <div
          className="flex flex-col gap-4 items-center md:items-end text-center md:text-right"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h4 className="text-lg font-semibold text-[#065F46]">Síguenos</h4>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981]" title="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981]" title="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981]" title="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981]" title="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981]" title="GitHub"><FaGithub /></a>
            <a href="#contacto" className="hover:text-[#10B981]" title="Email"><FaEnvelope /></a>
          </div>

          {/* Newsletter */}
          <form className="mt-2 w-full max-w-xs">
            <label htmlFor="newsletter" className="block text-sm mb-1 text-[#065F46]">
              Suscríbete a nuestro boletín
            </label>
            <div className="flex">
              <input
                type="email"
                id="newsletter"
                placeholder="Tu correo"
                className="grow px-3 py-2 rounded-l-md border border-[#A7F3D0] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#10B981] text-white px-4 py-2 rounded-r-md hover:bg-[#059669] transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        {/* Frase emocional final integrada */}
        <div
          className="col-span-1 sm:col-span-2 md:col-span-4 mt-8 text-center text-base text-[#374151] italic"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          EcoTruck no solo recolecta residuos, cultiva conciencia ecológica.
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-4 text-center text-xs text-[#6B7280]">
        © 2025 EcoTruck. Todos los derechos reservados.
      </div>
    </footer>
  );
}
