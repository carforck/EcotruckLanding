export default function Footer() {
  return (
    <footer className="bg-eco-dark text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm opacity-80">© 2025 EcoTruck. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-eco-lime transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-eco-lime transition-colors">GitHub</a>
          <a href="#" className="hover:text-eco-lime transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
