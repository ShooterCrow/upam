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
                                <Link to="/contact-us" className="text-white font-lato text-sm font-normal hover:underline">
                                    Contact us
                                </Link>
                                <Link to="/leadership" className="text-white font-lato text-sm font-normal hover:underline">
                                    Executive
                                </Link>
                                <Link to="/leadership" className="text-white font-lato text-sm font-normal hover:underline">
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
                                <Link to="/login" className="text-white font-lato text-sm font-normal hover:underline">
                                    Account
                                </Link>
                                <Link to="/contact-us" className="text-white font-lato text-sm font-normal hover:underline">
                                    Newsletters
                                </Link>
                                <Link to="/get-involved" className="text-white font-lato text-sm font-normal hover:underline">
                                    Projects
                                </Link>
                                <Link to="/about" className="text-white font-lato text-sm font-normal hover:underline">
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
                                    to="/about"
                                    className="flex-1 flex justify-center items-center px-6 py-3 bg-[#EB010C] text-white font-poppins text-base font-medium hover:bg-[#d00109] transition-colors"
                                >
                                    Learn more
                                </Link>
                                <Link
                                    to="/register"
                                    className="flex-1 flex justify-center items-center px-6 py-3 border border-white text-white font-poppins text-base font-medium hover:bg-white hover:text-black transition-colors"
                                >
                                    Join now
                                </Link>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-[52px]">
                            <a href="https://www.tiktok.com/@upam56" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6667 0H8.33333V13.3333C8.33333 14.2538 7.58714 15 6.66667 15C5.74619 15 5 14.2538 5 13.3333C5 12.4129 5.74619 11.6667 6.66667 11.6667V8.33333C3.916 8.33333 1.66667 10.5827 1.66667 13.3333C1.66667 16.084 3.916 18.3333 6.66667 18.3333C9.41733 18.3333 11.6667 16.084 11.6667 13.3333V5C13.5047 6.324 15.7533 7.08333 18.3333 7.08333V3.75C16.0333 3.75 13.9167 2.75 12.5 1.16667C12.1667 0.75 11.9167 0.333333 11.6667 0Z" fill="white" />
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/company/upamacademy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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

                            <a href="https://www.facebook.com/unitedpam" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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

                            <a href="https://www.instagram.com/unitedpam" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C7.283 0 6.941 0.012 5.876 0.06C4.812 0.109 4.086 0.278 3.447 0.526C2.787 0.781 2.227 1.127 1.669 1.685C1.111 2.243 0.765 2.803 0.51 3.463C0.262 4.102 0.093 4.828 0.044 5.892C-0.005 6.957 -0.017 7.299 -0.017 10C-0.017 12.701 -0.005 13.043 0.044 14.108C0.093 15.172 0.262 15.898 0.51 16.537C0.765 17.197 1.111 17.757 1.669 18.315C2.227 18.873 2.787 19.219 3.447 19.474C4.086 19.722 4.812 19.891 5.876 19.94C6.941 19.988 7.283 20 10 20C12.717 20 13.059 19.988 14.124 19.94C15.188 19.891 15.914 19.722 16.553 19.474C17.213 19.219 17.773 18.873 18.331 18.315C18.889 17.757 19.235 17.197 19.49 16.537C19.738 15.898 19.907 15.172 19.956 14.108C20.005 13.043 20.017 12.701 20.017 10C20.017 7.299 20.005 6.957 19.956 5.892C19.907 4.828 19.738 4.102 19.49 3.463C19.235 2.803 18.889 2.243 18.331 1.685C17.773 1.127 17.213 0.781 16.553 0.526C15.914 0.278 15.188 0.109 14.124 0.06C13.059 0.012 12.717 0 10 0ZM10 1.802C12.671 1.802 12.987 1.812 14.042 1.86C15.017 1.905 15.547 2.067 15.9 2.204C16.367 2.385 16.7 2.602 17.051 2.953C17.402 3.304 17.619 3.636 17.8 4.104C17.937 4.457 18.099 4.987 18.144 5.962C18.192 7.017 18.202 7.333 18.202 10.004C18.202 12.675 18.192 12.991 18.144 14.046C18.099 15.021 17.937 15.551 17.8 15.904C17.619 16.372 17.402 16.705 17.051 17.056C16.7 17.407 16.367 17.624 15.9 17.805C15.547 17.942 15.017 18.104 14.042 18.149C12.987 18.197 12.671 18.207 10 18.207C7.329 18.207 7.013 18.197 5.958 18.149C4.983 18.104 4.453 17.942 4.1 17.805C3.633 17.624 3.3 17.407 2.949 17.056C2.598 16.705 2.381 16.372 2.2 15.904C2.063 15.551 1.901 15.021 1.856 14.046C1.808 12.991 1.798 12.675 1.798 10.004C1.798 7.333 1.808 7.017 1.856 5.962C1.901 4.987 2.063 4.457 2.2 4.104C2.381 3.636 2.598 3.304 2.949 2.953C3.3 2.602 3.633 2.385 4.1 2.204C4.453 2.067 4.983 1.905 5.958 1.86C7.013 1.812 7.329 1.802 10 1.802ZM10 4.865C7.164 4.865 4.865 7.164 4.865 10C4.865 12.836 7.164 15.135 10 15.135C12.836 15.135 15.135 12.836 15.135 10C15.135 7.164 12.836 4.865 10 4.865ZM10 13.333C8.159 13.333 6.666 11.84 6.666 10C6.666 8.16 8.159 6.667 10 6.667C11.841 6.667 13.334 8.16 13.334 10C13.334 11.84 11.841 13.333 10 13.333ZM15.333 3.467C14.67 3.467 14.133 4.004 14.133 4.667C14.133 5.33 14.67 5.867 15.333 5.867C15.996 5.867 16.533 5.33 16.533 4.667C16.533 4.004 15.996 3.467 15.333 3.467Z" fill="#E4405F" />
                                </svg>
                            </a>

                            <a href="https://x.com/UPAM_Official" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.897 8.527L19.347 0H17.58L11.112 7.324L5.947 0H0L7.812 11.077L0 20H1.767L8.597 12.28L14.053 20H20L11.897 8.527ZM9.493 11.258L8.7 10.155L2.403 1.328H5.117L10.198 8.448L10.99 9.551L17.582 18.788H14.868L9.493 11.258Z" fill="white" />
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