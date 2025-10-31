// src/components/layout/Navbar.jsx
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  const SCROLL_THRESHOLD = 100;

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const contentEl = navEl.querySelector(".card-nav-content");
    if (contentEl) {
      const height = contentEl.scrollHeight;
      // Usamos la altura del contenido + la altura de la barra superior (60px) + padding (16px)
      return 60 + height + 16;
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    const containerEl = containerRef.current;
    if (!navEl || !containerEl) return null;

    // Valores de ancho iniciales seguros
    const initialMobileWidth = "260px";
    const initialDesktopWidth = "300px";

    // --- ESTADO INICIAL (Contracción Horizontal y Anclado a la Derecha) ---
    // NOTA: GSAP anima desde estas propiedades. El Navbar debe empezar en 60px de alto.
    gsap.set(containerEl, {
      width: initialMobileWidth,
      maxWidth: initialMobileWidth,
      x: 0,
    });
    if (window.innerWidth >= 768) {
      gsap.set(containerEl, {
        width: initialDesktopWidth,
        maxWidth: initialDesktopWidth,
      });
    }

    // Inicialmente, el Navbar tiene la altura mínima y las tarjetas están ocultas.
    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 30, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    // 1. ANIMACIÓN DE EXPANSIÓN HORIZONTAL Y CENTRADO (Activada por Scroll)
    tl.to(
      containerEl,
      {
        width: "90%",
        maxWidth: "820px",
        right: "50%",
        x: "50%",
        duration: 0.6,
        ease: "power3.out",
      },
      "start_scroll"
    ); // 👈 Etiqueta para controlar el inicio de la animación de scroll

    // 2. ANIMACIÓN DE EXPANSIÓN VERTICAL (Activada por Click de Hamburguesa)
    // El timeline se detiene aquí y solo avanza si se llama play(start_menu)
    tl.to(
      navEl,
      { height: calculateHeight, duration: 0.4, ease: "power3.out" },
      "start_menu"
    );
    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
      "start_menu+=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    tlRef.current = createTimeline();
    return () => tlRef.current?.kill();
  }, []);

  // Manejo del Scroll: SOLO controla la animación de POSICIÓN y ANCHO (horizontal)
  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastThreshold = window.scrollY > SCROLL_THRESHOLD;

      if (scrolledPastThreshold && !isScrolled && tlRef.current) {
        // --- EXPANDIR HORIZONTALMENTE ---
        // Usamos .tweenTo para mover el timeline solo hasta la etiqueta "start_menu",
        // lo que ejecuta solo la animación de posición/ancho (horizontal)
        tlRef.current.tweenTo("start_menu");
        setIsScrolled(true);
      } else if (!scrolledPastThreshold && isScrolled && tlRef.current) {
        // --- CONTRAER HORIZONTALMENTE ---
        // Revierte el timeline solo hasta el punto inicial (0), que desactiva la animación horizontal
        tlRef.current.tweenTo(0);
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Función para alternar el menú: SOLO controla la animación de ALTURA y TARJETAS (vertical)
  const toggleMenu = () => {
    if (!tlRef.current) return;

    // Alternar solo el estado visual del icono, sin cambiar el TL, si ya está expandido por scroll
    if (isScrolled) {
      setIsHamburgerOpen(!isHamburgerOpen);
      // Si ya está expandido horizontalmente, controlamos solo la expansión vertical
      if (!isExpanded) {
        tlRef.current.tweenTo(tlRef.current.totalDuration()); // Juega hasta el final (expande vertical)
        setIsExpanded(true);
      } else {
        tlRef.current.tweenTo("start_menu"); // Vuelve al punto donde solo está la expansión horizontal
        setIsExpanded(false);
      }
      return;
    }

    // Lógica para cuando está en la parte superior (solo expansión vertical)
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      // Juega solo la parte vertical del TL
      tlRef.current.tweenTo(tlRef.current.totalDuration());
    } else {
      setIsHamburgerOpen(false);
      // Vuelve al punto donde el Navbar tiene altura 60px y el contenido está oculto
      tlRef.current.tweenTo("start_scroll");
      tlRef.current.eventCallback("onComplete", () => setIsExpanded(false));
    }
  };

  const navItems = [
    {
      label: "Explora",
      bgColor: "#014D40",
      textColor: "#F5F7F4",
      links: [
        { label: "Inicio", href: "#inicio" },
        { label: "Problema", href: "#problema" },
        { label: "Solución", href: "#solucion" },
      ],
    },
    {
      label: "Conecta",
      bgColor: "#A6E22E",
      textColor: "#014D40",
      links: [
        { label: "Tecnologias", href: "#tecnologias" },
        { label: "Impacto", href: "#impacto" },
        { label: "Equipo", href: "#equipo" },
      ],
    },
    {
      label: "Acciona",
      bgColor: "#FFC300",
      textColor: "#1A1A1A",
      links: [
        { label: "Solicita demo", href: "#cta" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`fixed right-4 md:right-8 z-50 top-6 md:top-8`}
    >
      <nav
        ref={navRef}
        className="block h-auto rounded-2xl shadow-lg relative bg-[#F5F7F4] border border-[#E5E7EB] backdrop-blur-md bg-opacity-90"
      >
        {/* TOP BAR */}
        <div className="absolute inset-x-0 top-0 h-15 flex items-center justify-between px-4 z-2">
          {/* Hamburger */}
          <div
            className="cursor-pointer flex flex-col justify-center gap-1.5"
            onClick={toggleMenu}
          >
            <div
              className={`w-7 h-0.5 bg-[#014D40] transition-all duration-300 ${
                isHamburgerOpen && isExpanded ? "translate-y-1 rotate-45" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-0.5 bg-[#014D40] transition-all duration-300 ${
                isHamburgerOpen && isExpanded ? "-translate-y-1 -rotate-45" : ""
              }`}
            ></div>
          </div>

          {/* Texto EcoTruck - Oculto hasta que se hace scroll */}
          <span
            className={`font-bold text-[#014D40] text-lg tracking-tight transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            EcoTruck
          </span>

          {/* Botón "Solicita demo" */}
          <a
            href="http://localhost:5175/login"
            className="inline-flex bg-[#A6E22E] text-[#014D40] font-semibold px-5 py-2 rounded-full hover:bg-[#FFC300] transition-all whitespace-nowrap"
          >
            Solicita demo
          </a>
        </div>

        {/* CONTENIDO DE LAS TARJETAS (Se despliega verticalmente) */}
        <div className="card-nav-content mt-15 flex flex-col md:flex-row justify-center gap-2 p-3">
          {navItems.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="rounded-xl flex-1 p-4 flex flex-col justify-between shadow-sm relative transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:brightness-105"
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                {item.label}
                <span className="text-xs opacity-70">•••</span>
              </h3>
              <div className="flex flex-col gap-1">
                {item.links.map((lnk, j) => (
                  <a
                    key={j}
                    href={lnk.href}
                    className="flex items-center gap-2 text-sm hover:translate-x-1 transition-all"
                  >
                    <GoArrowUpRight />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
