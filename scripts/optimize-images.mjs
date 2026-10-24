// Genera variantes WebP responsive de las fotos del sitio.
// Salida: src/assets/responsive/<nombre>-<ancho>.webp
// Nunca amplía: cada variante es como máximo del ancho original.
// Uso: npm run images   (se corre cuando cambian las fotos en src/assets)
import { mkdir, readdir } from 'node:fs/promises'
import { dirname, join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_DIR = join(ROOT, 'src', 'assets')
const OUT_DIR = join(SOURCE_DIR, 'responsive')
const WIDTHS = [480, 768, 1024, 1280, 1600]

// Solo las fotos que se muestran con <ResponsiveImage> o <picture>.
const PHOTOS = [
  'tandil-hero.jpg',
  'tandil-barrio-sierras.jpg',
  'tandil-panorama.jpg',
  'tandil-atardecer-ciudad.jpg',
  'tandil-cielo-atardecer.jpg',
  'tandil-torre.jpg',
  'problema-bg.jpg',
  'cta-final-bg.jpg',
  'bernardo-retrato.jpg',
]

await mkdir(OUT_DIR, { recursive: true })
const existing = new Set(await readdir(SOURCE_DIR))

for (const file of PHOTOS) {
  if (!existing.has(file)) throw new Error(`No existe src/assets/${file}`)
  const { name } = parse(file)
  const input = sharp(join(SOURCE_DIR, file))
  const { width: originalWidth } = await input.metadata()
  const widths = [...new Set(WIDTHS.map((w) => Math.min(w, originalWidth)))]

  for (const width of widths) {
    const out = join(OUT_DIR, `${name}-${width}.webp`)
    await sharp(join(SOURCE_DIR, file))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(out)
    console.log(`${file} -> ${name}-${width}.webp`)
  }
}
