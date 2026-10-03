import Footer from "./components/Footer";
import Header from "./components/Header";
import Whatsapp from "./components/Whatsapp";
import "./globals.css";

export const metadata = {
  title: "Promofix Comunicação Visual | Soluções visuais e gráficas",
  description: "Promofix Comunicação Visual, soluções visuais e gráficas para empresas de todos tamanhos, deixando clientes satisfeitos há 15 anos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        <Whatsapp/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
