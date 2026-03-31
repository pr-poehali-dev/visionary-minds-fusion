import Icon from '@/components/ui/icon';

export function Slide10Process() {
  const steps = [
    {
      num: '01',
      title: 'Подготовка основы',
      icon: 'SquareDashed',
      text:
        'Гипсокартон — наш холст. Выбираем плотный, качественный. Несколько слоёв грунтовки обязательно — обеспечивает адгезию материала.',
    },
    {
      num: '02',
      title: 'Разметка и первый слой',
      icon: 'Ruler',
      text:
        'Точный перенос контуров коня на загрунтованный гипсокартон. Первый черновой слой гипсовой смеси задаёт общие крупные формы — скелет скульптуры.',
    },
    {
      num: '03',
      title: 'Детализация и объёмы',
      icon: 'Layers',
      text:
        'Послойное наращивание. Слой за слоем добавляем детали, проявляем мускулатуру, прорабатываем гриву и динамику движения.',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Этапы воплощения
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          10 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-8">
        Шаг за шагом к шедевру
      </h2>

      {/* Step cards */}
      <div className="grid grid-cols-3 gap-5 flex-1">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4"
          >
            {/* Number + icon row */}
            <div className="flex items-start justify-between">
              <span
                className="font-open-sans-custom text-white/20 [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] leading-none"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
              >
                {step.num}
              </span>
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Icon name={step.icon} size={20} className="text-white" />
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Content */}
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              {step.title}
            </h3>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed flex-1">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide10Process;
