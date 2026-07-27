# Local Local — Landing de relocalización a Tandil

Landing page de alta fidelidad para **Local Local**: servicio boutique de relocalización
a Tandil (diagnóstico, hoja de ruta y red local validada).

## Stack

- React 19 + Vite 7
- Tailwind CSS 4 (plugin `@tailwindcss/vite`)
- GSAP 3 + ScrollTrigger (animaciones de scroll, split text, cursor automático)
- Lucide React (iconos)

## Correr en local

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción → dist/
npm run preview  # servir el build localmente
```

## ⚠️ Antes de lanzar campañas

Todos los IDs de medición y el contacto están centralizados en
[`src/config.js`](src/config.js):

| Constante | Qué es | Valor actual |
|---|---|---|
| `GA4_ID` | Measurement ID de Google Analytics 4 | `G-XXXXXXXXXX` (placeholder) |
| `META_PIXEL_ID` | ID del Meta Pixel | `000...0` (placeholder) |
| `WHATSAPP_NUMBER` | Número de WhatsApp (formato internacional sin `+`) | `5492494000000` (placeholder) |
| `WHATSAPP_MESSAGE` | Mensaje precargado en todos los botones | ya definido |

Mientras los IDs sean placeholders, los scripts de GA4/Pixel **no se cargan**
(la landing funciona igual, solo sin medición).

## Eventos instrumentados

| Evento | GA4 | Meta Pixel | Cuándo |
|---|---|---|---|
| Clic a WhatsApp | `click_whatsapp` (con `source`: hero / navbar / oferta / footer) | `Contact` | Cualquier botón de WhatsApp |
| Inicio de formulario | `form_start` | — | Primer campo tocado (una vez) |
| Envío de formulario | `form_submit` | `Lead` | Botón "Enviar y coordinar entrevista" |

Los parámetros UTM (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`,
`utm_content`) se leen al aterrizar, se persisten en `localStorage` y se adjuntan a
todos los eventos GA4 y al mensaje del lead por WhatsApp.

## Estructura

```
src/
  config.js            ← IDs y WhatsApp (EDITAR ACÁ)
  lib/tracking.js      ← GA4, Meta Pixel, UTMs, helpers de conversión
  components/
    Navbar.jsx         ← isla flotante (transparente → vidrio)
    Hero.jsx           ← titular cinematográfico 100dvh
    Dolores.jsx        ← preguntas con split text
    Features.jsx       ← baraja diagnóstica, telemetría, agenda con cursor
    Manifiesto.jsx     ← sección espresso con parallax
    Archivo.jsx        ← 3 pilares apilados en scroll + "para quién es"
    Oferta.jsx         ← tarjeta única "PASO 01 — DIAGNÓSTICO"
    Formulario.jsx     ← protocolo de ingreso (sin <form>, todo por estado)
    Footer.jsx         ← espresso, red local activa, tagline
```

El formulario no tiene backend: al enviarse abre WhatsApp con el resumen del lead
precargado (y dispara los eventos de conversión). Si más adelante quieren guardar
leads en una base/CRM, el punto de integración es la función `enviar()` en
`Formulario.jsx`.
