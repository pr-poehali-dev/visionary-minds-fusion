import Icon from '@/components/ui/icon';

export function Slide12Problems() {
  const problems = [
    {
      title: 'Адгезия и трещины',
      problem: 'Материал не цеплялся к основе или трескался после высыхания.',
      solution:
        'Улучшили грунтование, использовали пластификаторы в смесях, дольше ждали высыхания. Спешка — враг качества.',
    },
    {
      title: 'Передача динамики',
      problem: 'Конь выходил статичным, не хватало динамики. Казалось, что просто стоит.',
      solution:
        'Перерабатывали эскизы, меняли ракурс, усиливали движение резкими формами, игрой с перспективой и светом.',
    },
    {
      title: 'Работа со светом',
      problem: 'При разном освещении терялись объёмы или тени ложились не так.',
      solution:
        'Тестировали освещение на каждом этапе. Барельеф проектировался сразу под определённый свет.',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Анализ проблем
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          12 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-7">
        Без ошибок не бывает: Проблемы и Решения
      </h2>

      {/* Problem-solution cards */}
      <div className="grid grid-cols-3 gap-5 flex-1">
        {problems.map((item) => (
          <div
            key={item.title}
            className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-4"
          >
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              {item.title}
            </h3>

            {/* Problem */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-red-400 text-sm select-none">✗</span>
                <p className="text-xs text-gray-400 font-open-sans-custom uppercase tracking-widest">Проблема</p>
              </div>
              <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-xs leading-relaxed">
                {item.problem}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <Icon name="ArrowDown" size={14} className="text-white/30" />
            </div>

            {/* Solution */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm select-none">✓</span>
                <p className="text-xs text-gray-400 font-open-sans-custom uppercase tracking-widest">Решение</p>
              </div>
              <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-xs leading-relaxed">
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing quote */}
      <div className="mt-5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center gap-4">
        <Icon name="Quote" size={16} className="text-white/40 shrink-0" />
        <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm italic">
          Каждая проблема — это урок. Каждое решение — это мастерство.
        </p>
      </div>
    </div>
  );
}

export default Slide12Problems;
