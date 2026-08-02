import { useEffect, useState, useCallback } from "react"

export default function SingleSlider({ slides, interval = 4000 }) {
    const [current, setCurrent] = useState(0)
    const [prev, setPrev] = useState(null)

    const goTo = useCallback((index) => {
        setPrev(current)
        setCurrent(index)
    }, [current])

    const next = useCallback(() => {
        goTo((current + 1) % slides.length)
    }, [current, slides.length, goTo])

    useEffect(() => {
        const timer = setInterval(next, interval)
        return () => clearInterval(timer)
    }, [next, interval])

    return (
        <div className="relative w-full overflow-hidden aspect-[4/5]">
            {slides.map((slide, index) => {
                const isActive = index === current
                const isLeaving = index === prev

                return (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                            ${isActive ? "opacity-100 scale-100 z-10" : ""}
                            ${isLeaving ? "opacity-0 scale-105 z-0" : ""}
                            ${!isActive && !isLeaving ? "opacity-0 scale-100 z-0" : ""}
                        `}
                    />
                )
            })}

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`transition-all duration-300 rounded-full ${
                            current === index
                                ? "w-6 h-2 bg-[#EB010C]"
                                : "w-2 h-2 bg-white/60 hover:bg-white"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
