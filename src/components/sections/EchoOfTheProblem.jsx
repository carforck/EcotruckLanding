import { useInViewAnimate } from "../../hooks/useInViewAnimate";

export default function EchoOfTheProblem() {
  const { ref, inView, animation, motion: m } = useInViewAnimate(0.25);

  return (
    <section
      id="problema"
      ref={ref}
      className="py-24 bg-eco-light text-center px-6"
    >
      <m.h2
        variants={animation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-4xl font-bold text-eco-dark mb-8"
      >
        Escucha el llamado de las calles
      </m.h2>

      <m.p
        variants={animation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto text-lg text-eco-gray mb-12"
      >
        La acumulación de basura afecta la salud, el turismo y la imagen de
        Cartagena. Falta comunicación en tiempo real entre la comunidad y la
        empresa de aseo.
      </m.p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <m.div
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-white shadow-md rounded-xl p-6"
        >
          <h3 className="text-eco-dark font-semibold text-xl mb-2">
            💭 Desinformación
          </h3>
          <p className="text-eco-gray">
            Los ciudadanos no saben cuándo ni dónde pasará el camión recolector.
          </p>
        </m.div>

        <m.div
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="bg-white shadow-md rounded-xl p-6"
        >
          <h3 className="text-eco-dark font-semibold text-xl mb-2">
            🕒 Retrasos constantes
          </h3>
          <p className="text-eco-gray">
            Las rutas no son optimizadas, lo que genera acumulación y focos de
            contaminación.
          </p>
        </m.div>

        <m.div
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="bg-white shadow-md rounded-xl p-6"
        >
          <h3 className="text-eco-dark font-semibold text-xl mb-2">
            📉 Impacto ambiental
          </h3>
          <p className="text-eco-gray">
            La falta de gestión tecnológica incrementa los residuos y emisiones.
          </p>
        </m.div>
      </div>
    </section>
  );
}
