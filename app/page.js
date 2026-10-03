import { Check, Users, Settings, LifeBuoy } from "lucide-react"
import Portfolio from "./components/Portfolio";
import ClientsCarousel from "./components/ClientsCarousel";
import NewsCarousel from "./components/NewsCarousel";

export default function Home() {
  return (
    <>
    <section
      id="start"
      className="relative min-h-[95vh] flex items-center overflow-hidden pt-20"
    >
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/60 to-transparent z-10"></div>
    </section>
    <section id="about" className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="absolute top-0 left-0 w-full h-[180px] z-0">
        <svg viewBox="0 0 1440 180" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#005470" d="M0,120L60,110C120,100,240,80,360,70C480,60,600,60,720,75C840,90,960,120,1080,130C1200,140,1320,130,1380,125L1440,120L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
      <div className="absolute inset-0 bg-pattern"></div>


      <div className="section-container relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-black text-4xl md:text-5xl text-gradient">
                Sobre a Promofix
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Há 16 anos temos como objetivo principal oferecer aos nossos clientes, 
              soluções inovadoras em comunicação visual, e a total satisfação de suas 
              necessidades, seja em pequenos ou grandes projetos.
            </p>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalhamos com projetos personalizados, desde a concepção até a instalação, 
                garantindo que cada detalhe comunique a essência do seu negócio de forma 
                impactante e profissional.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="card-transition flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="about-card-icon">
                  <Check color="#ffffff"/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">16+ Anos de Experiência</h3>
                  <p className="text-muted-foreground">Ampla experiência no mercado de comunicação visual</p>
                </div>
              </div>

              <div className="card-transition flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="about-card-icon">
                  <Users color="#ffffff"/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Equipe Qualificada</h3>
                  <p className="text-muted-foreground">Profissionais especializados em cada etapa do processo</p>
                </div>
              </div>

              <div className="card-transition flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="about-card-icon">
                  <Settings color="#ffffff"/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Tecnologia de Ponta</h3>
                  <p className="text-muted-foreground">Equipamentos modernos para impressão e produção</p>
                </div>
              </div>

              <div className="card-transition flex items-start gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="about-card-icon">
                  <LifeBuoy color="#ffffff"/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Suporte 24/7</h3>
                  <p className="text-muted-foreground">Suporte do início ao fim do seu projeto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Portfolio/>
    <NewsCarousel/>
    <ClientsCarousel/>
    </>
  );
}
