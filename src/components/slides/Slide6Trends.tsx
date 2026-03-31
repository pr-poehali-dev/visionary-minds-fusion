import Icon from '@/components/ui/icon';

export function Slide6Trends() {
  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Глава 2
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          06 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-4">
        Барельеф в современном контексте
      </h2>

      {/* Intro text */}
      <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm mb-8 max-w-2xl leading-relaxed">
        Трансформация в актуальный художественный инструмент. Эстетические и архитектурные функции: визуальное
        изменение пространства.
      </p>

      {/* Trend cards 2x2 */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* Card 1 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="Minus" size={18} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              Минимализм и монохромность
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Акцент на фактуре и свете. Простота как инструмент выразительности.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="User" size={18} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              Индивидуализация
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Авторские панно, уникальность. Персональный нарратив в каждом произведении.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="Leaf" size={18} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              Экологичность
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Натуральные материалы, природные формы. Гармония с окружающей средой.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="Lightbulb" size={18} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              Светодизайн
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Динамичный арт-объект с подсветкой. Рельеф оживает в игре света и тени.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide6Trends;
