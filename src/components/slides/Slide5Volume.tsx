import Icon from '@/components/ui/icon';

export function Slide5Volume() {
  const techniques = [
    {
      label: 'Ракурс',
      text: 'Перспективное сокращение для динамизма и глубины',
    },
    {
      label: 'Свет и тень',
      text: 'Проработка форм для выразительных теней, усиление драматизма',
    },
    {
      label: 'Детализация фона',
      text: 'Уменьшение рельефа удалённых объектов для эффекта фокуса',
    },
    {
      label: 'Композиция',
      text: 'Многоплановое размещение, перекрытие фигур',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Секреты объёма
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          05 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-8">
        Техники иллюзии глубины и Восприятие
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Left — technique cards */}
        <div className="flex flex-col gap-3">
          {techniques.map((t) => (
            <div
              key={t.label}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-5 py-3 flex items-start gap-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0" />
              <div>
                <p className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-sm mb-1">
                  {t.label}
                </p>
                <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-xs leading-relaxed">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — two larger cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Icon name="Eye" size={18} className="text-white" />
              </div>
              <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
                Восприятие
              </h3>
            </div>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
              Психофизиологический процесс: бинокулярное зрение, тактильное ощущение, ментальная реконструкция
              объёма.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Icon name="Zap" size={18} className="text-white" />
              </div>
              <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
                Воздействие
              </h3>
            </div>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
              Мощное эмоциональное и нарративное влияние: динамичность, драматизм, монументальность.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide5Volume;
