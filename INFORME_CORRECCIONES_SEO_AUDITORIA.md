# Local Local — Correcciones de Bernardo, SEO y auditoría

Estado al 24/10/2026 (actualizado con las decisiones de Tom). Fuente: PDF "revisión local local 01.09" de Bernardo.

**Rondas de trabajo:** F1–F4 = fases del 20/10 (cuatro commits). R2 = 23/10. R3 = 24/10.
**Dos versiones en el repo:** `main` (oficial, con todas las correcciones del PDF) y `v4` (igual que `main` más los cambios de la auditoría, para que Bernardo la apruebe). Nada está publicado todavía: falta el push (ver `GUIA_PASO_A_PASO.md`).

---

## 1. Correcciones de Bernardo: qué se hizo y qué falta

Cada fila indica el estado, la ronda y dónde se aplicó. Todo lo marcado "Hecho" se comprobó contra el código con un script que compara frase por frase (103/112 frases EN y 38/38 ES coinciden literalmente; las 9 restantes viven en componentes o están partidas en dos claves y se revisaron a mano).

### 1.1 Enfoque comercial y home

| # | Pedido | Estado | Detalle |
|---|---|---|---|
| 1 | Oferta visible tras "¿Dónde estás en tu proceso de decisión?" | Hecho (F2) | Bloque `OfertaDiagnostico` en la home |
| 2 | Texto del Diagnóstico personalizado, 5 ítems, valor, garantía junto al precio | Hecho (F2) | Garantía de 48 h junto al valor |
| 2b | Botón "QUIERO MI DIAGNÓSTICO" | Hecho (F2) | |
| 2c | Referencia breve a la visita presencial ("desde $500.000 finales para dos personas") | Hecho (F2) | |
| 2d | No repetir las 4 etapas en la home | Hecho (F2) | Quedan en Método |
| 2e | **Precio nuevo** (pedido posterior de Tom) | Hecho (R2) | ES **$150.000 finales**, EN **USD 100**. Visita presencial: ES $500.000, EN **USD 350** |
| 3 | Público principal: personas, profesionales y familias que evalúan relocalizarse | Hecho (R3) | "Para quién" abre con esa frase. Inversores y empresas siguen en el alcance general |
| 4 | Botón de la guía: cambiarlo si no se envía la guía | Hecho (F3) | "Quiero recibir novedades" / "Subscribe for stories, insights, and updates" |
| 4b | Envío automático del primer newsletter | Hecho en código (R4); **falta configurar Brevo** | Función `api/subscribe.js` + plantilla `marketing/newsletter-01.html`. Sale con el correo de Bernardo como remitente. Pasos en `GUIA_PASO_A_PASO.md` (sección 6) |
| 5 | Bernardo presente temprano: foto, nombre, rol, experiencia, red | Hecho (F2) | Bloque `BernardoHome` |
| 5b | Texto "Una mirada local, una responsabilidad personal", "Nuestra función", matrícula | Hecho (F1, retoque R3 en EN) | Página Nosotros, en ES y EN, con el texto exacto de Bernardo |
| 5c | Ese bloque con letra negra y buen contraste | Hecho (F3) | |

### 1.2 Estética, contacto y navegación

