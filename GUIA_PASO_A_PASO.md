# Guía paso a paso (Tom)

Las pantallas de Vercel, Google, Brevo y Bing cambian de nombre con frecuencia. Si un botón no se llama igual, buscá el equivalente y avisame.

Orden recomendado: 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7.

## 0. Cuidado con el acceso a GitHub (5 minutos)

El remoto del repo tiene un token de GitHub escrito dentro de la URL. Eso es un riesgo: cualquiera que vea la configuración puede usarlo.

1. En GitHub: Settings → Developer settings → Personal access tokens → revocar el token actual.
2. En la terminal: `gh auth login` (o usar SSH) y `git remote set-url origin https://github.com/atomgrow/local-local-net.git`.

## 1. Publicar las dos versiones

Hay dos ramas en el repo:
- `main`: versión oficial, con todas las correcciones del PDF.
- `v4`: igual que `main` más los cambios de la auditoría. Es la que ve Bernardo para aprobar.

**1.1 Subir ambas ramas**
```
git push origin main
git push -u origin v4
```
Vercel crea un despliegue de producción con `main` y uno de vista previa con `v4`.

**1.2 Revisar el despliegue de `main`** (Vercel → proyecto → Deployments). Debe decir "Ready". Si falla, copiame el error del log.

**1.3 Link de v4 para Bernardo**
- Opción A (más simple): Vercel → Deployments → el de la rama `v4` → botón **Share**/**Compartir** → generar enlace. Cualquiera con el enlace lo abre sin cuenta.
- Opción B (dirección fija): Settings → Domains → Add → `v4.locallocal.net` → asociarla a la rama `v4`. Después crear en tu DNS un registro CNAME `v4` apuntando a `cname.vercel-dns.com` (Vercel te muestra el valor exacto).
- Si al abrirlo pide iniciar sesión en Vercel: Settings → Deployment Protection → desactivar **Vercel Authentication** para vistas previas. Las vistas previas llevan `noindex`, así que Google no las indexa.

**1.4 Cuando Bernardo apruebe v4:** `git switch main && git merge v4 && git push origin main`.

## 2. Dominio en Vercel

1. Vercel → proyecto → Settings → Domains → agregar `www.locallocal.net` y `locallocal.net`.
2. Vercel muestra los registros DNS necesarios. Cargalos donde esté el DNS del dominio (el registrador, o Vercel si le delegaste los nameservers):
   - `locallocal.net` → registro **A** `76.76.21.21`
   - `www` → registro **CNAME** `cname.vercel-dns.com`
   (Usá siempre los valores que te muestre Vercel; pueden variar.)
3. Esperar el certificado (minutos a unas horas). El estado debe quedar en "Valid Configuration".
4. Marcar `www.locallocal.net` como dominio principal. `locallocal.net` redirige solo (ya está en `vercel.json`).
5. **Verificar:** abrir `https://locallocal.net` (debe saltar a `https://www.locallocal.net`), `https://www.locallocal.net/en`, y una URL inventada como `/xyz` (debe mostrar la pantalla de error).

## 3. Google Search Console

1. Entrar en search.google.com/search-console → **Agregar propiedad** → **Dominio** → `locallocal.net`.
2. Google da un registro **TXT**. Cargalo en el DNS (mismo lugar que el paso 2). Volver y pulsar **Verificar**.
3. Menú **Sitemaps** → escribir `https://www.locallocal.net/sitemap.xml` → **Enviar**.
4. Menú **Inspección de URL**: pegar cada una de estas, esperar y pulsar **Solicitar indexación**:
   - `https://www.locallocal.net/`
   - `https://www.locallocal.net/en`
   - `https://www.locallocal.net/metodo` y `/en/metodo`
   - `https://www.locallocal.net/nosotros` y `/en/nosotros`
   - `https://www.locallocal.net/legales.html` y `/en/legal.html`
5. A los 7 días revisar **Páginas** (cobertura) y **Rendimiento**.

## 4. Bing Webmaster Tools

1. bing.com/webmasters → iniciar sesión.
2. **Importar desde Google Search Console** → autorizar → listo. Importa el sitio y el sitemap.

## 5. Google Analytics 4

1. analytics.google.com → **Administrar** → **Crear propiedad** → nombre "Local Local", zona horaria Buenos Aires, moneda ARS.
2. **Flujos de datos** → **Web** → URL `https://www.locallocal.net`.
3. Copiar el **ID de medición** (empieza con `G-`).
4. En el repo: `src/config.js` → `GA4_ID` → pegar el ID. Hacer commit y push.
5. Eventos: ya se envían `questionnaire_start`, `questionnaire_complete`, `whatsapp_click`, `newsletter_signup`, `language_change`. En GA4 → **Administrar → Eventos** → marcar como **conversión**: `questionnaire_complete`, `whatsapp_click` y `newsletter_signup`.
6. Verificar en **Informes → Tiempo real** abriendo el sitio.
7. Aviso de cookies: antes de pautar conviene agregarlo (avisame y lo preparo).

El Pixel de Meta se hace igual (`META_PIXEL_ID`) cuando haya pauta.

## 6. Newsletter automático desde el correo de Bernardo (Brevo)

La idea: la persona deja su email en la web, entra a una lista en Brevo y recibe automáticamente el primer correo, que sale como **Bernardo Cisterna <bernardo@locallocal.net>**. Si responde, le llega a Bernardo.

**6.1 Cuenta y remitente**
1. brevo.com → crear cuenta (plan gratuito: unos 300 correos por día).
2. **Senders, Domains & Dedicated IPs → Domains** → agregar `locallocal.net`.
3. Brevo muestra registros DNS (DKIM, y uno de verificación). Cargalos en el DNS. **Importante:** si el correo de Bernardo está en Google Workspace/Gmail, el registro SPF del dominio ya existe: no crees un segundo, editá el existente para que quede, por ejemplo, `v=spf1 include:_spf.google.com include:spf.brevo.com ~all`. Si dudás, pasame los registros actuales y los armo.
4. **Senders** → agregar `bernardo@locallocal.net` con nombre "Bernardo Cisterna". Brevo le manda un código de verificación a esa casilla (lo recibe Bernardo).

**6.2 Lista y correo de bienvenida**
1. **Contacts → Lists** → crear lista "Newsletter ES". Anotar su **ID** (número).
2. **Campaigns → Templates / Email** → crear plantilla con editor HTML y pegar el contenido de `marketing/newsletter-01.html`. Asunto: *Tandil se conoce un fin de semana. Pero se elige pensando en un martes.*
3. **Automation → Create workflow**: disparador "Contacto agregado a la lista Newsletter ES" → acción "Enviar correo" con esa plantilla.
4. Enviarse una prueba y mirar que llegue a la bandeja principal.

**6.3 Conectar la web**
1. Brevo → **SMTP & API → API Keys** → generar una clave.
2. Vercel → proyecto → Settings → Environment Variables → agregar:
   - `BREVO_API_KEY` = la clave
   - `BREVO_LIST_ID_ES` = el ID de la lista
   - (más adelante, cuando haya newsletter en inglés) `BREVO_LIST_ID_EN`
3. Vercel → Deployments → **Redeploy** (las variables se leen al desplegar).
4. Probar en la web con un email tuyo: debe aparecer "¡Listo!…" y llegar el correo. Si todavía no está configurado, el sitio usa el respaldo por WhatsApp.

Hasta que esto funcione, el texto del newsletter promete un email que no sale. No dejes pasar mucho tiempo entre publicar y completar este paso.

## 7. Enlaces con UTM

Usá siempre este formato para saber de dónde llegan los leads:
```
https://www.locallocal.net/?utm_source=ORIGEN&utm_medium=MEDIO&utm_campaign=NOMBRE
```
| Dónde | Enlace |
|---|---|
| Bio de Instagram | `...?utm_source=instagram&utm_medium=bio` |
| LinkedIn de Bernardo | `...?utm_source=linkedin&utm_medium=perfil` |
| Firma de email | `...?utm_source=email&utm_medium=firma` |
| Postal (QR) | ya lleva `utm_source=postal` |
| WhatsApp | `...?utm_source=whatsapp&utm_medium=chat` |

El sitio guarda la fuente y la manda en el mensaje de WhatsApp. En GA4 se ve en **Informes → Adquisición**.

## Después

- Cuando Bernardo apruebe `v4`, unir a `main` (paso 1.4).
- Si empiezan a llegar muchas consultas por WhatsApp, evaluar agenda y pago (hoy el botón del diagnóstico lleva a WhatsApp, a propósito).
