// Encabezado estándar de sección: kicker mono + título sans/serif.
export default function SectionHeader({ kicker, titleSans, titleSerif, center = false, dark = false }) {
  return (
    <div data-reveal className={center ? 'text-center' : ''}>
      {kicker && (
        <p
          className={[
            'mb-5 font-mono text-[11px] uppercase tracking-[0.3em]',
            dark ? 'text-almond/60' : 'text-terracota',
          ].join(' ')}
        >
          {kicker}
        </p>
      )}
      <h2
        className={[
          'font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl',
          dark ? 'text-white' : 'text-espresso',
        ].join(' ')}
      >
        {titleSans}{' '}
        <span
          className={['font-serif font-medium italic', dark ? 'text-vanilla' : 'text-matcha'].join(' ')}
        >
          {titleSerif}
        </span>
      </h2>
    </div>
  )
}
