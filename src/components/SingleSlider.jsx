import { useEffect, useState } from "react"

export default function SingleSlider({ slides }) {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }

    // Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative mx-auto w-full overflow-hidden rounded-xl">

            {/* Slides */}
            <div className="relative h-56 md:h-96">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-700 ${current === index ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>

            {/* Indicators */}
            {/* <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full transition-all ${current === index
                            ? "bg-white"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div> */}

            {/* Previous Button */}
            {/* <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
                ❮
            </button> */}

            {/* Next Button */}
            {/* <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
                ❯
            </button> */}
        </div>
    )
}