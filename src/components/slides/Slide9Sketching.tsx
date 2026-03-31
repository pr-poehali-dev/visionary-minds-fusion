import Icon from '@/components/ui/icon';

export function Slide9Sketching() {
  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Эскизирование
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          09 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-8">
        В поиске идеальной формы: Как конь обретает очертания
      </h2>

      {/* Two large process cards */}
      <div className="grid grid-cols-2 gap-5 flex-1">
        {/* Card 1 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="PenLine" size={22} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg leading-tight">
              Мозговой штурм и наброски
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed flex-1">
            Это не просто «нарисовал и готово». Часы, сутки, недели эскизов! Сначала грубые, абстрактные, потом
            всё чётче. Ищем тот самый ракурс, чтобы конь вылетал из стены.
          </p>
          <div className="pt-4 border-t border-white/10 flex gap-2 flex-wrap">
            <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">Недели работы</span>
            <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">Десятки вариантов</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="BookOpen" size={22} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg leading-tight">
              Изучение анатомии и движения
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed flex-1">
            Нельзя просто взять и нарисовать коня. Погружаемся в анатомию, изучаем, как двигаются мышцы, как
            играет свет на шкуре, как передать скорость и мощь. Фотографии, видео, скульптуры.
          </p>
          <div className="pt-4 border-t border-white/10 flex gap-2 flex-wrap">
            <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">Анатомия</span>
            <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">Референсы</span>
            <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">Динамика</span>
          </div>
        </div>
      </div>

      {/* Timeline indicator */}
      <div className="mt-5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-3">
        <Icon name="ArrowRight" size={14} className="text-gray-400 shrink-0" />
        {['Недели', 'Наброски', 'Эскиз', 'Финальная форма'].map((step, i, arr) => (
          <div key={step} className="flex items-center gap-3">
            <span className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-xs">
              {step}
            </span>
            {i < arr.length - 1 && (
              <Icon name="ChevronRight" size={12} className="text-gray-500 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide9Sketching;
