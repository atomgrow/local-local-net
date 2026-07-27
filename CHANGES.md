# Local Local v2 — Cambios respecto de la versión anterior

Fecha: julio 2026. Base: `local-local-landing` (la versión desplegada en locallocal.netlify.app).

## Gestión de versiones

El proyecto no usa Git, por lo que se trabajó con carpetas:

| Carpeta | Qué es |
|---|---|
| `local-local-landing` | Versión actual en producción. **No fue modificada.** |
| `local-local-landing-v1-original` | Backup previo ya existente de esa misma versión. |
| `local-local-landing-v2-strategic` | Un intento anterior de v2 (parcial). No se tocó. |
| `local-local-v2` | **Esta versión.** Copia evolucionada de `local-local-landing`. |

### Cómo volver a la versión anterior
No hay nada que revertir: la versión anterior sigue intacta en `local-local-landing` (y duplicada en `local-local-landing-v1-original`). Para publicar v2, apuntar Netlify al build de `local-local-v2` (`npm run build` → `dist/`). Para volver atrás, volver a publicar el `dist/` de `local-local-landing`.

## Componentes reutilizados (misma base, ajustes menores)

- `src/lib/i18n.jsx` — detección de idioma por zona horaria (+ evento `language_change`).
- `src/lib/tracking.js` — UTM, GA4, Meta Pixel, WhatsApp (+ eventos nuevos: micro-decisión, cuestionario, newsletter, FAQ, scroll 50/90).
- `src/components/SplitWords.jsx` — sin cambios.
- `src/components/Hero.jsx` — misma estructura visual (imagen + degradados + GSAP); copy nuevo, doble CTA, respeto de reduced-motion.
- `src/components/Navbar.jsx` — misma píldora flotante; navegación nueva (Método/Red/Tandil/Nosotros/Preguntas), menú mobile, CTA "Evaluar mi proyecto".
- `src/components/Footer.jsx` — misma estética espresso; ahora con legales, disclaimer, crédito fotográfico y "Powered by Atomgrow".
- Estética general: paleta matcha/almond/espresso/terracota/vanilla, tipografías, ruido, botones magnéticos — todo conservado.

## Componentes nuevos

`TrustBar`, `MicroDecision` (mejora #1), `Problema` (mejora #2, escenarios antes/después), `Metodo` (Diagnóstico+Estrategia+Red + acordeón de 7 etapas), `Red` (mejora #3, números), `Confidencialidad`, `Entregables`, `ParaQuien`, `Tandil` (galería placeholder + crédito), `Nosotros` (mejora #4, Bernardo), `Testimonios` (con sello DEMO), `ComoComienza` (bonus), `Diagnostico` (garantía), `Cuestionario` (3 preguntas por pasos), `Newsletter`, `Faq`, `CtaFinal`, `StickyCta` (mobile), `Logo`, `SectionHeader`, `CtaButton` + `src/lib/journey.jsx` (estado de micro-decisión en sessionStorage) y `src/lib/useReveal.js` (animaciones con reduced-motion).

## Componentes reemplazados (siguen en la carpeta, ya no se montan)

`Dolores.jsx`, `Features.jsx`, `Manifiesto.jsx`, `Archivo.jsx`, `Oferta.jsx`, `Formulario.jsx` — no se eliminaron por si sirven más adelante; Vite no los incluye en el bundle porque no se importan.

## Archivos modificados

- `src/lib/strings.js` — reescrito completo (ES/EN, todo el copy nuevo centralizado).
- `src/config.js` — extendido: `LINKS` (booking, LinkedIn, Instagram, fotógrafo, Atomgrow, newsletter), `CANONICAL_URL`, `DIAGNOSTIC_PRICE`.
- `src/App.jsx` — nueva arquitectura de 18 secciones + JourneyProvider + StickyCta.
- `index.html` — title/description nuevos, canonical a locallocal.net, OG/Twitter, hreflang, JSON-LD (ProfessionalService, sin ratings), se quitó la fuente Cormorant sin uso.
- `src/index.css` — bloque `prefers-reduced-motion`.
- Nuevos: `public/robots.txt`, `public/sitemap.xml`, `src/content/testimonials.js`, `CONTENT_TODO.md`, este archivo.
- `src/assets/tandil-*.jpg` — 7 fotografías reales seleccionadas de la carpeta "Fotos | Sierras de Tandil" (@santiarbeoph), recomprimidas: hero apaisado (Lumii_20231210), hero vertical mobile (DSC_0153), panorámica (DSC_1652), ciudad al atardecer (DSC_0890), caballo (DSC_0961), cielo sobre la ciudad (DSC_2222), torre del castillo (DSC_0162). Los originales disponibles son de 1024px; si llegan exports en alta, reemplazar por nombre.

## Decisiones de criterio (no literales del brief)

1. **Sin cifras en dólares en los escenarios** del costo de improvisar: no estaban validadas; el daño se comunica cualitativamente. Si se validan rangos, agregar (ver CONTENT_TODO).
2. **El grid de rubros con conteos por proveedor no se usó**; se optó por la tarjeta de 3 números (20+/8/10+), más sobria y menos auditable públicamente. Validar los números igualmente.
3. **CTA de diagnóstico** apunta al cuestionario mientras no exista `LINKS.booking`; al cargar la URL de agenda/pago, cambia solo.
4. **"Tandilín" no se usó**: con la restricción de sobriedad y de no parecer inmobiliaria, el guiño restaba más de lo que sumaba. Fácil de agregar en `strings.js` si Bernardo lo quiere.
5. **hreflang real requiere URLs por idioma**; hoy el idioma alterna en cliente. Quedó anotado en `index.html`.
