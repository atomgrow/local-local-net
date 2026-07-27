// Divide un texto en palabras envueltas en máscaras (overflow-hidden)
// para poder animarlas con GSAP sin depender del plugin pago SplitText.
export default function SplitWords({ text }) {
  return text.split(' ').map((word, i) => (
    <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
      <span data-split-word className="inline-block will-change-transform">
        {word}
        {' '}
      </span>
    </span>
  ))
}
