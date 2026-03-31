import Icon from '@/components/ui/icon';

export function Slide1Title() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 py-10 text-center">
      {/* Badge */}
      <span className="text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 font-open-sans-custom mb-8 tracking-widest uppercase">
        Дипломная работа
      </span>

      {/* Main title */}
      <h1
        className="font-serif italic text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] leading-none mb-4"
        style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
      >
        Динамика коня
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-lg tracking-wide mb-8">
        Создание авторского барельефа
      </p>

      {/* Divider */}
      <div className="w-32 h-px bg-white/30 mb-8" />

      {/* Info grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-5 py-4 text-left">
          <p className="text-xs text-gray-400 font-open-sans-custom uppercase tracking-widest mb-1">Выполнил</p>
          <p className="text-white font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm">
            [Ваше ФИО]
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-5 py-4 text-left">
          <p className="text-xs text-gray-400 font-open-sans-custom uppercase tracking-widest mb-1">Руководитель</p>
          <p className="text-white font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm">
            [ФИО руководителя]
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-5 py-4 text-left">
          <p className="text-xs text-gray-400 font-open-sans-custom uppercase tracking-widest mb-1">Учебное заведение</p>
          <p className="text-white font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm">
            Учебное заведение
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-5 py-4 text-left">
          <p className="text-xs text-gray-400 font-open-sans-custom uppercase tracking-widest mb-1">Год</p>
          <p className="text-white font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] text-sm">
            2025
          </p>
        </div>
      </div>

      {/* Decorative bottom */}
      <p className="mt-8 text-white/40 text-lg select-none">✦</p>
    </div>
  );
}

export default Slide1Title;
