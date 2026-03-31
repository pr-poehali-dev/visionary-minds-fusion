import Icon from '@/components/ui/icon';

export function Slide7Materials() {
  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Инструменты
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          07 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-8">
        Материалы и Инструменты
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Left — Materials */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="Package" size={18} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg">
              Материалы
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Определяющий фактор долговечности и выразительности. Технология послойного нанесения.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            {[
              'Гипсовые смеси (пластичность)',
              'Акриловые и гипсовые шпатлёвки (адгезия, лёгкая шлифовка)',
              'Полимерные составы',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0" />
                <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Tools */}
        <div className="flex flex-col gap-3">
          {/* Sub-section 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-5 py-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Icon name="Square" size={16} className="text-white" />
              </div>
              <h4 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-sm">
                Подготовка
              </h4>
            </div>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-xs leading-relaxed pl-11">
              Грунтование основы (гипсокартон)
            </p>
          </div>

          {/* Sub-section 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-5 py-4 flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Icon name="Pencil" size={16} className="text-white" />
              </div>
              <h4 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-sm">
                Моделирование
              </h4>
            </div>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-xs leading-relaxed pl-11">
              Стеки, мастихины (нанесение, выравнивание, грани), петли и циклины (выборка материала)
            </p>
          </div>

          {/* Sub-section 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-5 py-4 flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Icon name="Paintbrush" size={16} className="text-white" />
              </div>
              <h4 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-sm">
                Тонкие работы
              </h4>
            </div>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-xs leading-relaxed pl-11">
              Кисти (заглаживание, фактура), абразивные материалы (шлифовальная бумага) для доводки форм
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide7Materials;
