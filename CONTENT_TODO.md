# CONTENT_TODO — Pendientes antes de publicar Local Local v2

Contenidos que **NO deben publicarse como definitivos** en su estado actual.

## Crítico (bloquea publicación seria)

- [ ] **Testimonios demo** — `src/content/testimonials.js`. Los tres testimonios tienen `isDemo: true` y muestran un sello rojo "TESTIMONIO DEMO — REEMPLAZAR ANTES DE PUBLICAR". Reemplazar por experiencias reales con autorización registrada y poner `isDemo: false`. **Nunca publicar los demo como reales.**
- [x] **Fotografías de Tandil** — RESUELTO PARCIAL (16-jul-2026): hero y galería usan fotos reales de la carpeta "Fotos | Sierras de Tandil" (@santiarbeoph), renombradas en `src/assets/tandil-*.jpg`. **Limitación: los archivos disponibles son de 1024px** (parecen exports reducidos de Google Drive). En monitores grandes el hero se reescala; pedir al fotógrafo los originales en alta resolución y reemplazar los archivos manteniendo los nombres. Falta también una escena urbana de calle/vida cotidiana y una de gastronomía/comunidad si se quieren sumar.
- [ ] **Retrato de Bernardo** — `src/components/Nosotros.jsx` (constante `BERNARDO_PHOTO`). Hoy placeholder. Luz natural, medio cuerpo, entorno Tandil o fondo cálido. LinkedIn solo como interino.
- [ ] **URL de LinkedIn de Bernardo** — `src/config.js` → `LINKS.linkedin`. Confirmar URL exacta.
- [ ] **Textos jurídicos** — footer enlaza "Alcance / Términos / Privacidad / Confidencialidad" con `href="#"`. Crear páginas o modales con el contenido legal definitivo.
- [ ] **Garantía del diagnóstico** — el copy de 48 hs (secciones Nosotros y Diagnóstico) debe quedar respaldado por términos y condiciones reales antes de publicar.

## Importante

- [ ] **Precio del diagnóstico** — `src/config.js` → `DIAGNOSTIC_PRICE` (`show: false`). Definir monto, moneda y medios de pago; el bloque de precio ya está preparado en `Diagnostico.jsx`.
- [ ] **Enlace de agenda/pago** — `src/config.js` → `LINKS.booking` (Calendly / Cal.com / Mercado Pago / Stripe). Mientras esté vacío, los CTA de diagnóstico llevan al cuestionario/WhatsApp.
- [ ] **Newsletter** — `src/config.js` → `LINKS.newsletterEndpoint`. Conectar proveedor (Mailchimp/Brevo). Hoy el alta solo dispara evento de analytics. No prometer frecuencia semanal hasta confirmarla.
- [ ] **GA4 y Meta Pixel** — `src/config.js` → `GA4_ID`, `META_PIXEL_ID` (placeholders; no se cargan hasta reemplazarlos). Evaluar banner de consentimiento de cookies al activarlos.
- [ ] **Números de la red** — sección Red muestra "20+ profesionales / 8 rubros / 10+ años" (`strings.js` → `red.stats`). **Validar internamente con Bernardo antes de publicar**; ajustar si no son exactos.
- [ ] **Datos de contacto** — número de WhatsApp en `src/config.js` (verificar que 5492494374940 sea el definitivo). Correo e Instagram pendientes.

## Deseable

- [ ] **Traducción EN** — revisión final humana del inglés (está escrito con criterio, no traducción literal, pero conviene una pasada nativa).
- [ ] **Página /preguntas-frecuentes** — el enlace "Ver todas las preguntas" está comentado en `Faq.jsx` hasta que exista la página completa.
- [ ] **og:image** — crear imagen 1200×630 cuando lleguen las fotos y descomentar el meta en `index.html`.
- [ ] **Afirmaciones estadísticas** — la sección Tandil usa solo formulaciones cualitativas. Si se quieren datos (seguridad, crecimiento, valorización), cargar fuentes verificables primero.
- [ ] **Costos evitados en escenarios** — la sección "El costo de improvisar" evita cifras específicas en dólares deliberadamente (no estaban validadas). Si se quieren agregar rangos ("ejemplo típico: USD 2-3k"), validarlos antes.
