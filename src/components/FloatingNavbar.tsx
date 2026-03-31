import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const slides = [
  { id: "slide-1", label: "Титул" },
  { id: "slide-2", label: "Введение" },
  { id: "slide-3", label: "Гл. 1" },
  { id: "slide-4", label: "Виды" },
  { id: "slide-5", label: "Объём" },
  { id: "slide-6", label: "Гл. 2" },
  { id: "slide-7", label: "Материалы" },
  { id: "slide-8", label: "Гл. 3" },
  { id: "slide-9", label: "Эскизы" },
  { id: "slide-10", label: "Процесс" },
  { id: "slide-11", label: "Финиш" },
  { id: "slide-12", label: "Анализ" },
]

export function FloatingNavbar() {
  const [current, setCurrent] = useState(0)

  const scrollToSlide = (index: number) => {
    const section = document.getElementById(slides[index].id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  useEffect(() => {
    const container = document.querySelector(".snap-x") as HTMLElement
    if (!container) return
    const handler = () => {
      const idx = Math.round(container.scrollLeft / container.offsetWidth)
      setCurrent(idx)
    }
    container.addEventListener("scroll", handler)
    return () => container.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl rounded-2xl border-2 border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-2">
          <button onClick={() => scrollToSlide(0)} className="cursor-pointer flex-shrink-0">
            <div className="flex items-center gap-2 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">
              <span className="font-semibold text-base font-open-sans-custom tracking-tight whitespace-nowrap">
                Динамика коня
              </span>
            </div>
          </button>

          <div className="hidden items-center gap-1 md:flex flex-wrap justify-center">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(i)}
                className={`text-xs font-open-sans-custom px-2 py-1 rounded transition-colors [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] ${
                  current === i ? "text-white bg-white/15" : "text-gray-400 hover:text-white"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-gray-400 font-open-sans-custom whitespace-nowrap">
              {current + 1} / {slides.length}
            </span>
            <Button
              size="sm"
              onClick={() => scrollToSlide(Math.min(current + 1, slides.length - 1))}
              className="bg-white text-black hover:bg-gray-100 font-open-sans-custom text-xs"
            >
              Далее →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
