# CONTENT_TODO — Estado antes de publicar Local Local v2

Última revisión: 25/10/2026. Etapa 1 (correcciones del PDF "revisión local local 01.09") terminada. Detalle en `docs/`.

## Hecho

- Textos ES y EN según la devolución (plazos, precios, terminología, testimonios, Nosotros, Método, Red, FAQ, galería, confidencialidad).
- Precios: diagnóstico **$150.000** (ES) / **USD 100** (EN); visita **$500.000** (ES) / **USD 350** (EN).
- Newsletter por email con Resend: listo en el código; falta configurarlo (ver `docs/para-tom/02-guia-paso-a-paso.md`).
- Seis guías en ES y EN (`/guias`, `/en/guides`); Bernardo debe revisarlas antes de publicar.
- Versión B (rama `v4`) elegida por Bernardo y **publicada el 25/10/2026** en www.locallocal.net. La versión A queda en la rama `v3-final`.
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

- [ ] **Agenda y pago** — decisión: por ahora el diagnóstico se coordina por WhatsApp. Reevaluar si llegan muchas consultas.
- [ ] **Configurar Resend** (dominio, clave y variables en Vercel). Hasta entonces el alta usa WhatsApp.
- [ ] **Revisión de la traducción de Legales** por Bernardo (y, si corresponde, por un abogado de habla inglesa).
- [ ] **Textos legales definitivos** — los links de Términos, Privacidad y Confidencialidad del footer apuntan a `legales.html`.
- [ ] **Garantía de 48 h** — respaldada por los términos publicados.
- [ ] **GA4 y Meta Pixel** — IDs en `src/config.js` siguen en placeholder. Evaluar banner de cookies al activarlos.

## Pendiente — fuera del código

- [ ] **Dominio sin www:** `www.locallocal.net` funciona; `locallocal.net` todavía falla por HTTPS. Agregarlo en Vercel (equipo atomgrow-projects → local-local-net → Settings → Domains) y ajustar el registro A en Porkbun. La redirección a www ya está en `vercel.json`.
- [ ] **Search Console:** verificar `www.locallocal.net` y enviar el sitemap (requiere la cuenta de Tom o Bernardo).
- [ ] **Fotos (opcional):** las de la carpeta compartida miden 1024 px como máximo y funcionan. Si se quieren más nítidas, pedir los originales al fotógrafo, copiarlos a `src/assets` y correr `npm run images`.
- [ ] **Retrato de Bernardo:** Bernardo lo reemplaza por la foto de perfil definitiva.

## Pendiente — mejoras menores

- [ ] **AVIF:** solo se generó WebP.
- [ ] **Fondos de Método** (`metodo-vida.jpg`, `metodo-detalle.jpg`) se usan como `background-image` en CSS y siguen en JPG.
- [ ] **Página /preguntas-frecuentes** — el enlace "Ver todas las preguntas" sigue comentado.
- [ ] **Afirmaciones estadísticas** — si se agregan datos de Tandil, cargar fuentes verificables.
