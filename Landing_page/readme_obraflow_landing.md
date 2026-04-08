# ObraFlow - Landing Page y MVP Visual 🚀

Este directorio (`Landing_page/`) contiene el desarrollo inicial de la presencia web y previsualización conceptual interactiva de **ObraFlow**, el sistema operativo impulsado por IA para obras de construcción. 

## 📦 Contenido de la Carpeta

Todo el código de este directorio forma una aplicación web moderna (Progressive Web Application) diseñada con el siguiente stack tecnológico:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) configurado con directivas modernas PostCSS y un patrón de diseño "Dark Mode" de alto contraste.
- **Activos Visuales (`public/images/`):** 
  - `mobile_chat.png`: Mockup generado que ilustra la interfaz de chat de captura de voz para el operario en terreno.
  - `dashboard_ui.png`: Mockup de un panel de control ejecutivo sincronizado.
- **Lógica de Vista (`src/app/page.tsx`):** La estructura del sitio, animaciones (float, pulse-glow), y el recorrido de características principales.

---

## 🎯 Descripción del Producto Final Mostrado

El desarrollo de esta Landing Page conceptualiza visualmente y explica al usuario el producto final de ObraFlow: un modelo que transforma información no estructurada en data limpia mediante IA. 

El producto expuesto se centra en **3 Pilares de Valor (Wow Factor):**

1. **Captura por Voz (Mobile-First):** Una experiencia estilo WhatsApp diseñada para capataces y operarios que no pueden escribir con guantes. Captura porcentajes de obra, incidentes y comentarios en audios de apenas 10 segundos.
2. **Validación Obligatoria (El Cerebro/Agente LLM):** El sistema (utilizando Gemini AI) *audita* la conversación del operario interactuando en tiempo real. Si el operario olvida información de fondo ("Se bloqueó el avance por un material"), el agente pregunta inmediatamente "*¿Qué material específicamente falta?*" para garantizar que la bitácora esté 100% correcta.
3. **Control Total (Dashboard en Oficina Central):** La data validada por el agente termina en bases de datos robustas y estructuradas de **Google Cloud Platform (GCP)**. Estas a su vez, configuran un dashboard empresarial que provee métricas instantáneas, semáforos de advertencia y trazabilidad de los contratistas.

> *Este proyecto establece las bases visuales del frontend para luego conectar la captura de micrófono real y los conectores de GCP con Gemini.*
