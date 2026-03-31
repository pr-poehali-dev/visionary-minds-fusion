import Icon from '@/components/ui/icon';

export function Slide8Concept() {
  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Глава 3
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          08 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-8">
        Концепция проекта «Динамика коня»
      </h2>

      {/* Large quote block */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-8 py-7 mb-6 relative">
        <div className="absolute top-4 left-6 text-white/20 font-serif text-6xl leading-none select-none">"</div>
        <p
          className="text-white font-serif italic [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] relative z-10 leading-relaxed pl-6"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.375rem)' }}
        >
          Глубокая личная любовь к свободе и независимости, воплощённой в образе коня.
        </p>
        <div className="absolute bottom-3 right-6 text-white/20 font-serif text-6xl leading-none select-none rotate-180">"</div>
      </div>

      {/* Two cards */}
      <div className="grid grid-cols-2 gap-5 flex-1">
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="Heart" size={20} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg">
              Вдохновение
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Память о дедушке и его любви к лошадям. Дань уважения и личное послание, вложенное в каждый слой
            скульптуры.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text_lg">
              Идея
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Конь как символ свободы, мощи и природной силы. Барельеф как способ остановить мгновение и передать
            его вечности.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide8Concept;