| # | Pedido | Estado | Detalle |
|---|---|---|---|
| 6 | Oscurecer los grises difíciles de leer | Hecho (F3, ajuste R3) | R3 corrigió además el pie de página y Método sobre fondo oscuro (el terracota tenía 1,97:1; ahora ≥ 5,7:1) |
| 6b | Dar protagonismo a las dos frases clave | Hecho (R3) | **No estaba hecho antes**: seguían en cursiva chica. Ahora son texto grande y destacado |
| 6c | Testimonios con nombre e inicial ("Rodrigo Z.") | Hecho (F1) | |
| 6d | Favicon con el logo | Hecho (F4) | |
| 7 | Instagram institucional enlazado | Hecho (F3) | `@locallocal.tandil` en el pie |
| 7b | Email visible e ícono de WhatsApp | Hecho (F3) | `bernardo@locallocal.net` |
| 7c | QR de la web para las postales | Hecho (F3) | `marketing/qr-locallocal-postal.png` / `.svg`, con `utm_source=postal` |
| 8 | Servicios, Método y Nosotros "escondidos" en el celular | Hecho (R3) | **No estaba resuelto**: el botón era solo un ícono de casa. Ahora dice "Menú" |
| 8b | Los CTA llevan al formulario correcto | Hecho (F2) | Se corrigió el destino del post-envío |
| 8c | Pregunta "¿Cómo conociste Local Local?" | Hecho (F3) | Va en el mensaje de WhatsApp |
| 8d | Aviso de privacidad antes de enviar datos | Hecho (F3) | Cuestionario y newsletter |
| 8e | Verificar enlaces de WhatsApp | Parcial (R3) | El formato del enlace y el número (`+54 9 2494 37-4940`) son correctos. Falta una prueba real de envío con el celular |
| 8f | Circuito de agenda y pago | Decisión de Tom | Por ahora el diagnóstico se coordina por WhatsApp, a propósito. Se reevalúa si hay muchas consultas |
| 8g | Funcionamiento del newsletter | Hecho (R4) | Faltaban el texto de ayuda y la confirmación tras enviar (en ES y EN); ya están |

### 1.3 Versión en inglés

| # | Pedido | Estado | Detalle |
|---|---|---|---|
| 9 | URL propia para el inglés, indexable | Hecho (R2) | `/en`, `/en/metodo`, `/en/nosotros`, con hreflang cruzado y canonical propio |
| 9b | Textos que quedaban en español dentro del EN | Hecho (F1/R2) | Revisado con navegador: no se detectaron palabras en español en las 3 páginas EN |
| 9c | Legales en inglés | Hecho (R2) | `/en/legal.html`, con selector ES/EN y aviso de que prevalece la versión en español. **Falta que Bernardo la revise** |
| 9d | "Services" en el menú EN | Hecho (F1) | |
| 9e | Traducciones literales y errores | Hecho (F1, R3) | Terminología (Initial assessment, Roadmap, due diligence…), "I'd had each time I moved", "both both", "the the", "Our the", "regret.." |
| EN-1 | Terminología unificada | Hecho | Sin "diagnosis" ni "audit" en el EN |
| EN-2 | Plazo "within three business days" y 45 min | Hecho (F1) | |
| EN-3 | Formato de precios EN | Hecho (F1, R2) | "Starting at USD 350"; diagnóstico en USD 100 por decisión de Tom |
| EN-4 | Metadatos para redes en inglés | Hecho (R2) | Título y descripción EN en cada página |
| EN-5 | Título propio por página | Hecho (R2) | Home, Método, Nosotros, Legales |
| EN-6 | Home, Método, Nosotros, FAQ: todos los pares "Cambiar / Por" | Hecho (F1, R3) | **R3 corrigió cuatro que faltaban**: párrafo de "El costo de improvisar", párrafo profesional de Bernardo, "organizes and prepares you for the next" y "The full journey at a glance" |
| EN-7 | Galería, controles en inglés | Hecho (F1) | |
| EN-8 | Post-envío del formulario y confirmación del newsletter en inglés | Hecho | |

### 1.4 Unificación de información

| # | Pedido | Estado |
|---|---|---|
| 10 | Plazo: "dentro de los tres días hábiles posteriores a la entrevista" en todo el sitio | Hecho (F1) |
| 10b | Precios con un solo formato ("$… finales", "Desde $500.000 finales") | Hecho (F1) |
| 10c | Nosotros: "técnica. Cada", "profesional. Estoy", "lamentar." | Hecho (F1) |
| 10d | Testimonios: 12 correcciones de ortografía | Hecho (F1) |

### 1.5 Observaciones técnicas (la parte de ChatGPT)

