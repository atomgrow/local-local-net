# Guía paso a paso (Tom)

Las pantallas de Vercel, Google, Resend y Bing cambian de nombre con frecuencia. Si un botón no se llama igual, buscá el equivalente y avisame.

**Orden recomendado:** 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8.
Cada paso se puede hacer por separado.

---

## 0. Seguridad: el token de GitHub (5 minutos)

El remoto del repo tiene un **token de GitHub escrito dentro de la URL**. Cualquiera que vea la configuración del repo puede usarlo.

1. En GitHub: foto de perfil → **Settings** → **Developer settings** → **Personal access tokens** → buscar el token en uso → **Revoke**.
2. En la terminal, dentro de la carpeta `local-local-v2`:
   ```
   git remote set-url origin https://github.com/atomgrow/local-local-net.git
   gh auth login
   ```
   Elegí GitHub.com → HTTPS → "Login with a web browser". Si no tenés `gh`, instalalo con `brew install gh`.
3. Verificá: `git remote -v` no debe mostrar ningún token.

## 1. Subir las dos versiones

**1.1 Revisá dónde estás**
```
cd "…/Relocalizacion Tandil/local-local-v2"
git status
git branch
```
Debe haber tres ramas: `main`, `v3-final` y `v4`. Los archivos de `dist/` y `node_modules/` aparecen como modificados: **ignoralos**, no se suben.

**1.2 Subir solo las ramas de las versiones** (no `main`):
```
git push -u origin v3-final v4
```
> **No hagas `git push origin main` todavía.** `main` es la rama de producción: subirla publica el sitio real. Hacelo recién cuando Bernardo elija (paso 1.6).

**1.3 Confirmá la rama de producción.** Vercel → proyecto → **Settings** → **Git** → **Production Branch**: debe ser `main`. (En GitHub, la rama predeterminada es `v3`, una foto vieja: no afecta, pero podés cambiarla a `main` en GitHub → Settings → Branches.)

**1.4 Ver los despliegues de vista previa.** Vercel → **Deployments**. Van a aparecer dos con el estado *Ready*: uno de la rama `v3-final` (versión A) y otro de `v4` (versión B). Si alguno falla, abrilo y copiame el error del log.

**1.5 Links para Bernardo**
- **Opción A (más simple):** abrí el despliegue → botón **Share** (compartir) → generar enlace. Quien lo reciba abre la web sin cuenta.
- **Opción B (dirección fija):** Settings → **Domains** → *Add* → `v4.locallocal.net` → asociarla a la rama `v4`; después creá en tu DNS un registro `CNAME` `v4` que apunte a lo que indique Vercel. Hacé lo mismo con `a.locallocal.net` para la versión A.
- Si al abrir pide iniciar sesión en Vercel: Settings → **Deployment Protection** → desactivá **Vercel Authentication** para las vistas previas. Las vistas previas no se indexan en Google.

Mandale a Bernardo los links con los documentos de `docs/para-bernardo/`.

**1.6 Cuando Bernardo elija**
- **Si elige la A:**
  ```
  git switch main
  git push origin main
  ```
  `main` ya contiene todo.
- **Si elige la B:**
  ```
  git switch main
  git merge v4
  git push origin main
  ```
Vercel publica en producción en un par de minutos.

---

## 2. Dominio en Vercel

1. Vercel → proyecto → **Settings** → **Domains** → agregar `www.locallocal.net` y `locallocal.net`.
2. Vercel muestra los registros DNS. Cargalos donde esté el DNS del dominio (en el registrador, o en Vercel si le delegaste los nameservers). Usá siempre los valores que te muestre Vercel; suelen ser:
   - `locallocal.net` → registro **A** a la IP que indique
   - `www` → registro **CNAME** a `cname.vercel-dns.com`
3. Esperá al certificado (minutos a unas horas) hasta ver *Valid Configuration*.
4. Marcá `www.locallocal.net` como principal. `locallocal.net` redirige solo.
5. **Verificá:**
   - `https://locallocal.net` salta a `https://www.locallocal.net`.
   - `https://www.locallocal.net/en` carga en inglés.
   - Una URL inventada (`/xyz`) muestra la pantalla de error.
   - `/metodo/` redirige a `/metodo`.
   - `https://www.locallocal.net/sitemap.xml` abre.

## 3. Google Search Console

Es **el paso que hace que aparezcas en Google**. Sin esto, el sitio no existe para el buscador.

1. search.google.com/search-console → **Agregar propiedad** → **Dominio** → `locallocal.net`.
2. Google da un registro **TXT**: cargalo en el DNS (como en el paso 2) y pulsá **Verificar**.
3. Menú **Sitemaps** → `https://www.locallocal.net/sitemap.xml` → **Enviar**.
4. Menú **Inspección de URL** → pegá cada una de estas, esperá y pulsá **Solicitar indexación**:
   - `https://www.locallocal.net/`
   - `https://www.locallocal.net/en`
   - `/metodo`, `/nosotros`, `/guias`
   - Las seis guías (`/guias/…`)
5. A los 7 días revisá **Páginas** (qué se indexó) y **Rendimiento** (con qué búsquedas aparecés).

Tip: cuando una URL aparezca indexada, buscá `site:locallocal.net` en Google para ver qué páginas ya conoce.

