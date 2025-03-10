import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow' 
import {Autoplay,EffectCoverflow } from 'swiper/modules';
export default function HeroCarrusel(){
    return( 
        <Swiper
              effect={'coverflow'}
              grabCursor={true}
              modules={[ EffectCoverflow ,Autoplay]}
              coverflowEffect={
                {
                  rotate:50,
                  stretch:0,
                  depth:100,
                  modifier:1,
                  slideShadows:true
                }
              }
              autoplay={{
                delay:3000,
                disableOnInteraction:false
              }}
              spaceBetween={50}
              loop={true}
              slidesPerView={1}
              className="w-[90%] text-xl md:text-3xl text-center font-bold flex justify-center items-center "
            >
          <SwiperSlide>
            <div  className="flex justify-around items-center flex-col-reverse md:flex-row gap-5">
            <span>
                La tecnología más avanzada en equipos y herramientas para tu laboratorio.
              </span>
              <div className="p-5 w-[60%] md:w-[20%] flex justify-center bg-primary rounded-full">
                <img className='w-[80%]' src="/images/miicroscopio.png" alt="microscopio" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex justify-around items-center flex-col-reverse md:flex-row gap-5'>
            <span>
              Instrumentos y dispositivos de las marcas más reconocidas y confiables.
            </span>
            <div className="p-5 w-[60%] md:w-[20%] flex justify-center bg-blue-700 rounded-full">
                <img className='w-[80%]' src="/images/miicroscopio.png" alt="microscopio" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-around items-center flex-col-reverse md:flex-row gap-5">
            <span>
            Todo lo esencial para tu laboratorio, disponible en un único sitio.
            </span>
            <div className="p-5 w-[60%] md:w-[20%] flex justify-center bg-primary rounded-full">
                <img className='w-[80%]' src="/images/miicroscopio.png" alt="microscopio" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    )
}