| Tema | Estado | Detalle |
|---|---|---|
| Dominio: canonical, OG, hreflang y datos estructurados con www | Hecho (F4, R2) | |
| Redirección 301 de `locallocal.net` a `www` | Hecho en código (R2); **falta configurar el dominio en Vercel** | Ver tareas de Tom |
| Formularios: `required`, `name`, botón deshabilitado, aviso de privacidad, `<form>` real | Hecho (F3, R2) | |
| Newsletter: `name`, `required`, consentimiento, cómo darse de baja | Hecho (F3) | |
| H1 en Método y Nosotros | Hecho (R2) | R3 corrigió además los saltos de nivel de encabezados |
| Título, descripción y canonical propios por página | Hecho (R2) | |
| Barra final normalizada | Hecho (R2) | `trailingSlash: false` |
| URL inexistente con error 404 real | Hecho (F4 pantalla, R3 código HTTP) | Antes respondía "200" con página vacía. Verificar tras el deploy |
| Versión inglesa con URLs y hreflang | Hecho (R2) | |
| Páginas indexadas en Google | **Pendiente** | Requiere Search Console |
| `robots.txt` y `sitemap.xml` solo con URLs www | Hecho (F4, R2) | Sitemap con las 8 URLs y hreflang |
| Imágenes: WebP, srcset, ancho y alto | Hecho (R2) | |
| Imágenes: AVIF | No hecho | Solo WebP; la ganancia de AVIF es pequeña |
| Imágenes ampliadas sobre su resolución natural | **Pendiente** | Las fotos originales miden 683–1254 px. Hay que pedir originales al fotógrafo |
| Imagen social 1200×630 real y `twitter:image` | Hecho (R2) | |
| Muchas variantes de tipografía / alojarlas localmente | Hecho (R2) | Fuentes propias, 11 archivos en lugar de 3 familias completas de Google |
| Accesibilidad: logo con nombre, "Saltar al contenido", `aria-pressed`, carrusel | Hecho (F4, R2) | |
| Alts en inglés dentro de la versión en español | Hecho (R3) | "Tandil landscape" era decorativa; ahora no tiene texto alternativo |
| Contraste (terracota/beige, verde/beige, blanco/verde) | Hecho (F3, R3) | Terracota 5,5:1, verde 5,7:1, blanco sobre verde 7,5:1 |

---

## 2. SEO

### 2.1 Qué quedó hecho en el código

- Metadatos por página e idioma (título, descripción, canonical, hreflang, Open Graph, Twitter) generados en el build, para que los buscadores y las redes los lean sin ejecutar JavaScript.
- Datos estructurados (JSON-LD) por página: negocio (`ProfessionalService`), Bernardo (`Person`), sitio, página, y migas de pan en Método y Nosotros. Incluyen LinkedIn e Instagram como perfiles oficiales.
- Páginas separadas en español e inglés con URLs propias y sitemap con hreflang.
- 404 real, redirección del dominio sin www, normalización de barra final.
- Fotos en WebP responsive, fuentes propias, caché larga de los archivos con hash, precarga de la foto principal y de las dos fuentes principales.
- Páginas de Método y Nosotros cargan solo cuando se visitan.

**Medición con Lighthouse (móvil, red lenta simulada), sobre el sitio compilado:**

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | CLS |
|---|---|---|---|---|---|
| `/` | 88 | 100 | 100 | 100 | 0 |
| `/en` | 88 | 100 | 100 | 100 | 0 |
| `/metodo` | 85 | 100 | 100 | 100 | 0 |
| `/nosotros` | 88 | 100 | 100 | 100 | 0 |

El rendimiento queda en 85–88 porque la página se arma con JavaScript en el navegador. Subirlo a 95+ exigiría generar el HTML completo en el servidor (SSG/SSR), que es un cambio más grande y con riesgo; hoy no hace falta.

### 2.2 Tareas que podés hacer vos (Tom)

Orden recomendado:

