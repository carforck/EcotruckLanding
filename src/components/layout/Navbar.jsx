// src/components/layout/Navbar.jsx
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const contentEl = navEl.querySelector(".card-nav-content");
    if (contentEl) {
      const height = contentEl.scrollHeight;
      return 60 + height + 16;
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 30, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease: "power3.out" });
    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 }, "-=0.1");
    return tl;
  };

  useLayoutEffect(() => {
    tlRef.current = createTimeline();
    return () => tlRef.current?.kill();
  }, []);

  const toggleMenu = () => {
    if (!tlRef.current) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tlRef.current.play(0);
    } else {
      setIsHamburgerOpen(false);
      tlRef.current.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tlRef.current.reverse();
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
    <div className="fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[820px] z-50 top-6 md:top-8">
      <nav
        ref={navRef}
        className="block h-auto rounded-2xl shadow-lg relative bg-[#F5F7F4] border border-[#E5E7EB] transition-all backdrop-blur-md bg-opacity-90"
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
                isHamburgerOpen ? "translate-y-1 rotate-45" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-0.5 bg-[#014D40] transition-all duration-300 ${
                isHamburgerOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            ></div>
          </div>

          {/* Texto EcoTruck */}
          <span className="font-bold text-[#014D40] text-lg tracking-tight">
            EcoTruck
          </span>

          {/* Botón */}
          <a
            href="#cta"
            className="hidden md:inline-flex bg-[#A6E22E] text-[#014D40] font-semibold px-5 py-2 rounded-full hover:bg-[#FFC300] transition-all"
          >
            Solicita demo
          </a>
        </div>

        {/* CONTENIDO DE LAS TARJETAS */}
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
