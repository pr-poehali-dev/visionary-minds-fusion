import Icon from '@/components/ui/icon';

export function Slide11Finishing() {
  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Финишная обработка
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          11 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-8">
        Последние штрихи, которые решают всё!
      </h2>

      {/* Three cards */}
      <div className="grid grid-cols-3 gap-5 flex-1">
        {/* Card 1 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-5">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <Icon name="Eraser" size={22} className="text-white" />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg">
              Шлифовка и выравнивание
            </h3>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
              Грубые, потом мелкие абразивы. Добиваемся идеальной гладкости или оставляем фактуру. Поверхность
              должна быть безупречной.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10">
            <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
              Абразивы P80 → P400
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-5">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <Icon name="Fingerprint" size={22} className="text-white" />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg">
              Текстурирование
            </h3>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
              Имитация шерсти, кожи: тонкие фактуры для реалистичности. Мелкие кисти, губки, пальцы — всё для
              оживления поверхности.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10">
            <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
              Тактильная реалистичность
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-5">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <Icon name="Droplets" size={22} className="text-white" />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg">
              Лессировка: магия цвета
            </h3>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
              Полупрозрачные слои краски усиливают игру света и тени. Выделение деталей, подчёркивание рельефности
              мышц. Завершающий слой лака для защиты и эффекта.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10">
            <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
              Финальный лак
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide11Finishing;
