import Icon from '@/components/ui/icon';

export function Slide4Classification() {
  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Классификация
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          04 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-8">
        Виды рельефа
      </h2>

      {/* Three cards */}
      <div className="grid grid-cols-3 gap-5 flex-1">
        {/* Card 1 — Highlighted bas-relief */}
        <div className="bg-white/10 border border-white/30 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
              <Icon name="Layers" size={20} className="text-white" />
            </div>
            <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
              Наш проект
            </span>
          </div>
          <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg">
            Барельеф (низкий)
          </h3>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed flex-1">
            Изображение выступает менее чем на половину объёма. Тонкие тени, контуры, повествовательные сцены.
          </p>
          <div className="pt-4 border-t border-white/20">
            <p className="text-gray-400 font-open-sans-custom text-xs leading-relaxed">
              Фризы Парфенона, египетские рельефы
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Icon name="Box" size={20} className="text-white" />
          </div>
          <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg">
            Горельеф (высокий)
          </h3>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed flex-1">
            Изображение выступает более чем на половину, может отделяться. Глубокая проработка анатомии,
            выразительные тени, максимальная экспрессия.
          </p>
          <div className="pt-4 border-t border-white/10">
            <p className="text-gray-400 font-open-sans-custom text-xs leading-relaxed">
              Пергамский алтарь, римские арки
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Icon name="Sparkles" size={20} className="text-white" />
          </div>
          <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg">
            Специфические виды
          </h3>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed flex-1">
            Разнообразие форм для особых художественных задач.
          </p>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-1">
            {['Контррельеф', 'Сквозной рельеф', 'Койланаглиф', 'Инталия', 'Чингуцгерра'].map((item) => (
              <span
                key={item}
                className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom w-fit"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide4Classification;
