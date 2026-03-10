import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface HeroProps {
    images: string[];
    logo: string;
}

const Hero: React.FC<HeroProps> = ({ images, logo }) => {
    return (
        <section className="relative h-[75vh] lg:h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Carousel */}
            <div className="absolute inset-0 z-0">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    speed={3000}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="h-full w-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <div className="absolute inset-0 bg-black/50"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Main UI Container */}
            <div className="relative z-10 flex flex-col items-center px-5 sm:px-8 lg:px-4 w-full max-w-4xl animate-fade-in">

                {/* Integrated Glass Unit */}
                <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md w-full sm:w-auto">

                    {/* Top Section: Logo (Lighter Glass) */}
                    <div className="bg-white/10 p-6 sm:p-8 md:p-12 flex justify-center items-center">
                        <img
                            src={logo}
                            alt="Kavi Logo"
                            className="w-64 sm:w-72 md:w-[420px] h-auto object-contain"
                        />
                    </div>

                    {/* Bottom Strip: Tagline (Darker, High-Contrast Strip) */}
                    <div className="bg-black/20 border-t border-white/10 py-3 px-4 sm:px-6 md:py-4 md:px-10">
                        <h2 className="text-white text-[10px] sm:text-xs md:text-[0.6rem] font-bold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.4em] uppercase text-center">
                            From Concept to Completion: Turning Ideas to Reality
                        </h2>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;