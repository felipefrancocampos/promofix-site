import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer id='contact' className="text-white text-sm">
      <section className="py-12 border-b border-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
            <h2 className="subtitle-footer flex items-center text-lg font-semibold mb-4 border-b border-white pb-2">
              <Phone size={18} className="mr-2" /> Contato
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-0.5" size={16} />
                Rua Adão Norberto de Andrade – 193 – Jurubatuba, São Paulo, Brasil
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 mt-0.5" size={16} />
                (11) 5686-9059
                (11) 97445-9797
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 mt-0.5" size={16} />
                <a href="mailto:atendimento2@promofix.com.br" className="hover:underline hover:text-red-400 transition-colors">
                    atendimento2@promofix.com.br
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="hover:text-red-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/promofix.com.br/" aria-label="Instagram" className="hover:text-red-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-red-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="subtitle-footer flex items-center text-lg font-semibold mb-4 border-b border-white pb-2">
              <MapPin size={18} className="mr-2" /> Localização
            </h2>
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.249970756518!2d-46.6707983!3d-23.5589158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bcbf8b2d8f7%3A0x5d0e9f8a8b9a07f8!2sCEP%2004675-150%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1734390500000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da PROMOFIX - CEP 04675-150"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="subtitle-footer flex items-center text-lg font-semibold mb-4 border-b border-white pb-2">
              <Mail size={18} className="mr-2" /> Envie uma mensagem
            </h2>
            <ContactForm/>
          </div>
        </div>
      </section>

      <section className="py-6 border-b border-white">
        <div className="container mx-auto px-6">
          <ul className="flex flex-wrap justify-center gap-6 text-base font-medium">
            <li><a href="#start" className="footer-link transition-colors">Início</a></li>
            <li><a href="#about" className="footer-link transition-colors">Sobre Nós</a></li>
            <li><a href="#portfolio" className="footer-link transition-colors">Portfólio</a></li>
            <li><a href="#news" className="footer-link transition-colors">Novidades</a></li>
            <li><a href="#clients" className="footer-link transition-colors">Clientes</a></li>
          </ul>
        </div>
      </section>

      <section className="py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between text-center md:text-left text-xs text-white">
          <div>© 2025 PROMOFIX Comunicação Visual. Todos os direitos reservados.</div>
          <div><a href="https://francotechsolutions.com.br/" target='_blank'>Desenvolvido por Franco Tech Solutions</a></div>
        </div>
      </section>
    </footer>
  );
}
