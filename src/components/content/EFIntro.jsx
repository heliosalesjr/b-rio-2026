'use client'

import React from 'react'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const images = ['fin1.jpg', 'fin2.jpg', 'fin3.jpg']

const EFIntro = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('ef-intro');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="ef-intro" className="scroll-mt-20 relative w-full h-[50vh] overflow-hidden rounded-lg">
      {/* Texto sobreposto */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-6 py-4 z-10">
        <p className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-center">
          Segundo a Organização para a Cooperação e Desenvolvimento Econômico (OCDE), a Educação Financeira pode ser definida como o processo pelo qual consumidores e/ou investidores financeiros melhoram sua compreensão sobre produtos e conceitos financeiros para desenvolver a capacidade de adquirir as habilidades e a confiança necessárias para se tornarem mais conscientes dos riscos na hora da tomada de decisões.
        </p>
      </div>

      {/* Carrossel Swiper */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default EFIntro
