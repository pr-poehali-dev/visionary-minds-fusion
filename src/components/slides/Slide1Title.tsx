export function Slide1Title() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_80px_rgba(139,92,246,0.2)]">

        {/* Left — horse image */}
        <div className="relative min-h-[340px] md:min-h-[500px]">
          <img
            src="https://cdn.poehali.dev/projects/1e159a86-7585-49ec-b3cc-109459d25ed9/files/99673025-faee-46db-8e4a-8fa0eee430d6.jpg"
            alt="Динамика коня"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* purple gradient overlay on right edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0015]/80" />
          {/* bottom dark fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0015]/60 via-transparent to-transparent" />
          {/* neon glow border */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(139,92,246,0.15)]" />
        </div>

        {/* Right — title info */}
        <div
          className="flex flex-col justify-center px-8 py-10 md:py-14"
          style={{ background: "linear-gradient(135deg, rgba(10,0,21,0.95) 0%, rgba(30,10,60,0.95) 100%)" }}
        >
          {/* Badge */}
          <span className="text-xs border border-purple-400/40 text-purple-300 rounded px-3 py-1 font-open-sans-custom mb-6 tracking-widest uppercase w-fit"
            style={{ background: "rgba(139,92,246,0.1)" }}>
            Дипломная работа
          </span>

          {/* Title */}
          <h1 className="font-serif italic leading-tight mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#fff",
              textShadow: "0 0 40px rgba(139,92,246,0.6), 0 4px 20px rgba(0,0,0,0.8)"
            }}>
            Создание авторского<br />барельефа<br />
            <span style={{ color: "#c084fc" }}>"Динамика коня"</span>
          </h1>

          {/* Neon divider */}
          <div className="w-20 h-0.5 mb-5 rounded-full"
            style={{ background: "linear-gradient(90deg, #a855f7, transparent)" }} />

          <p className="text-purple-200/70 font-open-sans-custom text-sm mb-2 leading-relaxed">
            Дипломная работа по направлению художественного проектирования
          </p>
          <p className="text-gray-400 font-open-sans-custom text-sm mb-8 leading-relaxed">
            Исследование объёмного рельефного искусства и создание авторского барельефа
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-1 gap-3">
            <div className="rounded-lg px-4 py-3 border border-purple-500/20"
              style={{ background: "rgba(139,92,246,0.08)" }}>
              <p className="text-xs text-purple-400/70 font-open-sans-custom uppercase tracking-widest mb-0.5">Выполнил</p>
              <p className="text-white font-open-sans-custom text-sm">[Ваше ФИО]</p>
            </div>
            <div className="rounded-lg px-4 py-3 border border-purple-500/20"
              style={{ background: "rgba(139,92,246,0.08)" }}>
              <p className="text-xs text-purple-400/70 font-open-sans-custom uppercase tracking-widest mb-0.5">Руководитель</p>
              <p className="text-white font-open-sans-custom text-sm">[ФИО руководителя]</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg px-4 py-3 border border-purple-500/20"
                style={{ background: "rgba(139,92,246,0.08)" }}>
                <p className="text-xs text-purple-400/70 font-open-sans-custom uppercase tracking-widest mb-0.5">Заведение</p>
                <p className="text-white font-open-sans-custom text-sm">[Учебное заведение]</p>
              </div>
              <div className="rounded-lg px-4 py-3 border border-purple-500/20"
                style={{ background: "rgba(139,92,246,0.08)" }}>
                <p className="text-xs text-purple-400/70 font-open-sans-custom uppercase tracking-widest mb-0.5">Год</p>
                <p className="text-white font-open-sans-custom text-sm">2025</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Slide1Title
