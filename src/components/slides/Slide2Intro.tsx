import Icon from '@/components/ui/icon';

export function Slide2Intro() {
  return (
    <div className="w-full h-full flex flex-col px-12 py-10">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          02 / 12
        </span>
        <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom">
          Введение
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-8">
        Актуальность, Цель и Мотивация
      </h2>

      {/* Cards grid */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* Card 1 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="TrendingUp" size={18} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              Актуальность
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Возрождение объёмных тактильных форм в современном искусстве. Барельеф трансформирует пространство,
            придавая глубину и динамику.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="Heart" size={18} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              Личная значимость
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Барельеф коня — дань памяти дедушке, его любви к лошадям. Послание о свободе, памяти и природной силе.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="Target" size={18} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              Цель
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Создание значимого художественного барельефа «Динамика коня» на гипсокартоне, вызывающего эмоции
            и размышления.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon name="ListChecks" size={18} className="text-white" />
            </div>
            <h3 className="text-white font-open-sans-custom [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] text-base">
              Задачи
            </h3>
          </div>
          <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm leading-relaxed">
            Изучить историю, классификацию, техники объёма, тенденции, реализовать проект и проанализировать
            сложности.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide2Intro;
