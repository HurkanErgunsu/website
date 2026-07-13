export default function PhoneMockup({ screenshot, theme }) {
  const label = screenshot.alt || screenshot.label

  return (
    <figure className="w-full">
      <div className="rounded-[2.25rem] border border-zinc-800/90 bg-zinc-900 p-[2px]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.9rem] bg-zinc-950">
          {screenshot.src ? (
            <img
              src={screenshot.src}
              alt={label}
              className="h-full w-full object-cover"
              draggable={false}
            />
          ) : (
            <div
              className={`h-full w-full bg-gradient-to-br ${screenshot.color}`}
              aria-label={screenshot.label}
            />
          )}
        </div>
      </div>
      {screenshot.label && (
        <figcaption
          className="mt-3 bg-transparent text-center text-sm font-medium"
          style={{ color: theme?.textMuted ?? '#6b7280' }}
        >
          {screenshot.label}
        </figcaption>
      )}
    </figure>
  )
}
