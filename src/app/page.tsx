
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Con WebGo, digitaliza tu negocio rápidamente y disfruta de soporte 24/7, para que nunca pierdas una venta." cta1="Digitaliza Ahora" />
<How step1Title="Contacta WebGo" step1Desc="Cuéntanos sobre tu negocio en minutos." step2Title="Desarrollamos tu sitio" step2Desc="Web de ventas lista en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para todas tus dudas." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Fácilmente" subheadline="Transformamos tu negocio con sitios web gestionados, sin preocupaciones ni experiencia técnica." beneficiotitulo1="Gestión Completa" beneficio1="Nos ocupamos de todo." beneficiotitulo2="Ventas Online Rápidas" beneficio2="Incrementa ventas sin esfuerzo extra." />
<Services heading="Transforma tu Reputación en Ventas" description="Facilitamos ventas online sin complicaciones ni pérdida de tiempo." services={[{"name":"Desarrollo Rápido","icon":"rocket","description":"Webs en menos de 24 horas."},{"name":"Soporte 24/7","icon":"support","description":"Ayuda constante en todo momento."},{"name":"SEO Optimización","icon":"search","description":"Aumenta tu visibilidad online."},{"name":"Estrategia de Contenidos","icon":"content","description":"Genera contenido que vende."},{"name":"Análisis de Tráfico","icon":"analytics","description":"Conoce y mejora tu audiencia."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita las transacciones online."}]} />
<BeforeAndAfter subheadline="Transformaciones que superan expectativas, cada proyecto es una obra maestra." />
<Faq faqs={[{"pregunta":"¿Cómo puede ayudarme WebGo a digitalizar mis ventas?","respuesta":"WebGo transforma tus recomendaciones en ventas online. Creamos un sitio web atractivo y fácil de usar que atrae a nuevos clientes y muestra lo mejor de tu negocio."},{"pregunta":"No tengo tiempo para gestionar un sitio web. ¿Cómo soluciona esto WebGo?","respuesta":"WebGo se encarga de todo por ti. Diseñamos, gestionamos y actualizamos tu sitio web, permitiéndote concentrarte en lo que haces mejor: dirigir tu negocio."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo?","respuesta":"WebGo te ofrece un aumento en la visibilidad online, más clientes potenciales y una plataforma de ventas eficiente que mejora tus ingresos con menos esfuerzo de tu parte."},{"pregunta":"¿Es complicado iniciar la transición hacia las ventas online con WebGo?","respuesta":"En absoluto. WebGo hace que la transición sea sencilla. Te guiamos paso a paso y nos aseguramos de que tu experiencia sea libre de estrés."},{"pregunta":"¿Cómo asegura WebGo que mi sitio web atraerá más clientes?","respuesta":"Diseñamos sitios web optimizados para SEO y enfocados en la conversión, asegurando que más personas encuentren y elijan tu negocio en línea."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio: Digitaliza Tus Ventas Ahora" 
                      description="Con WebGo, lleva tus ventas al siguiente nivel sin preocuparte por la gestión web. Haz crecer tu negocio con nuestra solución experta para generar ventas online fácilmente."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
