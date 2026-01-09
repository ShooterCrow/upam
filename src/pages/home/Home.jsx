import React from 'react';
import { ArrowRight, Star, MapPin, Users, Shield, Check, ChevronDown, Play, Calendar } from 'lucide-react';
import Curved3DCarousel from '../../component/ui/Curved3DCarousel';
import Button from '../../component/button/Button';
import Header from '../../component/layout/Header';
import { useState } from "react";
import Newsletter from '../../component/ui/NewsLetter';

// Main Hero Component
const UnitedAfricaHero = () => {
    return (
        <div className="relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background decorative elements - Left side */}
            <div className="absolute left-0 top-0 w-full lg:w-64 h-full opacity-20">
                {/* <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
                <div className="absolute top-40 left-5 w-24 h-24 bg-green-300 rounded-full blur-2xl"></div>
                <div className="absolute bottom-40 left-16 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-8 w-28 h-28 bg-red-300 rounded-full blur-2xl"></div> */}
                <img src="/countries.png" alt="Countries" />
            </div>

            {/* Background decorative elements - Right side */}
            <div className="absolute right-0 top-0 w-64 h-full opacity-20 hidden lg:block">
                {/* <div className="absolute top-20 right-12 w-36 h-36 bg-purple-300 rounded-full blur-3xl"></div>
                <div className="absolute top-60 right-8 w-28 h-28 bg-pink-300 rounded-full blur-2xl"></div>
                <div className="absolute bottom-32 right-14 w-32 h-32 bg-teal-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-300 rounded-full blur-2xl"></div> */}
                <img src="/countries.png" alt="Countries" />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    A United Africa, Rising Together With One Vision And One Purpose.
                </h1>

                <p className="text-gray-700 text-md mb-10 max-w-2xl mx-auto">
                    This call invites every African, at home and in the diaspora, to embrace a future where
                    our combined strength becomes the foundation for lasting development.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button variant="primary">
                        Learn About UPAM
                    </Button>
                    <Button variant="secondary">
                        Join the Movement
                    </Button>
                </div>
            </div>
        </div>
    );
};


