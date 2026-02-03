const FirstExecutive = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
                {/* Left: Story Text */}
                <div className="flex-1 max-w-[768px]">
                    <p className="text-base text-neutral leading-[1.56] tracking-wide">
                        These young men met on Facebook right at the beginning of the COVID-19 pandemic, when Africa went on shut down leaving 90% of the African population in hunger, students stranded, and schools closed. No hope for young people and so UPAM was created on April 6th, 2020, to build a new Africa for Africans, giving hope to the people of African descent, encouraging, and strengthening bonds of solidarity between all indigenous and diasporas people of African descent. UPAM is guided by the African Union's vision of "an integrated, prosperous, and peaceful Africa, driven by its own citizens and representing a dynamic force in the global arena.
                    </p>
                </div>

                {/* Right: Executive Info */}
                <div className="flex flex-col gap-5 max-w-[455px]">
                    <h2 className="text-[28px] lg:text-[32px] font-semibold leading-[1.39] tracking-wide text-foreground">
                        First Executive
                    </h2>
                    <p className="text-base text-neutral leading-[1.56] tracking-wide">
                        Global Chairman: Nelson Mansare Residing in Finland <br />
                        Global Vice Chairman: Blessed Mukonka Residing in Zambia <br />
                        Global Secretary General: Emmanuel Kpan Residing in Liberia
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FirstExecutive