// Variantes WebP generadas por scripts/optimize-images.mjs.
const VARIANTS = import.meta.glob('../assets/responsive/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

// srcset WebP de una foto, ordenado por ancho. Vacío si no hay variantes.
export function webpSrcSet(name) {
  const pattern = new RegExp(`/${name}-(\\d+)\\.webp$`)
  return Object.entries(VARIANTS)
    .map(([path, url]) => {
      const match = path.match(pattern)
      return match ? { url, width: Number(match[1]) } : null
    })
    .filter(Boolean)
    .sort((a, b) => a.width - b.width)
    .map(({ url, width }) => `${url} ${width}w`)
    .join(', ')
}
