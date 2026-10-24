import { webpSrcSet } from '../lib/responsive'

// Foto con WebP responsive y el JPG original como respaldo.
// `width` y `height` son el tamaño intrínseco: reservan el espacio y evitan saltos de diseño.
export default function ResponsiveImage({
  name,
  fallback,
  alt,
  width,
  height,
  sizes = '100vw',
  className = '',
  style,
  loading = 'lazy',
  fetchPriority,
}) {
  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet(name)} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        style={style}
      />
    </picture>
  )
}
