# Local Local: informe interno (Tom)

**ACTUALIZACIÓN 25/10/2026: la versión B (rama `v4`) fue la elegida y ya está publicada en https://www.locallocal.net.** Verificado en producción: portada en español e inglés, guías, sitemap (22 URLs), 404 real y función del newsletter (cae al respaldo por WhatsApp hasta configurar Resend).
**Falta:** el dominio sin www (`locallocal.net`) todavía no abre por HTTPS: hay que agregarlo en el panel de Vercel (ver paso 2 de `02-guia-paso-a-paso.md`).

Estado al 25/10/2026. Documento para vos. El detalle de **todas** las correcciones de Bernardo, punto por punto, está en `../para-bernardo/02-correcciones-realizadas.md`.

## 1. Cómo quedó armado

**Etapa 1 (correcciones): terminada y publicada** (versión B).

| Rama | Qué es | Dónde se ve |
|---|---|---|
| `v3-final` (igual a `main`) | **Versión A**, la oficial: todas las correcciones del PDF | Vista previa de Vercel |
| `v4` | **Versión B**: la A más 6 ajustes mínimos de la auditoría | Vista previa de Vercel |

`main` ya contiene la versión B. Las ramas `v3-final` y `v4` quedan como respaldo de las dos versiones.

**Las dos versiones incluyen** (lo nuevo de esta ronda): precio $150.000 / USD 100 y visita USD 350 en inglés, URLs en inglés (`/en`), Legales en inglés, 6 guías en ES/EN, newsletter por email con Resend, y las mejoras de SEO descritas abajo.

## 2. Medición (Lighthouse, celular, red lenta simulada)

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | CLS |
|---|---|---|---|---|---|
| `/` | 87 | 100 | 100 | 100 | 0 |
| `/en` | 88 | 100 | 100 | 100 | 0 |
| `/guias/como-es-vivir-en-tandil` | 91 | 100 | 100 | 100 | 0 |
| `/en/guides/living-in-tandil` | 91 | 100 | 100 | 100 | 0 |

El rendimiento queda en 87–91 porque la página se arma con JavaScript. Llegar a 95+ exigiría generar el HTML completo en el servidor; hoy no hace falta.

## 3. Tus búsquedas en Google: qué esperar

Hoy no aparecés porque el sitio **todavía no está indexado** (Google no lo conoce). Lo que se hizo y lo que falta:

| Búsqueda | Qué se hizo | Qué falta | Expectativa realista |
|---|---|---|---|
| **locallocal.net** | Sitemap, canonical en www, datos del negocio | Publicar, verificar en Search Console y pedir indexación | Debería aparecer en días a semanas |
| **locallocal** / **local local** | Nombre en título, H1, datos estructurados con las variantes "LocalLocal" y "Local Local Tandil"; enlaces a Instagram y LinkedIn | Indexación, ficha de Google, enlaces desde perfiles propios | Semanas. El nombre es una frase común, así que puede haber otros resultados antes |
| **relocalización Tandil / en Tandil** | "Relocalización en Tandil" en el título, la descripción y el H1 de la portada, y una guía con ese nombre | Indexación y enlaces desde otros sitios | Es la búsqueda con mejores chances. Semanas a pocos meses |
| **relocalización en Argentina** | Una guía específica ("cómo mudarte a Tandil desde otra ciudad o desde el exterior") | Contenido continuo y enlaces | **Muy competitiva y ambigua** (incluye relocalización corporativa y mudanzas). No es realista prometer primera página en el corto plazo |
| **relocalización** (sola) | Nada específico | — | No conviene apuntar ahí: es demasiado amplia |

**Importante:** nadie puede garantizar una posición en Google. Lo que sí podemos hacer es lo que está en el informe: que Google encuentre y entienda el sitio (hecho), y sumar contenido y enlaces (etapa siguiente).

**Qué ayuda más, en orden:** 1) indexación (Search Console), 2) ficha de Google con reseñas, 3) guías nuevas con regularidad, 4) enlaces desde medios locales, LinkedIn, Instagram y Atomgrow.

## 4. Mejoras de SEO ya hechas

- Metadatos, datos estructurados y canonical por página e idioma, generados en el build.
- Páginas en español e inglés con URL propia y hreflang cruzado.
- "Relocalización en Tandil" dentro del H1 de la portada.
- Nombres alternativos de la marca en los datos estructurados.
- Seis guías con título, descripción, datos estructurados de artículo y migas de pan; enlace "Guías" en el menú y el pie.
- Sitemap generado en cada build con las 22 URLs.
- 404 real, fotos en WebP con medidas, fuentes propias, carga diferida de páginas.

## 5. Auditoría de la página (resumen)

Es una buena base: oferta clara con precio y garantía a la vista, una persona real detrás y formulario corto. Lo que le restaba era lo que se repetía. Los seis ajustes de la versión B lo resuelven sin agregar contenido:

1. Un solo botón principal en español.
2. El formulario omite la pregunta repetida.
3. Testimonios antes del formulario.
4. Tres tarjetas en lugar de cuatro en "El costo de improvisar".
5. Barra de confianza más corta.
6. "Para quién" con dos tarjetas.

**Decisión de Tom:** el botón del diagnóstico va a WhatsApp (no a pago). Se revisa si llegan muchas consultas.

## 6. Decisiones registradas

- Visita presencial: **USD 350** en inglés (en español, $500.000).
- La dirección de Tandil se usa como **zona de cobertura** en la ficha de Google; se le consulta a Bernardo si tiene dirección legal, porque sumaría.
- Pauta paga: etapa siguiente.
- Foto de Bernardo: la cambia él cuando pueda.
- Fotos del sitio: se dejan como están (1024 px máximo, funcionan). Mejorarlas es opcional.
- Los números de la red ("+ de 20 / + de 8 / + de 15 años") **son de Bernardo** (están en su devolución del 23.07): no necesitan validación.
- Email: se usa **Resend** (ya tenés cuenta) en lugar de Brevo.

## 7. Pendientes tuyos

Pasos detallados en `02-guia-paso-a-paso.md`.

- [ ] Rotar el token de GitHub y publicar las dos versiones.
- [ ] Enviarle a Bernardo el mensaje y los documentos de `../para-bernardo/`.
- [ ] Cuando elija: publicar en `main`.
- [ ] Dominio en Vercel (www y apex).
- [ ] Search Console y Bing.
- [ ] Resend: dominio, clave y variables en Vercel.
- [ ] GA4 (ID en `src/config.js`) y, cuando haya pauta, Píxel de Meta.
- [ ] Enlaces con UTM en Instagram, LinkedIn y firma de email.

## 8. Para la etapa siguiente (no iniciar todavía)

Ficha de Google con Bernardo, reseñas, foto de perfil, LinkedIn de empresa, más guías, medios locales, pauta y agenda/pago. Está detallado en `../para-bernardo/03-lo-que-necesitamos.md`.

## 9. Notas técnicas

- `api/subscribe.js` usa Resend. Sin configuración responde 503 y el sitio cae al respaldo por WhatsApp, así que se puede publicar antes de tener Resend listo.
- El repo versiona `dist/` y `node_modules/`. No se incluyen en los commits. Si Git se queja al cambiar de rama, avisame antes de forzar nada.
- La rama `origin/v3` en GitHub es una foto vieja (12/08), anterior a todo `main`. No se usa.
- Los textos de las guías están en `src/content/` y el SEO de cada página en `src/lib/seo-data.js`.