const Index = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [videos] = useState([
        {
            id: '1',
            youtubeId: 'ccb7c08978b826c4b4cc998579da1c57cb3c07dd'
        },
        {
            id: '2',
            youtubeId: 'df95fb80d8ecebfffaa0c7e123e54f17eee599d0'
        }
    ]);

    return (
        <div className="min-h-screen">
            {/* Main Content Container */}
            <div className="flex flex-col items-center gap-16 lg:gap-24 pb-12 lg:py-24 px-4 lg:px-8">
                <div className="w-full max-w-7xl">
                    {/* Mission & Vision Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
                        {/* Left Column - Mission & Vision */}
                        <div className="flex flex-col gap-8 lg:gap-10">
                            <div className="flex flex-col gap-4 lg:gap-10">
                                <h2 className="text-2xl font-semibold text-black tracking-wide">
                                    Our Mission
                                </h2>
                                <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                    To strengthen bonds of solidarity between all people of African descent, fostering unity and development in Africa; for enhanced independence, industrialization, economic self- reliance as well as promote peace, security and stability within African communities and states.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <h2 className="text-2xl font-semibold text-black tracking-wide">
                                    Our Vission & Values
                                </h2>
                                <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                    A United Africa for sustainable development for all Africans Descent. UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Video */}
                        <div className="relative w-full aspect-video lg:aspect-[655/367] rounded-sm overflow-hidden bg-gray-200 group cursor-pointer">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/b3564abd0e1fb1dfb19649f1092e28adc8a02548?width=1310"
                                alt="UPAM Mission Video"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-upam-red transition-transform group-hover:scale-110">
                                    <Play className="w-5 h-5 lg:w-6 lg:h-6 text-white fill-white ml-1" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Movement Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
                        <div className="flex flex-col gap-8 lg:gap-11 order-2 lg:order-1">
                            <div className="flex flex-col gap-2">
                                <p className="text-base font-normal text-black tracking-wide">THE MOVEMENT</p>
                                <h2 className="text-2xl font-semibold text-black tracking-wide">
                                    The Spirit of Pan-Africanism Lives On
                                </h2>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/fd61f6f051ea09ccd7a23f36e8663b9e804698ae?width=816"
                                    alt="Pan-African Map"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 justify-end order-1 lg:order-2">
                            <div className="relative w-full aspect-[431/248] rounded-sm overflow-hidden">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/3aff55db95a13f272ccc48de58a70673598f80db?width=862"
                                    alt="Pan-African Unity"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                    This call invites every African, at home and in the diaspora, to embrace a future wherewhere our combined strength becomes the foundation for lasting development.
                                </p>
                                <button className="flex items-center gap-1 text-sm text-black hover:text-upam-red transition-colors self-start">
                                    Read more
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Who We Are Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
                        <div className="relative">
                            <div className="relative w-full aspect-[543/293] rounded-sm overflow-hidden">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/45370172fe42ffd55b6009588f5603c9aeb8c1b3?width=1086"
                                    alt="UPAM Community"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 left-4 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-upam-green/60"></div>
                                <div className="absolute top-4 right-4 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-upam-green/60"></div>
                            </div>
                            <p className="text-base font-normal text-black tracking-wide mt-3">ABOUT US</p>
                        </div>

                        <div className="flex flex-col gap-3 justify-end">
                            <h2 className="text-2xl font-semibold text-black tracking-wide">
                                Who We Are
                            </h2>
                            <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future. To encourage and strengthen bonds of solidarity between all people of African descent, Foster the development and unity of Africa, to enhanced independence.
                            </p>
                            <button className="flex items-center gap-1 text-sm text-upam-red hover:text-upam-red/80 transition-colors self-start">
                                Read more
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </section>

                    {/* What We Stand For Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <p className="text-base font-normal text-black tracking-wide">OUR FOCUS AREAS</p>
                                <h2 className="text-2xl font-semibold text-black tracking-wide">
                                    What We Stand For
                                </h2>
                                <p className="text-base text-upam-gray tracking-wide">
                                    We channel our energy into key areas that drive Africa forwardWe channel our energy into key areas that drive Africa forward
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button className="flex items-center justify-between px-3 py-2 bg-upam-green text-white hover:bg-upam-green/90 transition-colors">
                                    <span className="text-base font-normal tracking-wide">Africa's Unity & Development</span>
                                    <div className="flex gap-0.5">
                                        <span className="text-xs">›</span>
                                        <span className="text-xs">›</span>
                                        <span className="text-xs">›</span>
                                    </div>
                                </button>

                                <button className="flex items-center justify-between px-3 py-2 bg-upam-light text-black hover:bg-gray-300 transition-colors">
                                    <span className="text-base font-normal tracking-wide">Africa's Independence</span>
                                    <div className="flex gap-0.5 text-upam-dark">
                                        <span className="text-xs">›</span>
                                        <span className="text-xs">›</span>
                                        <span className="text-xs">›</span>
                                    </div>
                                </button>

                                <button className="flex items-center justify-between px-3 py-2 bg-upam-light text-black hover:bg-gray-300 transition-colors">
                                    <span className="text-base font-normal tracking-wide">Education & Leadership</span>
                                    <div className="flex gap-0.5 text-upam-dark">
                                        <span className="text-xs">›</span>
                                        <span className="text-xs">›</span>
                                        <span className="text-xs">›</span>
                                    </div>
                                </button>

                                <button className="flex items-center justify-between px-3 py-2 bg-upam-light text-black hover:bg-gray-300 transition-colors">
                                    <span className="text-base font-normal tracking-wide">Security & Stability within African Communities and States</span>
                                    <div className="flex gap-0.5 text-upam-dark">
                                        <span className="text-xs">›</span>
                                        <span className="text-xs">›</span>
                                        <span className="text-xs">›</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/04328338922ba2be5989a627fc0bcd688bc77625?width=1086"
                                alt="Focus Areas"
                                className="w-full h-auto object-cover rounded-sm"
                            />
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section className="flex flex-col items-center gap-8 lg:gap-12 mb-16 lg:mb-20">
                        <div className="flex flex-col items-center gap-2 max-w-3xl text-center">
                            <p className="text-base font-normal text-black tracking-wide">GALLERY</p>
                            <h2 className="text-2xl font-semibold text-black tracking-wide">
                                Moments that inspire change
                            </h2>
                            <p className="text-base text-upam-gray tracking-wide">
                                Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
                            </p>
                        </div>

                        <div className="w-full flex flex-col gap-3.5">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/b25f74c0c208851c995df3fe41a15ea551fbb960?width=336" alt="Gallery 1" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/0ac49176818ab6dbe13202ff503abf2227cb2069?width=560" alt="Gallery 2" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/683f693939e917cd3297ff8c6e8af8554e42eae3?width=560" alt="Gallery 3" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/1baa487a59315c54db38e9d2509b9139cca12f04?width=560" alt="Gallery 4" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/07536e0af663886d7094bb2f428fbad257f117cd?width=560" alt="Gallery 5" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/e30f23ba83e18af62762d04d97d7fb23736884ea?width=166" alt="Gallery 6" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/abfd27d9caa30b255c52b305f32ea927babe0a7c?width=560" alt="Gallery 7" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/ac234c04876489cf67819ff29fd69111a0cb2551?width=560" alt="Gallery 8" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/b31867e5786bbf758ab14021fa312dfd60fefa4a?width=560" alt="Gallery 9" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/cc12aecd308e8fae3240012701bfdd6c09ff6b0d?width=560" alt="Gallery 10" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                                <img src="https://api.builder.io/api/v1/image/assets/TEMP/60e7aa2081693a1b2f14cd4094ea75358bc99a51?width=528" alt="Gallery 11" className="w-full h-48 lg:h-56 object-cover rounded-sm" />
                            </div>
                        </div>
                    </section>

                    {/* Our Impacts Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
                        <div className="flex flex-col gap-8 lg:gap-12">
                            <h2 className="text-2xl font-semibold text-black tracking-wide">
                                Our Impacts /Projects
                            </h2>

                            <div className="flex flex-col gap-7">
                                <div className="flex gap-4 lg:gap-8">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-upam-green border-2 border-upam-green mt-3"></div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg lg:text-xl text-black tracking-wide">
                                            Clean energy with the Sudan National Energy Research Center
                                        </h3>
                                        <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                            Powering a brighter future for Sudan! Upam is proud to partner with the Sudan National Energy Research Center on a groundbreaking clean energy project.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 lg:gap-8">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-upam-green border-2 border-upam-green mt-3"></div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg lg:text-xl text-black tracking-wide">
                                            UPAM Finance to Support Vulnerable Communities
                                        </h3>
                                        <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                            Making a difference, one community at a time. UPAM Finance is stepping up to support vulnerable communities with financial inclusion initiatives
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 lg:gap-8">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-upam-green border-2 border-upam-green mt-3"></div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg lg:text-xl text-black tracking-wide">
                                            Health Program Across Africa
                                        </h3>
                                        <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                            Healthy lives, brighter futures UPAM is rolling out health programs across Africa, touching lives and building stronger communities.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 lg:gap-8">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-upam-green border-2 border-upam-green mt-3"></div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg lg:text-xl text-black tracking-wide">
                                            UPAM Schools/Academy to Prepare Skilled Professionals for Todays Job Market
                                        </h3>
                                        <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                            Empowering the next-gen workforce, UPAM Schools/Academy is equipping students with in-demand skills to thrive in today's job market. Future-ready professionals, rising from Africa
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/60f56090a043aa0052b7f54ed5a76931e6460ef6?width=1176"
                                alt="Our Impacts Map"
                                className="w-full max-w-md h-auto"
                            />
                        </div>
                    </section>

                    {/* Be Part of The Movement Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
                        <div className="relative aspect-[711/350] rounded-sm overflow-hidden">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/743da7307db5c6f3802fcc3250631182d6dcce9b?width=1422"
                                alt="Join Movement"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-upam-green/70"></div>
                            <div className="absolute top-0 right-0 w-1/6 h-1/4 bg-upam-red/70"></div>
                        </div>

                        <div className="flex flex-col gap-8 lg:gap-9 justify-center">
                            <p className="text-base font-normal text-black tracking-wide">GET INVOLVED</p>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-2xl font-semibold text-black tracking-wide">
                                    Be Part of The Movement
                                </h2>
                                <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                    We the African People Stand United for Economically Self-sustainable, Development, Freedom, Equality, Justice, Free Trade, Open Boarders, Effective Governance, One Nation and the Protection of Our motherland, one people united for Africa, Home of the Brave.
                                </p>
                                <button className="flex items-center gap-1 text-sm text-black hover:text-upam-red transition-colors self-start">
                                    Join Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Leadership Section */}
                    <section className="flex flex-col gap-5 mb-16 lg:mb-20">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
                            <div className="flex flex-col gap-3">
                                <p className="text-base font-normal text-black tracking-wide">Leadership</p>
                                <h2 className="text-2xl font-semibold text-black tracking-wide">
                                    Global Executive
                                </h2>
                                <p className="text-base text-upam-gray tracking-wide">
                                    UPAM thrives through committed leaders, dedicated volunteers, and strategic partners.
                                </p>
                            </div>
                            <button className="flex items-center gap-1 text-sm text-upam-red hover:text-upam-red/80 transition-colors">
                                See All
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                            <div className="flex flex-col gap-5">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/e144c36edf141cdbaf91e1c889bf576effca28f8?width=504"
                                    alt="Benedicto Mbango"
                                    className="w-full aspect-[252/288] object-cover rounded-sm"
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm text-black tracking-wide">Benedicto Mbango</p>
                                    <p className="text-base font-medium text-black tracking-wide">Global President (UPAM)</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/3fff38c2724d07db4e7078f0213b213c92f4daf7?width=502"
                                    alt="Priscilia Tsongwain"
                                    className="w-full aspect-[252/288] object-cover rounded-sm"
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm text-black tracking-wide">Priscilia Tsongwain</p>
                                    <p className="text-base font-medium text-black tracking-wide">Vice President (UPAM)</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/38c51c34a61b389791ab1f01683e8012905ab5f1?width=502"
                                    alt="Petrina Nghipundilo Shiindi"
                                    className="w-full aspect-[252/288] object-cover rounded-sm"
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm text-black tracking-wide">Petrina Nghipundilo Shiindi</p>
                                    <p className="text-base font-medium text-black tracking-wide">Global Executive Administrator II</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/3a55b1bee8e50967efc6b30c34bd732da3babd98?width=502"
                                    alt="Akpur Emmanuel Terfa"
                                    className="w-full aspect-[252/288] object-cover rounded-sm"
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm text-black tracking-wide">Akpur Emmanuel Terfa</p>
                                    <p className="text-base font-medium text-black tracking-wide">Global Secretary General</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/af4122391d369736f68533f7726a71f3ca00aca4?width=504"
                                    alt="Augustine Nyakatoma"
                                    className="w-full aspect-[252/266] object-cover rounded-sm"
                                />
                                <div className="flex flex-col">
                                    <p className="text-xs text-black tracking-wide">Augustine Nyakatoma</p>
                                    <p className="text-[15px] font-medium text-black tracking-wide leading-snug">Speaker of National Representative</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Activities Section */}
                    <section className="">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4 lg:gap-7">
                                <div className="flex flex-col gap-4">
                                    <p className="text-base font-normal text-black tracking-wide font-dm-sans">Activities</p>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-2xl font-semibold text-black tracking-wide">
                                            Activities Lined up for 2026
                                        </h2>
                                        <p className="text-base text-upam-gray tracking-wide">
                                            Stay updated with UPAM activities, announcements, and Pan-African happenings.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="relative w-full lg:w-2/3 h-[400px] rounded-sm overflow-hidden group cursor-pointer">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/87a486687e349d2a5c9a964e45e9e666dd8b47a7?width=1760"
                                        alt="UPAM Academy Launch"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 text-white">
                                        <div className="flex items-center gap-3 mb-2.5">
                                            <Calendar className="w-4 h-4" />
                                            <p className="text-xs tracking-wide">20th march 2025,</p>
                                        </div>
                                        <div className="flex flex-col gap-3.5">
                                            <h3 className="text-xl font-semibold tracking-wide">UPAM Academy Launch</h3>
                                            <p className="text-sm text-white/70 leading-relaxed tracking-wide">
                                                Get ready to unlock new skills and opportunities! We're excited to announce the launch of Upam Academy, where learning meets innovation. Join us for an exclusive event as we unveil our programs and opportunities for growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 w-full lg:w-1/3">
                                    <div className="relative w-full h-[300px] rounded-sm overflow-hidden">
                                        <img
                                            src="https://api.builder.io/api/v1/image/assets/TEMP/77d44987ad0ee22bd9d573bb47d256e184bf2af3?width=860"
                                            alt="UPAM Unity Conference"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        {/* <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-upam-dark" />
                                    <p className="text-xs text-upam-gray tracking-wide">20th July 2025,</p>
                                </div> */}
                                        <h3 className="text-xl font-semibold text-black tracking-wide">
                                            UPAM Unity Conference
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* News Section */}
                    <section className="flex flex-col gap-8 lg:gap-9 mb-16 lg:mb-20">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
                            <div className="flex flex-col gap-4 lg:gap-5">
                                <p className="text-base font-normal text-black tracking-wide font-dm-sans">NEWS</p>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl font-semibold text-black tracking-wide">
                                        Wakanda Network News
                                    </h2>
                                    <p className="text-base text-upam-gray tracking-wide">
                                        Trusted Pan-African news curated for an informed and empowered continent.
                                    </p>
                                </div>
                            </div>
                            <button className="flex items-center gap-1 text-sm text-upam-red hover:text-upam-red/80 transition-colors">
                                Read WNN Africa News
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className="flex flex-col gap-5">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/7cd9c8f05a7270035a671f3aa537d96d7a6dd87a?width=860"
                                    alt="Nigeria Defence Minister News"
                                    className="w-full aspect-[430/312] object-cover rounded-sm"
                                />
                                <div className="flex flex-col gap-2.5">
                                    {/* <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-upam-dark" />
                                        <p className="text-xs text-upam-gray tracking-wide">20th march 2025, Rachel Eleojo Sunday</p>
                                    </div> */}
                                    <div className="flex flex-col gap-2.5">
                                        <h3 className="text-xl font-semibold text-black tracking-wide">
                                            Nigeria Defence Minister Resigns, Ex-Military Chief Musa Poised to Succeed
                                        </h3>
                                        <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                            ABUJA: Nigeria's Defence Minister, Alhaji Mohammed Badaru Abubakar, has officially resigned from his position, citing health reasons. President Bola Tinubu accepted the resignation with immediate effect, according to a statement released by
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/f2d0668554633b8240cf17ee26637d0743300c7a?width=860"
                                    alt="Climate News"
                                    className="w-full aspect-[430/312] object-cover rounded-sm"
                                />
                                <div className="flex flex-col gap-2.5">
                                    {/* <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-upam-dark" />
                                        <p className="text-xs text-upam-gray tracking-wide">20th march 2025, Rachel Eleojo Sunday</p>
                                    </div> */}
                                    <div className="flex flex-col gap-2.5">
                                        <h3 className="text-xl font-semibold text-black tracking-wide">
                                            Africa's Top Climate Negotiator Says 'No Reverse Gear' on Commitments
                                        </h3>
                                        <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                            NAIROBI: The world has no choice but to press on with climate commitments despite the United States pulling out of a key international accord, given the threats posed by global warming and the progress already made, the chair of the Africa group of negotiators said.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/b329cab0f6c4f482cadbf97b0e3901cd347c23cd?width=860"
                                    alt="Ukraine Minerals News"
                                    className="w-full aspect-[430/312] object-cover rounded-sm"
                                />
                                <div className="flex flex-col gap-2.5">
                                    {/* <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-upam-dark" />
                                        <p className="text-xs text-upam-gray tracking-wide">20th march 2025, Rachel Eleojo Sunday</p>
                                    </div> */}
                                    <div className="flex flex-col gap-2.5">
                                        <h3 className="text-xl font-semibold text-black tracking-wide">
                                            Ukraine, US Sign Minerals Deal Sought by Trump
                                        </h3>
                                        <p className="text-sm text-upam-gray leading-relaxed tracking-wide">
                                            KYIV/WASHINGTON: Ukraine and the U.S. on Wednesday signed a deal heavily promoted by U.S. President Donald Trump that will give the United States preferential access to new Ukrainian minerals deals and fund investment in Ukraine's reconstruction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Video Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 mb-16 lg:mb-20">
                        {/* Main Video */}
                        <div className="flex flex-col">
                            <div className="relative w-full aspect-[768/428] rounded-sm overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
                                    title="YouTube video player 1"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Side Video */}
                        <div className="flex flex-col">
                            <div className="relative w-full aspect-[542/356] rounded-sm overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${videos[1].youtubeId}`}
                                    title="YouTube video player 2"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-5">
                                <h2 className="text-2xl font-medium text-upam-dark">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-sm text-upam-paragraph leading-relaxed tracking-wider">
                                    Welcome to our FAQ section! Here, you'll find answers to common questions about UPAM. If you need further assistance, feel free to send us an email
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2.5">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}
                                        className="flex items-center justify-between gap-2.5 text-left"
                                    >
                                        <h3 className="text-xl font-medium text-upam-red leading-tight">
                                            What is UPAM (United Pan-Africanist Movement
                                        </h3>
                                        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-upam-red transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openFaq === 0 && (
                                        <p className="text-base text-upam-gray leading-relaxed tracking-wider">
                                            UPAM is a Pan-African organization focused on unity, empowerment, leadership development, and sustainable progress across Africa and the diaspora.
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-8">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}
                                        className="flex items-center justify-between gap-2.5 text-left"
                                    >
                                        <h3 className="text-xl font-medium text-upam-dark">
                                            Who can become a member of UPAM?
                                        </h3>
                                        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-upam-dark transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
                                    </button>

                                    <button
                                        onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}
                                        className="flex items-center justify-between gap-2.5 text-left"
                                    >
                                        <h3 className="text-xl font-medium text-upam-dark">
                                            How can I join or get involved with UPAM?
                                        </h3>
                                        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-upam-dark transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
                                    </button>

                                    <button
                                        onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)}
                                        className="flex items-center justify-between gap-2.5 text-left"
                                    >
                                        <h3 className="text-xl font-medium text-upam-dark">
                                            Where does UPAM operate?
                                        </h3>
                                        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-upam-dark transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
                                    </button>

                                    <button
                                        onClick={() => setOpenFaq(openFaq === 4 ? -1 : 4)}
                                        className="flex items-center justify-between gap-2.5 text-left"
                                    >
                                        <h3 className="text-xl font-medium text-upam-dark">
                                            What kind of programs and initiatives does UPAM run?
                                        </h3>
                                        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-upam-dark transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
                                    </button>

                                    <button
                                        onClick={() => setOpenFaq(openFaq === 5 ? -1 : 5)}
                                        className="flex items-center justify-between gap-2.5 text-left"
                                    >
                                        <h3 className="text-xl font-medium text-upam-dark">
                                            How is UPAM funded?
                                        </h3>
                                        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-upam-dark transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/8b553fc5ee46c49c7770ecda17fa30afaf62ddfc?width=1263"
                                alt="FAQ Map"
                                className="w-full max-w-lg h-auto"
                            />
                        </div>
                    </section>
                </div>
            </div >
        </div >
    );
}


const Home = () => {
    return (
        <div className="min-h-screen">
            <UnitedAfricaHero />
            {/* Hero Section with Curved 3D Slider */}
            <section className="relative">
                <Curved3DCarousel />
            </section>
            <Index />
            <Newsletter />

        </div>
    );
};

export default Home;