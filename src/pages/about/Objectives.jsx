const Objectives = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
                {/* Left: Image */}
                <div className="w-full lg:w-auto">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/494bd64452c17d8f73dc5f162ce9131d86969c3b?width=970"
                        alt="UPAM team in action"
                        className="w-full lg:w-[485px] h-auto lg:h-[302px] object-cover"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col gap-2.5 max-w-[430px]">
                    <h2 className="text-2xl font-semibold leading-[1.39] tracking-wide text-foreground">
                        Our Objectives
                    </h2>
                    <p className="text-sm text-neutral leading-[1.69] tracking-[0.56px]">
                        UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future. To encourage and strengthen bonds of solidarity between all people of African descent, Foster the development and unity of Africa, to enhanced independence.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Objectives