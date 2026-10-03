"use client";

const logosFirstRow = [
  { src: "/clients/BrasilSeguros.webp", link: "https://www.bbseguros.com.br/" },
  { src: "/clients/CptmLogo.png", link: "https://www.cptm.sp.gov.br/cptm" },
  { src: "/clients/MotorolaLogo.png", link: "https://www.motorola.com.br/" },
  { src: "/clients/AmbevLogo.png", link: "https://www.ambev.com.br/" },
  { src: "/clients/Mak_logo.webp", link: "https://agenciamak.com.br/" },
  { src: "/clients/DhlLogo.png", link: "https://www.dhl.com/br-pt/home.html" },
  { src: "/clients/ProcterGambleLogo.png", link: "https://br.pg.com/" }
];

const logosSecondRow = [
  { src: "/clients/unilever_logo.webp", link: "https://www.unilever.com.br/" },
  { src: "/clients/alice_seguros.webp", link: "https://alice.com.br/" },
  { src: "/clients/NovartisLogo.png", link: "https://www.novartis.com/br-pt/" },
  { src: "/clients/FbizLogo.png", link: "https://www.fbiz.com.br/" },
  { src: "/clients/GreyLogo.png", link: "https://grey.com/" },
  { src: "/clients/SandozLogo.png", link: "https://www.sandoz.com.br/" },
  { src: "/clients/OvomaltineLogo.png", link: "https://ovomaltine.com.br/" },
  { src: "/clients/ProsLogo.png", link: "https://pros.com.vc/" }
];

export default function ClientsCarousel() {
  const renderLogo = (logo, index) => (
    <div key={index} className="flex items-center justify-center mx-1 sm:mx-3 lg:mx-4">
      <a
        href={logo.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-20 w-36 sm:h-28 sm:w-52 md:h-32 md:w-60 transition-transform duration-300 ease-in-out hover:scale-125"
      >
        <img
          src={logo.src}
          alt={`Client logo ${index + 1}`}
          className="object-contain w-full h-full"
        />
      </a>
    </div>
  );

  return (
    <section id="clients" className="w-full py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Parceiros</span>
          </h2>
          <p className="text-xl text-[#508495] max-w-2xl mx-auto">
            Clientes que fizeram parte da nossa história
          </p>
        </div>

        <div className="w-full overflow-hidden relative mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm=w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-scroll-mobile sm:animate-scroll">
            <div className="flex shrink-0">{logosFirstRow.map(renderLogo)}</div>
            <div className="flex shrink-0">{logosFirstRow.map(renderLogo)}</div>
            <div className="flex shrink-0">{logosFirstRow.map(renderLogo)}</div>
          </div>
        </div>

        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-scroll-reverse-mobile sm:animate-scroll-reverse">
            <div className="flex shrink-0">{logosSecondRow.map(renderLogo)}</div>
            <div className="flex shrink-0">{logosSecondRow.map(renderLogo)}</div>
            <div className="flex shrink-0">{logosSecondRow.map(renderLogo)}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-66.666%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-66.666%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-reverse-mobile {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll { animation: scroll 35s linear infinite; }
        .animate-scroll-reverse { animation: scroll-reverse 40s linear infinite; }
        .animate-scroll-mobile { animation: scroll-mobile 50s linear infinite; }
        .animate-scroll-reverse-mobile { animation: scroll-reverse-mobile 55s linear infinite; }
      `}</style>
    </section>
  );
}
