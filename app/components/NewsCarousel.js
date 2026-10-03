'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const services = [
  { image: '/news/new1.webp' },
  { image: '/news/new2.webp' },
  { image: '/news/new3.webp' },
  { image: '/news/new4.webp' },
  { image: '/news/new5.webp' },
]

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [visibleCards, setVisibleCards] = useState(3)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const duplicatedServices = [...services, ...services, ...services]

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setVisibleCards(1)
      else if (width < 1024) setVisibleCards(2)
      else setVisibleCards(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setIsTransitioning(true)
    setCurrent(prev => prev + 1)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setCurrent(prev => prev - 1)
  }

  const handleTouchStart = e => { touchStartX.current = e.touches[0].clientX }
  const handleTouchMove = e => { touchEndX.current = e.touches[0].clientX }
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide()
    if (touchStartX.current - touchEndX.current < -50) prevSlide()
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (current >= services.length * 2) {
      setTimeout(() => { setIsTransitioning(false); setCurrent(services.length) }, 700)
    } else if (current < 0) {
      setTimeout(() => { setIsTransitioning(false); setCurrent(services.length - 1) }, 700)
    } else {
      setIsTransitioning(true)
    }
  }, [current])

  const displayIndex = current % services.length
  const actualIndex = displayIndex < 0 ? displayIndex + services.length : displayIndex

  const getCardWidthClass = () => {
    switch (visibleCards) {
      case 1: return 'w-full flex justify-center'
      case 2: return 'w-1/2'
      case 3: return 'w-1/3'
      default: return 'w-1/3'
    }
  }

  return (
    <section id="news" className="py-14 sm:py-18 lg:py-24 bg-muted/30">
      <div className="px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Últimas <span className="text-gradient">Novidades</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#508495] max-w-2xl mx-auto">
            Soluções completas em comunicação visual para fortalecer sua marca
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out py-6"
            style={{
              transform: `translateX(-${current * (100 / visibleCards)}%)`,
              transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {duplicatedServices.map((service, index) => (
              <div key={index} className={`${getCardWidthClass()} flex-shrink-0 flex justify-center`}>
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-[var(--promofix-primary-blue)] shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={service.image} 
                    alt="Imagem carrossel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 opacity-90 mt-10 sm:mt-12 px-4">
            <button
              onClick={prevSlide}
              className="group flex items-center justify-center bg-[var(--promofix-primary-blue)] hover:bg-[var(--promofix-primary-dark-blue)] rounded-full h-10 w-10 sm:h-12 sm:w-12 transition-colors"
            >
              <ArrowLeft className="text-white opacity-80 group-hover:opacity-100 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="group flex items-center justify-center bg-[var(--promofix-primary-blue)] hover:bg-[var(--promofix-primary-dark-blue)] rounded-full h-10 w-10 sm:h-12 sm:w-12 transition-colors"
            >
              <ArrowRight className="text-white opacity-80 group-hover:opacity-100 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-8 sm:mt-10 px-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => { setIsTransitioning(true); setCurrent(index + services.length) }}
                className={`w-3 h-3 rounded-full transition-all ${index === actualIndex ? 'bg-[var(--promofix-primary-blue)] w-8 sm:w-10' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