## 4. Bing Webmaster Tools

1. bing.com/webmasters → iniciá sesión.
2. **Importar desde Google Search Console** → autorizar. Trae el sitio y el sitemap.

## 5. Google Analytics 4

1. analytics.google.com → **Administrar** → **Crear propiedad** → nombre "Local Local", zona horaria Buenos Aires, moneda ARS.
2. **Flujos de datos** → **Web** → URL `https://www.locallocal.net`.
3. Copiá el **ID de medición** (empieza con `G-`).
4. En el repo: `src/config.js` → `GA4_ID` → pegá el ID. Hacé commit y push (en la versión elegida).
5. En GA4 → **Administrar → Eventos**, marcá como **conversión**: `questionnaire_complete`, `whatsapp_click` y `newsletter_signup` (ya se envían).
6. Verificá en **Informes → Tiempo real** abriendo el sitio.
7. Antes de pautar, sumá un aviso de cookies (avisame y lo preparo). El Píxel de Meta se carga igual (`META_PIXEL_ID`).

## 6. Newsletter automático desde el correo de Bernardo (Resend)

**Cómo funciona:** la persona deja su email → el sitio le envía el primer newsletter desde `bernardo@locallocal.net` → te llega un aviso a vos con el email nuevo → si responde, le llega a Bernardo.

**Resend sirve igual que Brevo para esto**, y como ya tenés cuenta es más simple: el sitio manda el correo directamente, sin armar automatizaciones. La diferencia es que Resend es más "técnico" y tiene menos herramientas visuales para campañas futuras; si más adelante querés newsletters con diseño y segmentos, se puede sumar otra herramienta.

**6.1 Dominio verificado**
1. resend.com → **Domains** → **Add Domain** → `locallocal.net`.
2. Resend muestra registros DNS (DKIM y SPF). Cargalos en el DNS. Resend suele usar un subdominio (`send.`), así que **no pisa el correo actual** de Bernardo.
3. Pulsá **Verify**. Espera hasta que diga *Verified*.

**6.2 Clave y lista**
1. **API Keys** → **Create API Key** (permiso: *Sending access*) → copiala.
2. (Opcional) **Audiences** → crear "Newsletter" → copiar su ID. Sirve para guardar los contactos.

**6.3 Variables en Vercel**
Vercel → proyecto → **Settings** → **Environment Variables** → agregar (entorno *Production*):

| Nombre | Valor |
|---|---|
| `RESEND_API_KEY` | la clave de Resend |
| `NEWSLETTER_FROM` | `Bernardo Cisterna <bernardo@locallocal.net>` |
| `NEWSLETTER_NOTIFY` | el email que recibe el aviso de cada alta (por defecto, `bernardo@locallocal.net`; podés poner el tuyo) |
| `RESEND_AUDIENCE_ID` | el ID de la lista (opcional) |

Después: **Deployments → Redeploy** (las variables se leen al desplegar).

**6.4 Probar**
1. En la web, dejá un email tuyo en el bloque de newsletter.
2. Debe aparecer "¡Listo!…", y a los segundos tenés que recibir el newsletter. Mirá también spam.
3. Si no llega, Resend → **Logs** muestra qué pasó.

Si todavía no configuraste Resend, el sitio usa el respaldo por WhatsApp. **No dejes pasar mucho tiempo entre publicar y completar este paso**, porque el texto del sitio promete un email.

Los planes gratuitos de Resend tienen límites diarios y mensuales de envíos: verificalos en resend.com/pricing. Cada alta usa dos correos (el newsletter y el aviso).

## 7. Enlaces con UTM

Usá siempre este formato para saber de dónde llegan los leads:
```
https://www.locallocal.net/?utm_source=ORIGEN&utm_medium=MEDIO
```
| Dónde | Enlace |
|---|---|
| Bio de Instagram | `…?utm_source=instagram&utm_medium=bio` |
| LinkedIn de Bernardo | `…?utm_source=linkedin&utm_medium=perfil` |
| Firma de email | `…?utm_source=email&utm_medium=firma` |
| Postal (QR) | ya lleva `utm_source=postal` |
| WhatsApp | `…?utm_source=whatsapp&utm_medium=chat` |

El sitio guarda la fuente y la manda en el mensaje de WhatsApp. En GA4 se ve en **Informes → Adquisición**.

## 8. Después de publicar: primera semana

- Mirá `site:locallocal.net` en Google a los 3 y 7 días.
- Revisá Search Console → **Páginas**. Si hay errores, copiámelos.
- Pasale a Bernardo la lista de la etapa siguiente cuando quieran retomar (`docs/para-bernardo/03-lo-que-necesitamos.md`).

## Resumen: qué podés hacer vos y qué necesita a Bernardo

| Tarea | Quién |
|---|---|
| Rotar token, subir ramas, publicar | Tom |
| Dominio, Search Console, Bing, GA4, Resend, UTM | Tom |
| Elegir versión A o B | Bernardo |
| Leer Legales en inglés, las 6 guías y el newsletter en inglés | Bernardo |
| Confirmar el WhatsApp definitivo | Bernardo |
| Ficha de Google (dirección, horario, categoría, verificación) | Bernardo, con Tom |
| Reseñas de clientes, foto de perfil, LinkedIn de empresa | Bernardo |
