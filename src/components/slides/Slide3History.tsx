import Icon from '@/components/ui/icon';

export function Slide3History() {
  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Глава 1
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          03 / 12
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-8">
        Рельеф как язык веков: Истоки и Эволюция
      </h2>

      {/* Three horizontal sections */}
      <div className="grid grid-cols-3 gap-5 flex-1">
        {/* Section 1 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Icon name="Mountain" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg mb-3">
              Истоки
            </h3>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
              От наскальных рисунков (Альтамира, Ласко) до петроглифов. Эволюция от двумерных форм к объёмному
              мышлению.
            </p>
          </div>
          <div className="mt-auto pt-4 border-t border-white/10">
            <p className="text-gray-400 font-open-sans-custom text-xs">Палеолит — настоящее</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Icon name="Landmark" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg mb-3">
              Древние цивилизации
            </h3>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
              Монументальный и функциональный рельеф Месопотамии, Египта. Динамичность в Ассирии и Персии
              (Нимруд, Персеполь).
            </p>
          </div>
          <div className="mt-auto pt-4 border-t border-white/10">
            <p className="text-gray-400 font-open-sans-custom text-xs">~3000 до н.э. — IV в. н.э.</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Icon name="MessageSquare" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-lg mb-3">
              Роль рельефа
            </h3>
            <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
              Динамичный повествовательный инструмент. Диалог скульптуры, живописи и архитектуры.
            </p>
          </div>
          <div className="mt-auto pt-4 border-t border-white/10">
            <p className="text-gray-400 font-open-sans-custom text-xs">Нарратив через объём</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide3History;
