export function Hero() {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <div className="flex flex-col items-center gap-12 lg:gap-20">
                {/* Header Text */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full">
                    <div className="flex flex-col gap-2 flex-1 max-w-[573px]">
                        <p className="text-base text-foreground tracking-wide">About Us</p>
                        <h1 className="text- lg:text-[32px] font-semibold leading-[1.39] tracking-wide text-foreground">
                            Uniting Africa. Empowering People.
                        </h1>
                        <p className="text-sm text-neutral leading-[1.56] tracking-wide">
                            This call invites every African, at home and in the diaspora, to embrace a future where our combined strength becomes the foundation for lasting development.
                        </p>
                    </div>
                    <div className="text-sm text-neutral leading-[1.56] tracking-wide max-w-[340px]">
                        <p>
                            1. Blessed Mukonka, University of Lusaka-Zambia
                            2. Emmanuel Kpan, University of Monrovia-Liberia
                            3. Lord Malvin Harare- Zimbabwe
                        </p>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 w-full">
                    {/* Left Group */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-0">
                        <img
                            src="https://res.cloudinary.com/dyy6gisnk/image/upload/v1782489956/7fe6a4a6f31d3a5de91463aff776e511431d8ec3_qr3m0f.png"
                            alt="UPAM team meeting"
                            className="w-full sm:w-[200px] lg:w-[260px] h-auto lg:h-[340px] object-cover"
                        />
                        <img
                            src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png"
                            alt="UPAM conference"
                            className="w-full sm:w-[400px] lg:w-[563px] h-auto lg:h-[471px] object-cover"
                        />
                    </div>

                    {/* Right Group */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-0">
                        <img
                            src="https://res.cloudinary.com/dyy6gisnk/image/upload/v1779288902/c78f0671096d20f62827357b9a362ac828bdbbf9_kzt0tj.jpg"
                            alt="Community members"
                            className="w-full sm:w-[200px] lg:w-[260px] h-auto lg:h-[340px] object-cover"
                        />
                        <img
                            src="https://res.cloudinary.com/dyy6gisnk/image/upload/v1782489323/65edfbd6618650ee6c39d6d3e581e169f2567595_se0ysj.png"
                            alt="Cultural celebration"
                            className="w-full sm:w-[280px] lg:w-[357px] h-auto lg:h-[422px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
