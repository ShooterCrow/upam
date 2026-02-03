import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full min-h-[397px] bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
                {/* Main Footer Content */}
                <div className="flex flex-col xl:flex-row justify-between items-start pt-12 md:pt-[74px] pb-12 gap-8 lg:gap-12">
                    {/* Left Section - Footer Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 xl:gap-16 w-full xl:w-auto">
                        {/* Column 1 */}
                        <div className="flex flex-col items-start gap-4">
                            <h3 className="text-white font-lato text-sm font-normal">About us</h3>
                            <div className="flex flex-col items-start gap-4">
                                <Link to="/contact" className="text-white font-lato text-sm font-normal hover:underline">
                                    Contact us
                                </Link>
                                <Link to="/executive" className="text-white font-lato text-sm font-normal hover:underline">
                                    Executive
                                </Link>
                                <Link to="/representative" className="text-white font-lato text-sm font-normal hover:underline">
                                    Representative
                                </Link>
                                <Link to="/platforms" className="text-white font-lato text-sm font-normal hover:underline">
                                    Platforms
                                </Link>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col items-start gap-4">
                            <h3 className="text-white font-lato text-sm font-normal">Join the Movement</h3>
                            <div className="flex flex-col items-start gap-4">
                                <Link to="/account" className="text-white font-lato text-sm font-normal hover:underline">
                                    Account
                                </Link>
                                <Link to="/newsletters" className="text-white font-lato text-sm font-normal hover:underline">
                                    Newsletters
                                </Link>
                                <Link to="/projects" className="text-white font-lato text-sm font-normal hover:underline">
                                    Projects
                                </Link>
                                <Link to="/chapters" className="text-white font-lato text-sm font-normal hover:underline">
                                    Chapters
                                </Link>
                            </div>
                        </div>

                        {/* Office Locations */}
                        <div className="flex flex-col items-start gap-8 md:gap-[50px] w-full md:w-auto md:min-w-[200px]">
                            <div>
                                <p className="text-white font-lato text-sm font-normal leading-[23px]">
                                    GLOBAL OPERATONS OFFICE<br />
                                    14141 E 102ND AVE COMMERCE<br />
                                    CITY CO, 80022 U.S.A
                                </p>
                            </div>
                            <a
                                href="tel:+17207179288"
                                className="text-white font-lato text-base font-normal leading-[23px] underline hover:no-underline"
                            >
                                Phone: +1-720-717-9288
                            </a>
                        </div>

                        <div className="flex flex-col items-start md:items-center gap-8 md:gap-[50px] w-full md:w-auto md:min-w-[200px]">
                            <div>
                                <p className="text-white font-lato text-sm font-normal leading-[23px]">
                                    GLOBAL HEADQUARTERS.<br />
                                    P.O BOX 21336 WINDHOEK,<br />
                                    NAMIBIA
                                </p>
                            </div>
                            <a
                                href="tel:+264812101200"
                                className="text-white font-lato text-base font-semibold leading-normal underline hover:no-underline"
                            >
                                Phone: +264 81 210 1200
                            </a>
                        </div>
                    </div>

                    {/* Right Section - CTA */}
                    <div className="flex flex-col items-start gap-8 md:gap-[46px] w-full xl:w-[320px] xl:flex-shrink-0">
                        {/* Title and Buttons */}
                        <div className="flex flex-col items-start gap-[26px] w-full">
                            <h3 className="text-white font-lato text-xl font-semibold leading-[35px] w-full">
                                Join the movement and help bring change to Africa
                            </h3>
                            <div className="flex items-start gap-3 w-full">
                                <Link
                                    to="/learn-more"
                                    className="flex-1 flex justify-center items-center px-6 py-3 bg-[#EB010C] text-white font-poppins text-base font-medium hover:bg-[#d00109] transition-colors"
                                >
                                    Learn more
                                </Link>
                                <Link
                                    to="/join"
                                    className="flex-1 flex justify-center items-center px-6 py-3 border border-white text-white font-poppins text-base font-medium hover:bg-white hover:text-black transition-colors"
                                >
                                    Join now
                                </Link>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-[52px]">
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_141_351)">
                                        <path d="M23.47 2.63203C23.3323 2.1233 23.0638 1.65951 22.6911 1.28684C22.3185 0.914167 21.8547 0.64562 21.346 0.507937C19.4835 0 11.9878 0 11.9878 0C11.9878 0 4.49177 0.015375 2.62933 0.523312C2.1206 0.661003 1.65681 0.929565 1.28415 1.30225C0.911497 1.67494 0.642976 2.13875 0.505331 2.6475C-0.0580132 5.95669 -0.276545 10.9991 0.520799 14.1759C0.658459 14.6847 0.926986 15.1485 1.29964 15.5211C1.6723 15.8938 2.13608 16.1623 2.6448 16.3C4.50724 16.808 12.0031 16.808 12.0031 16.808C12.0031 16.808 19.4989 16.808 21.3612 16.3C21.87 16.1624 22.3338 15.8938 22.7064 15.5211C23.0791 15.1485 23.3477 14.6847 23.4853 14.1759C24.0795 10.8621 24.2626 5.82272 23.47 2.63203Z" fill="#FF0000" />
                                        <path d="M9.60156 12.0042L15.8198 8.40247L9.60156 4.80078V12.0042Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_141_351">
                                            <rect width="24" height="16.875" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>

                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_141_354)">
                                        <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="#0A66C2" />
                                        <path d="M14.4309 17.0066H16.7176C16.8004 17.0066 16.8799 16.9737 16.9385 16.9151C16.9971 16.8566 17.0301 16.7771 17.0301 16.6942L17.0312 11.8628C17.0312 9.33758 16.4871 7.39656 13.5361 7.39656C12.4143 7.35484 11.3564 7.93313 10.7855 8.89875C10.7828 8.90344 10.7785 8.90709 10.7734 8.90914C10.7684 8.91119 10.7628 8.91153 10.7575 8.9101C10.7523 8.90867 10.7476 8.90556 10.7443 8.90124C10.7409 8.89692 10.7391 8.89163 10.7391 8.88617V7.94219C10.7391 7.85931 10.7061 7.77982 10.6475 7.72122C10.5889 7.66261 10.5094 7.62969 10.4266 7.62969H8.25648C8.1736 7.62969 8.09412 7.66261 8.03551 7.72122C7.97691 7.77982 7.94398 7.85931 7.94398 7.94219V16.6937C7.94398 16.7766 7.97691 16.8561 8.03551 16.9147C8.09412 16.9733 8.1736 17.0062 8.25648 17.0062H10.543C10.6259 17.0062 10.7054 16.9733 10.764 16.9147C10.8226 16.8561 10.8555 16.7766 10.8555 16.6937V12.3677C10.8555 11.1445 11.0876 9.95992 12.6041 9.95992C14.099 9.95992 14.1184 11.3596 14.1184 12.447V16.6941C14.1184 16.777 14.1513 16.8565 14.2099 16.9151C14.2685 16.9737 14.348 17.0066 14.4309 17.0066ZM2.96875 4.65844C2.96875 5.58531 3.7318 6.34797 4.65875 6.34797C5.58547 6.34789 6.34805 5.58477 6.34805 4.65805C6.34789 3.73133 5.58523 2.96875 4.65844 2.96875C3.73141 2.96875 2.96875 3.73156 2.96875 4.65844ZM3.51242 17.0066H5.80203C5.88491 17.0066 5.9644 16.9737 6.023 16.9151C6.08161 16.8565 6.11453 16.777 6.11453 16.6941V7.94219C6.11453 7.85931 6.08161 7.77982 6.023 7.72122C5.9644 7.66261 5.88491 7.62969 5.80203 7.62969H3.51242C3.42954 7.62969 3.35006 7.66261 3.29145 7.72122C3.23285 7.77982 3.19992 7.85931 3.19992 7.94219V16.6941C3.19992 16.777 3.23285 16.8565 3.29145 16.9151C3.35006 16.9737 3.42954 17.0066 3.51242 17.0066Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_141_354">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>

                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_141_359)">
                                        <path d="M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47719 0 10C0 14.9913 3.65687 19.1284 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2147 3.90625C13.3088 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.9499 6.5625 11.5625 7.33336 11.5625 8.12422V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3431 19.1284 20 14.9913 20 10Z" fill="#1877F2" />
                                        <path d="M13.8926 12.8906L14.3359 10H11.5625V8.12422C11.5625 7.33328 11.9499 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.95439 19.9595 9.4768 20.0001 10 20C10.5232 20.0001 11.0456 19.9595 11.5625 19.8785V12.8906H13.8926Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_141_359">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>

                            <a href="https://messenger.com" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.942 14.413L10.382 11.753L5.45 14.48L10.856 8.744L13.416 11.404L18.346 8.677L12.942 14.413ZM11.899 2C6.432 2 2 6.144 2 11.257C2 14.165 3.434 16.76 5.678 18.457V22L9.056 20.126C9.956 20.378 10.911 20.514 11.899 20.514C17.367 20.514 21.799 16.369 21.799 11.257C21.799 6.144 17.367 2 11.899 2Z" fill="#55ACEE" />
                                </svg>
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_141_364)">
                                        <path d="M24 2.387C23.1013 2.78519 22.148 3.04652 21.1719 3.16231C22.1887 2.55294 22.9693 1.58797 23.3369 0.438219C22.3704 1.01174 21.3129 1.41584 20.2103 1.63306C19.312 0.676156 18.0324 0.078125 16.6162 0.078125C13.8968 0.078125 11.6921 2.28275 11.6921 5.00187C11.6921 5.38784 11.7357 5.76359 11.8196 6.12406C7.72744 5.91866 4.09931 3.95844 1.67072 0.979437C1.24697 1.70666 1.00416 2.55256 1.00416 3.45481C1.00416 5.16312 1.8735 6.67016 3.19462 7.55319C2.4127 7.52874 1.64797 7.31755 0.964313 6.93725C0.964063 6.95787 0.963969 6.97853 0.964031 6.99922C0.964031 9.38487 2.66128 11.375 4.91372 11.8273C4.18864 12.0245 3.42809 12.0534 2.69016 11.9117C3.31669 13.8679 5.13516 15.2914 7.28972 15.3312C5.60456 16.6518 3.48141 17.439 1.17459 17.439C0.777094 17.439 0.385219 17.4157 0 17.3702C2.17903 18.7673 4.76719 19.5824 7.54781 19.5824C16.6047 19.5824 21.5573 12.0795 21.5573 5.57291C21.5573 5.35934 21.5525 5.147 21.543 4.93587C22.5069 4.23894 23.3389 3.37582 24 2.387Z" fill="#55ACEE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_141_364">
                                            <rect width="24" height="19.5938" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 md:pt-8 pb-6 md:pb-8 gap-4">
                    <p className="text-white font-poppins text-sm font-normal text-center md:text-left">
                        © 2025 UPAM. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
                        <Link to="/terms" className="text-white font-poppins text-sm font-normal hover:underline">
                            Terms of Service
                        </Link>
                        <Link to="/privacy" className="text-white font-poppins text-sm font-normal hover:underline">
                            Privacy Policy
                        </Link>
                        <Link to="/cookies" className="text-white font-poppins text-sm font-normal hover:underline">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;