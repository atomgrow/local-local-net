# CONTENT_TODO — Estado antes de publicar Local Local v2

Última revisión: correcciones del PDF de Bernardo ("revisión local local 01.09") aplicadas.

## Hecho

- Textos ES y EN según la devolución (plazos, precios, terminología, testimonios, Nosotros, Método, Red, FAQ, galería, confidencialidad).
- Precio del diagnóstico: **ARS 150.000** (ES) / **USD 100** (EN).
- Versión EN con URLs propias: `/en`, `/en/metodo`, `/en/nosotros`, con hreflang cruzado y canonical propio.
- Título, descripción, canonical y Open Graph por página e idioma (`src/lib/seo-data.js`); HTML estático generado en el build (`scripts/prerender-meta.mjs`).
- Legales en inglés: `public/en/legal.html` (con aviso de que prevalece la versión en español). Selector ES/EN en ambas versiones de Legales.
- H1 en Método y Nosotros.
- Formulario del cuestionario como `<form>` real (nombre obligatorio, botón deshabilitado sin datos).
- Carrusel de Tandil con roles y estado accesibles.
- Fotos en WebP responsive (`npm run images`) con el JPG como respaldo; dimensiones declaradas para evitar saltos.
- Imagen para redes de 1200 × 630 (`public/og-image.jpg`).
- Fuentes auto-alojadas (`@fontsource`), sin llamadas a Google Fonts.
- Dominio: `www.locallocal.net` como oficial; redirección de `locallocal.net` a `www` en `vercel.json`; sitemap con las 8 URLs y hreflang.
- Contraste de textos revisado con el script de WCAG (paleta base y opacidades de texto).

## Pendiente — necesita decisión o datos de Bernardo

- [ ] **Moneda del precio de la visita.** El diagnóstico quedó en USD 100 en inglés, pero la visita sigue en ARS 500.000 ("starting at ARS 500,000 for two people"). Confirmar si también se cotiza en USD.
- [ ] **Link de agenda y pago** — `src/config.js` → `LINKS.booking`. Mientras esté vacío, los CTA de diagnóstico llevan a WhatsApp.
- [ ] **Newsletter automática** — el alta solo abre WhatsApp. Para enviar la guía por email hace falta un proveedor (Mailchimp/Brevo) y `LINKS.newsletterEndpoint`.
- [ ] **Revisión de la traducción de Legales** por Bernardo (y, si corresponde, por un abogado de habla inglesa).
- [ ] **Textos legales definitivos** — los links de Términos, Privacidad y Confidencialidad del footer apuntan a `legales.html`.
- [ ] **Garantía de 48 h** — respaldada por los términos publicados.
- [ ] **Números de la red** ("20+ / 8 / 10+") — validar con Bernardo.
- [ ] **GA4 y Meta Pixel** — IDs en `src/config.js` siguen en placeholder. Evaluar banner de cookies al activarlos.

## Pendiente — fuera del código

- [ ] **Dominio en Vercel:** agregar `locallocal.net` al proyecto y reparar el certificado (el 502 del apex). La redirección 301 ya está en `vercel.json`.
- [ ] **Search Console:** verificar `www.locallocal.net` y enviar el sitemap (requiere la cuenta de Tom o Bernardo).
- [ ] **Fotos en alta resolución:** las originales miden como máximo 1254 px; las variantes WebP no pueden ser más grandes. Pedir originales al fotógrafo y correr `npm run images`.

## Pendiente — mejoras menores

- [ ] **AVIF:** solo se generó WebP.
- [ ] **Fondos de Método** (`metodo-vida.jpg`, `metodo-detalle.jpg`) se usan como `background-image` en CSS y siguen en JPG.
- [ ] **Página /preguntas-frecuentes** — el enlace "Ver todas las preguntas" sigue comentado.
- [ ] **Afirmaciones estadísticas** — si se agregan datos de Tandil, cargar fuentes verificables.
