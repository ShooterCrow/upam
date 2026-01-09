import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <div className="relative w-full min-h-[532px] bg-[#EB010C] overflow-hidden md:py-0">
            {/* Background Image */}
            <div className="md:absolute inset-0 bottom-0">
                <img
                    src="newletterimage.png"
                    alt="Newletter Image"
                    className="w-full h-[339px] object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 py-10 lg:gap-12 xl:gap-[347px] px-4 sm:px-8 lg:px-14 max-w-[1440px] mx-auto md:pt-[385px] md:pb-12">
                {/* Left Content */}
                <div className="flex flex-col items-start gap-3 lg:gap-[13px] w-full lg:w-auto lg:max-w-[557px]">
                    <h2 className="text-white font-lato text-2xl sm:text-3xl lg:text-[32.747px] font-medium leading-normal">
                        Subcribe to our Newsletter
                    </h2>
                    <p className="text-[#ECECEC] font-lato text-sm font-normal leading-[150%]">
                        Subscribe for Updates: Stay informed about the latest happening in UPAM events, activities and announcements by subscribing to our newsletter.
                    </p>
                </div>

                {/* Newsletter Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex items-stretch w-full lg:w-auto lg:min-w-[420px] rounded-[12.35px] overflow-hidden"
                >
                    <div className="flex-1 flex items-center px-5 py-4 bg-white/35 rounded-l-[3.705px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent text-white placeholder:text-white font-lato text-xs font-normal leading-[18.525px] outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-5 py-[9.88px] bg-white rounded-r-[3.705px] shadow-[0_6.175px_6.175px_0_rgba(16,137,255,0.10)] whitespace-nowrap"
                    >
                        <span className="text-black font-lato text-[9.88px] font-bold leading-normal">
                            Subscribe
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Newsletter