1. **Publicar.** Aprobar el commit y el push. Vercel debe tener `npm run build` como comando y `dist` como carpeta de salida (ya lo usa).
2. **Dominio en Vercel.** Project → Settings → Domains: agregar `locallocal.net` y `www.locallocal.net`; cargar los registros DNS que indique Vercel; esperar el certificado. La redirección del apex a www ya está en `vercel.json`.
3. **Verificar tras el deploy** (10 minutos):
   - `https://www.locallocal.net/en`, `/en/metodo`, `/en/nosotros` cargan en inglés.
   - Una URL inventada (`/xyz`) muestra la pantalla de error y devuelve estado 404.
   - `/metodo/` redirige a `/metodo`.
   - "Ver código fuente" de `/en` muestra el título en inglés.
   - `https://www.locallocal.net/sitemap.xml` y `robots.txt` abren.
   - Pegar la home en [search.google.com/test/rich-results](https://search.google.com/test/rich-results) y en [pagespeed.web.dev](https://pagespeed.web.dev).
4. **Google Search Console.** Crear la propiedad de dominio (se verifica con un registro DNS TXT), enviar `sitemap.xml`, y con "Inspección de URL → Solicitar indexación" pedir las 8 URLs. Revisar el informe de cobertura a los 7 días.
5. **Bing Webmaster Tools.** Importar la propiedad desde Search Console (5 minutos).
6. **Medición.** Crear la propiedad de GA4 y pegar el ID en `src/config.js` (`GA4_ID`). Marcar como conversiones: `questionnaire_complete`, `whatsapp_click` y `newsletter_signup` (ya se envían). Si se va a pautar, crear el Pixel de Meta (`META_PIXEL_ID`). Antes de activarlos, decidir si va un aviso de cookies.
7. **Proveedor de email** (Brevo o Mailchimp): crear la lista, cargar `marketing/newsletter-01.md` como correo de bienvenida y conectar el alta (`LINKS.newsletterEndpoint`). Mientras no exista, el sitio promete un email que no se envía (ver sección 3).
8. **Agenda y cobro.** Elegir cómo se contrata el diagnóstico (Mercado Pago para ARS; Stripe o PayPal si se cobra USD 100) y pegar el link en `LINKS.booking`.
9. **Enlaces con UTM.** Usar siempre `https://www.locallocal.net/?utm_source=instagram&utm_medium=bio` (y equivalentes para LinkedIn, firma de email, WhatsApp). El QR de la postal ya lleva `utm_source=postal`.
10. **Primer enlace desde afuera.** Pedir que Atomgrow enlace a Local Local (el sitio ya enlaza a Atomgrow en el pie).

### 2.3 Tareas que dependen sí o sí de Bernardo

| # | Qué necesito de Bernardo | Para qué |
|---|---|---|
| 1 | **Decidir si la dirección de Tandil (Mitre 767, 1° A) se publica** o si Local Local se muestra como servicio con área de cobertura | Google Business Profile y el pie del sitio. Con área de servicio la dirección se oculta al público, pero Google la pide igual para verificar |
| 2 | Confirmar nombre, teléfono y email **idénticos en todos lados** (hoy: Local Local · +54 9 2494 37-4940 · bernardo@locallocal.net) | Google compara estos datos entre el sitio, el perfil y las redes |
| 3 | Horario de atención y categoría principal del negocio | Ficha de Google Business Profile |
| 4 | Fotos reales: Bernardo, Tandil, el espacio de trabajo si se muestra | Ficha de Google y confianza en el sitio |
| 5 | Verificar el perfil (código postal o video, lo indica Google) | Sin esto la ficha no aparece |
| 6 | **Reseñas reales**: pedir a 3–5 clientes que dejen una reseña en la ficha, con su consentimiento | Prueba social que Google muestra en el mapa. Es lo que más pesa en búsquedas locales |
| 7 | Autorización escrita de los testimonios que están en el sitio | Respaldo de lo publicado |
| 8 | Confirmar las cifras de la tarjeta "La red en números" (+20 profesionales, +8 rubros, +15 años en Tandil) | Si no son exactos, hay que corregirlos antes de publicar |
| 9 | Revisar la traducción de Legales y aprobar los textos legales definitivos | Está en `/en/legal.html`; es un texto jurídico |
| 10 | Fotos originales del fotógrafo (@santiarbeoph): las 55 de la carpeta compartida miden 1024 px como máximo, no están en alta | Se ven pixeladas en pantallas grandes. Pedir los archivos originales sin pasar por WhatsApp |
| 11 | Crear la página de empresa "Local Local" en LinkedIn y poner el sitio en su perfil personal | Enlace de autoridad y mismo nombre en todas las plataformas |
| 12 | Contactar medios y cámaras empresarias de Tandil con una nota de lanzamiento | Enlaces locales que Google valora |
| 13 | Responder las preguntas de la sección 4 | Definen qué se ajusta |

### 2.4 Contenido: el motor de SEO a mediano plazo (lo hacen juntos)

La web hoy tiene cinco páginas. Para aparecer cuando alguien busca "mudarme a Tandil" hacen falta páginas que respondan esas preguntas. Propuesta de primeras guías (cada una con su versión EN), a validar con Search Console antes de escribirlas todas:

1. Cómo es vivir en Tandil: ventajas, desventajas y para quién conviene.
2. Qué revisar antes de comprar una propiedad en Tandil (es donde la experiencia legal de Bernardo diferencia).
3. Colegios en Tandil: cómo elegir y cuándo anotarse.
4. Costo de vida en Tandil comparado con Buenos Aires.
5. Trabajar en remoto desde Tandil.
6. Barrios de Tandil: cómo elegir zona según tu rutina.

Ritmo sugerido: una guía cada 2 semanas. Cada una termina con el llamado al diagnóstico y la invitación al newsletter. Bernardo aporta el criterio legal y de ciudad; Tom da estructura, títulos y publicación. Con la herramienta de búsqueda puedo validar volumen y competencia antes de empezar, si querés.

---

## 3. Auditoría: ¿es la mejor versión para captar leads?

### Veredicto

Es una buena base y no hace falta rehacerla. Tiene lo que más convierte en un servicio de ticket medio y alta confianza: una oferta concreta con precio y garantía a la vista, una persona real detrás, un formulario corto y una versión en inglés ordenada. Lo que hoy le resta no es lo que falta sino lo que se **repite o frena**. Los cambios que propongo **no agregan nada**: unifican, recortan y reordenan.

### Lo que hay que dejar como está

- La portada (clara, un mensaje y un botón principal).
- El bloque de la oferta: precio, qué incluye y garantía junto al botón.
- El bloque de Bernardo y la página Nosotros.
- El formulario de tres preguntas más datos.
- Las preguntas frecuentes y la sección de confidencialidad.

### Lo que medí

| Dato | Móvil | Escritorio |
|---|---|---|
| Largo de la home | **17,9 pantallas** | 12,7 pantallas |
| Palabras en la home | 1.235 | 1.238 |
| Dónde aparece la oferta | pantalla 2,4 | pantalla 1,8 |
| Dónde aparece el formulario | **pantalla 12,5** | pantalla 8,4 |
| Etiquetas distintas para el mismo botón (ES) | 5 | 5 |

### Hallazgo importante: una promesa que hoy no se cumple

El texto del newsletter promete un email con enlace de baja. El código ya envía el alta a Brevo, pero hasta configurarlo (sección 6 de la guía) el sitio usa el respaldo por WhatsApp y **no sale ningún email**. Conviene completar ese paso junto con la publicación.

### Cambios mínimos propuestos (menos es más)

Ordenados por impacto. Ninguno agrega contenido. **Los cambios 1 a 6 están aplicados en la rama `v4`** para que Bernardo los compare con la versión oficial y los apruebe. El 7 queda fuera por decisión de Tom.

| # | Cambio | Esfuerzo | Impacto | ¿Aprueba Bernardo? |
|---|---|---|---|---|
| 1 | **Una sola etiqueta para el botón principal en español: "Quiero mi diagnóstico".** Hoy hay cinco ("Quiero evaluar mi proyecto", "Contanos tu proyecto", "QUIERO MI DIAGNÓSTICO", "Evaluar mi proyecto", "Evaluá tu proyecto →"). El inglés ya está unificado ("Book my assessment"); el español no. El botón fijo del celular además tapa texto de la oferta con una etiqueta distinta a la del botón de la oferta | Bajo | **Alto** | Sí (él pidió ese texto para el botón principal) |
| 2 | **Saltear la pregunta repetida.** "¿Dónde estás en tu proceso de decisión?" y la pregunta 1 del formulario ("¿En qué momento está tu proyecto?") son casi la misma. Si la persona ya respondió arriba, el formulario arranca en la pregunta 2 | Bajo | **Alto** (un paso menos) | No |
| 3 | **Mover los testimonios antes del formulario** y dejar el newsletter debajo. Hoy la prueba social aparece después de pedir los datos, y el newsletter queda pegado al formulario compitiendo | Bajo | Medio | No |
| 4 | **Acortar "Mudarte es mucho más que…"**: es la sección más larga (3 pantallas en móvil, 223 palabras en las 4 tarjetas). Dos tarjetas dicen casi lo mismo ("Información fragmentada" y "Coordinación fragmentada"): unirlas en una deja 3 tarjetas | Bajo | Medio | Sí |
| 5 | **Acortar los dos ítems largos de la barra de confianza** (22 y 28 palabras; los otros tres tienen 9–11). Propuesta: *Auditoría preventiva*: "Revisamos los aspectos legales y técnicos antes de que comprometas tiempo o dinero." *Confidencialidad*: "Tu proyecto no circula por la ciudad. Nada se comparte sin tu autorización." | Bajo | Bajo–medio | Sí |
| 6 | **"Para quién" con dos tarjetas en lugar de tres**: unir "Empresas" con "Profesionales, emprendedores e inversores", alineado con lo que Bernardo pidió (inversores y empresas sin competir con el mensaje principal) | Bajo | Bajo | Sí |
| 7 | Que el botón del diagnóstico termine en agenda o pago, no en un chat | Medio | Alto | **No se hace por ahora**: se prefiere el chat para resolver dudas antes de contratar. Revisar si llegan muchas consultas por WhatsApp |

**Cómo quedaría el recorrido con 1, 2 y 3:** portada → confianza → oferta → Bernardo → problema → para quién → cómo empieza → **testimonios** → formulario (arranca en la pregunta 2 si ya respondió) → newsletter → cierre. Es el mismo contenido, en un orden que pide los datos cuando ya hay confianza.

### Qué no recomiendo

- Agregar más secciones, testimonios o textos. La página ya tiene 1.235 palabras.
- Mostrar el precio de la visita presencial con más detalle. Ya está resumido y la propuesta se arma después del diagnóstico.
- Rehacer el diseño. Las capturas en móvil se ven limpias y consistentes.

---

## 4. Pendientes y decisiones

**Necesitan decisión de Tom o Bernardo**
1. Bernardo compara `main` y `v4` y decide cuál queda.
2. Dirección en Tandil: por ahora se usa Google Business Profile como servicio con zona de cobertura; Bernardo confirma si hay dirección legal para mostrar.
3. Pauta paga: es la etapa siguiente (GA4, Pixel y aviso de cookies pasan a ser prioritarios).
4. El inglés apunta a clientes fuera de Argentina; el cobro se coordina por WhatsApp por ahora.

**Pendientes de datos o terceros**
- Link de agenda y pago.
- Proveedor de email.
- Revisión de Legales EN y textos legales definitivos.
- IDs de GA4 y Meta Pixel.
- Datos de la red validados.
- Dominio en Vercel y Search Console.
- Fotos originales en alta.
- Prueba real de un mensaje por WhatsApp.

**No hecho por decisión técnica**
- AVIF (solo WebP).
- Generar el HTML completo en el servidor (SSG). Subiría el rendimiento a 95+, pero hoy está en 85–88 y el SEO ya marca 100.
- Fondos de la página Método en WebP (van por CSS y siguen en JPG).
