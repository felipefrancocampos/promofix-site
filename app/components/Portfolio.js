"use client";

import { useState, useEffect } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("TODOS");
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, category: "AMBIENTAÇÃO", title: "Ambiente 01", image: "/portfolio/AMBIENTAÇÃO/AMB_01.webp" },
    { id: 2, category: "AMBIENTAÇÃO", title: "Ambiente 02", image: "/portfolio/AMBIENTAÇÃO/AMB_02.webp" },
    { id: 3, category: "AMBIENTAÇÃO", title: "Ambiente 03", image: "/portfolio/AMBIENTAÇÃO/AMB_03.webp" },
    { id: 4, category: "AMBIENTAÇÃO", title: "Ambiente 04", image: "/portfolio/AMBIENTAÇÃO/AMB_04.webp" },
    { id: 5, category: "AMBIENTAÇÃO", title: "Ambiente 05", image: "/portfolio/AMBIENTAÇÃO/AMB_05.webp" },
    { id: 6, category: "AMBIENTAÇÃO", title: "Ambiente 06", image: "/portfolio/AMBIENTAÇÃO/AMB_06.webp" },
    { id: 7, category: "AMBIENTAÇÃO", title: "Ambiente 07", image: "/portfolio/AMBIENTAÇÃO/AMB_07.webp" },
    { id: 8, category: "AMBIENTAÇÃO", title: "Ambiente 08", image: "/portfolio/AMBIENTAÇÃO/AMB_08.webp" },
    { id: 9, category: "ESPECIAIS", title: "Especial 01", image: "/portfolio/ESPECIAIS/Especial.webp" },
    { id: 10, category: "EVENTOS", title: "Evento 01", image: "/portfolio/EVENTOS/EVENTO_01.webp" },
    { id: 11, category: "EVENTOS", title: "Evento 02", image: "/portfolio/EVENTOS/EVENTO_02.webp" },
    { id: 12, category: "EVENTOS", title: "Evento 03", image: "/portfolio/EVENTOS/EVENTO_03.webp" },
    { id: 13, category: "EVENTOS", title: "Evento 04", image: "/portfolio/EVENTOS/EVENTO_04.webp" },
    { id: 14, category: "EVENTOS", title: "Evento 05", image: "/portfolio/EVENTOS/EVENTO_05.webp" },
    { id: 15, category: "EVENTOS", title: "Evento 06", image: "/portfolio/EVENTOS/EVENTO_06.webp" },
    { id: 16, category: "EVENTOS", title: "Evento 07", image: "/portfolio/EVENTOS/EVENTO_07.webp" },
    { id: 17, category: "EVENTOS", title: "Evento 08", image: "/portfolio/EVENTOS/EVENTO_08.webp" },
    { id: 18, category: "EVENTOS", title: "Evento 09", image: "/portfolio/EVENTOS/EVENTO_09.webp" },
    { id: 19, category: "PDV", title: "PDV 01", image: "/portfolio/PDV/PDV_01.webp" },
    { id: 20, category: "PDV", title: "PDV 02", image: "/portfolio/PDV/PDV_02.webp" },
    { id: 21, category: "PDV", title: "PDV 03", image: "/portfolio/PDV/PDV_03.webp" },
    { id: 22, category: "PDV", title: "PDV 04", image: "/portfolio/PDV/PDV_04.webp" },
    { id: 23, category: "PDV", title: "PDV 05", image: "/portfolio/PDV/PDV_05.webp" },
    { id: 24, category: "FROTAS", title: "Frota 01", image: "/portfolio/FROTAS/FROTA_01.webp" },
    { id: 25, category: "FROTAS", title: "Frota 02", image: "/portfolio/FROTAS/FROTA_02.webp" },
    { id: 26, category: "FROTAS", title: "Frota 03", image: "/portfolio/FROTAS/FROTA_03.webp" },
    { id: 27, category: "FROTAS", title: "Frota 04", image: "/portfolio/FROTAS/FROTA_04.webp" },
    { id: 28, category: "FROTAS", title: "Frota 05", image: "/portfolio/FROTAS/FROTA_05.webp" },
    { id: 29, category: "FROTAS", title: "Frota 06", image: "/portfolio/FROTAS/FRTO_01.webp" },
    { id: 30, category: "PROMOÇÕES", title: "Promoção 01", image: "/portfolio/PROMOÇÕES/PROMO_01.webp" },
    { id: 31, category: "PROMOÇÕES", title: "Promoção 02", image: "/portfolio/PROMOÇÕES/PROMO_02.webp" },
    { id: 32, category: "PROMOÇÕES", title: "Promoção 03", image: "/portfolio/PROMOÇÕES/PROMO_03.webp" },
    { id: 33, category: "PROMOÇÕES", title: "Promoção 04", image: "/portfolio/PROMOÇÕES/PROMO_04.webp" },
    { id: 34, category: "PROMOÇÕES", title: "Promoção 05", image: "/portfolio/PROMOÇÕES/PROMO_05.webp" },
    { id: 35, category: "PROMOÇÕES", title: "Promoção 06", image: "/portfolio/PROMOÇÕES/PROMO_06.webp" },
    { id: 36, category: "PROMOÇÕES", title: "Promoção 07", image: "/portfolio/PROMOÇÕES/PROMO_07.webp" },
    { id: 37, category: "SINALIZAÇÃO", title: "Sinalização 01", image: "/portfolio/SINALIZAÇÃO/aplica____o-05.webp" },
    { id: 38, category: "SINALIZAÇÃO", title: "Sinalização 02", image: "/portfolio/SINALIZAÇÃO/BANNER 04.webp" },
    { id: 39, category: "SINALIZAÇÃO", title: "Sinalização 03", image: "/portfolio/SINALIZAÇÃO/FOX_05.webp" },
    { id: 40, category: "SINALIZAÇÃO", title: "Sinalização 04", image: "/portfolio/SINALIZAÇÃO/PAINEL_04.webp" },
    { id: 41, category: "SINALIZAÇÃO", title: "Sinalização 05", image: "/portfolio/SINALIZAÇÃO/placa-para-sinalizacao-interna-de-empresa.webp" },
    { id: 42, category: "SINALIZAÇÃO", title: "Sinalização 06", image: "/portfolio/SINALIZAÇÃO/SHARK TOTEM.webp" }
  ];

  const categories = ["TODOS", "AMBIENTAÇÃO", "ESPECIAIS", "EVENTOS", "PDV", "FROTAS", "PROMOÇÕES", "SINALIZAÇÃO"];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth >= 1400);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const filteredItems = filter === "TODOS" ? items : items.filter((item) => item.category === filter);
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const nextSlide = () => setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));

  const handleShowAllToggle = () => {
    if (showAll) {
      setShowAll(false);
      const section = document.getElementById("portfolio");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="portfolio" className="py-24 relative w-full overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="section-container px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>

          {isDesktop ? (
            <div className="flex flex-row justify-center items-center gap-1 p-4 rounded-2xl bg-gradient-to-r from-[#005470] to-[#508495] shadow-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setShowAll(false);
                    setCurrentIndex(0);
                  }}
                  className={`px-6 py-3 font-semibold transition-all duration-300 relative overflow-hidden ${
                    filter === cat 
                      ? "text-white bg-white/20 backdrop-blur-sm rounded-xl shadow-inner" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ minWidth: "140px", borderRadius: "12px" }}
                >
                  <span className="relative z-10">{cat}</span>
                  {filter === cat && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto no-scrollbar py-2">
              <div className="flex space-x-3 px-4 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setShowAll(false);
                      setCurrentIndex(0);
                    }}
                    className={`px-6 py-3 font-semibold transition-all duration-300 whitespace-nowrap relative overflow-hidden ${
                      filter === cat
                        ? "bg-[#005470] text-white shadow-lg rounded-xl"
                        : "bg-gradient-to-r from-[#508495] to-[#005470] text-white/90 hover:text-white hover:shadow-md"
                    }`}
                    style={{ borderRadius: "12px", minWidth: "120px" }}
                  >
                    <span className="relative z-10">{cat}</span>
                    {filter !== cat && (
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {!isMobile ? (
          <>
            <div className="flex flex-wrap justify-center gap-6">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-lg shadow-sm cursor-pointer overflow-hidden w-[429px] h-[533px] transition-transform duration-300 hover:-translate-y-2"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center z-10">
                    <div className="text-sm font-semibold text-white/90 mb-2">{item.category}</div>
                    <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length > 6 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleShowAllToggle}
                  className="px-8 py-3 bg-gradient-to-r from-[#005470] to-[#508495] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {showAll ? "Ver menos" : "Ver mais"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredItems.map((item) => (
                  <div key={item.id} className="relative w-full flex-shrink-0" style={{ height: "400px" }}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 z-10">
                      <div className="text-sm font-semibold text-white/90 mb-2">{item.category}</div>
                      <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/70 transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/70 transition-colors"
                >
                  ›
                </button>
                <div className="flex justify-center mt-4 space-x-2">
                  {filteredItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-[#005470]" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}