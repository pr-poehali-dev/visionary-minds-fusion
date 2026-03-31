import { LiquidMetalBackground } from "@/components/LiquidMetalBackground"
import { FloatingNavbar } from "@/components/FloatingNavbar"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { Slide1Title } from "@/components/slides/Slide1Title"
import { Slide2Intro } from "@/components/slides/Slide2Intro"
import { Slide3History } from "@/components/slides/Slide3History"
import { Slide4Classification } from "@/components/slides/Slide4Classification"
import { Slide5Volume } from "@/components/slides/Slide5Volume"
import { Slide6Trends } from "@/components/slides/Slide6Trends"
import { Slide7Materials } from "@/components/slides/Slide7Materials"
import { Slide8Concept } from "@/components/slides/Slide8Concept"
import { Slide9Sketching } from "@/components/slides/Slide9Sketching"
import { Slide10Process } from "@/components/slides/Slide10Process"
import { Slide11Finishing } from "@/components/slides/Slide11Finishing"
import { Slide12Problems } from "@/components/slides/Slide12Problems"

const TOTAL_SLIDES = 12

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY
      const currentScroll = scrollContainer.scrollLeft
      const containerWidth = scrollContainer.offsetWidth
      const currentSection = Math.round(currentScroll / containerWidth)

      if (Math.abs(delta) > 10) {
        let targetSection = currentSection
        if (delta > 0) {
          targetSection = Math.min(currentSection + 1, TOTAL_SLIDES - 1)
        } else {
          targetSection = Math.max(currentSection - 1, 0)
        }
        scrollContainer.scrollTo({
          left: targetSection * containerWidth,
          behavior: "smooth",
        })
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <main className="relative h-screen overflow-hidden">
      <LiquidMetalBackground />
      <div className="fixed inset-0 z-[5] bg-black/50" />
      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <section id="slide-1" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <Slide1Title />
        </section>

        <section id="slide-2" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <Slide2Intro />
        </section>

        <section
          id="slide-3"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide3History /></div>
        </section>

        <section
          id="slide-4"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide4Classification /></div>
        </section>

        <section
          id="slide-5"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide5Volume /></div>
        </section>

        <section
          id="slide-6"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide6Trends /></div>
        </section>

        <section
          id="slide-7"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide7Materials /></div>
        </section>

        <section
          id="slide-8"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide8Concept /></div>
        </section>

        <section
          id="slide-9"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide9Sketching /></div>
        </section>

        <section
          id="slide-10"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide10Process /></div>
        </section>

        <section
          id="slide-11"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide11Finishing /></div>
        </section>

        <section
          id="slide-12"
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar flex items-start justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className={cn("absolute inset-0 z-0 size-full pointer-events-none", "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]", "bg-[size:12px_12px]", "opacity-30")} />
          <div className="relative z-10 w-full max-w-5xl"><Slide12Problems /></div>
        </section>
      </div>
    </main>
  )
}
