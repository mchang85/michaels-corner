"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client"
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname();
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    const activePage = (path: string) => {
        return pathname === path
            ? "text-blue font-bold -translate-y-0.5"
            : "text-black"
    };

    const LinkedInIcon = () => (
        <svg
            className="hover:fill-blue hover:scale-110 transition-all duration-150"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#403d39"
            viewBox="0 0 256 256">
            <path d="M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"></path>
        </svg>
    );

    const GithubIcon = () => (
        <svg
            className="hover:fill-blue hover:scale-110 transition-all duration-150"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#403d39"
            viewBox="0 0 256 256">
            <path d="M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"></path>
        </svg>
    );

    const EmailIcon = () => (
        <svg
            className="hover:fill-blue hover:scale-110 transition-all duration-150"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#403d39"
            viewBox="0 0 256 256">
            <path d="M227.33,91l-96-64a6,6,0,0,0-6.66,0l-96,64A6,6,0,0,0,26,96V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V96A6,6,0,0,0,227.33,91ZM100.18,152,38,195.9V107.65Zm12.27,6h31.1l62.29,44H50.16Zm43.37-6L218,107.65V195.9ZM128,39.21l85.43,57L143.53,146H112.47L42.57,96.17Z"></path>
        </svg>
    );



    return (
        <motion.nav
            initial={isFirstRender ? { opacity: 0, y: -100 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: .1 }}
            className="w-full px-4 sm:px-8 py-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" aria-label="Home">
                        <Image
                            src="/images/logo.webp"
                            alt="Logo"
                            width={75}
                            height={75}
                            quality={100}
                        />

                    </Link>
                </div>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6 fill-blue"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        ) : (
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        )}
                    </svg>
                </button>
                {/* Nav links - Desktop */}
                <div className="hidden md:flex flex-1 justify-center space-x-8 text-base font-mono">
                    <Link
                        href="/pages/projects"
                        className={`inline-flex items-center transition-all duration-150 hover:text-blue ${activePage("/pages/projects")}`}
                    >
                        PROJECTS
                    </Link>
                    <Link
                        href="/pages/extras"
                        className={`inline-flex items-center transition-all duration-150 hover:text-blue ${activePage("/pages/extras")}`}
                    >
                        EXTRAS
                    </Link>
                    <Link
                        href="/pages/about"
                        className={`inline-flex items-center transition-all duration-150 hover:text-blue ${activePage("/pages/about")}`}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/1AxLbhBlEe7NUrERbya9bGG5koabBqhC5/view?usp=sharing"
                        target="_blank"
                        className={`inline-flex items-center transition-all duration-150 hover:text-blue text-black}`}
                    >
                        RESUME
                    </Link>
                </div>
                {/* Nav links - Mobile */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isMenuOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-20 left-0 right-0 bg-white flex-col items-center py-2 shadow-md space-y-3`}>
                    <Link
                        href="/pages/projects"
                        className={`font-mono ${activePage("/pages/projects")}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        PROJECTS
                    </Link>
                    <Link
                        href="/pages/extras"
                        className={`font-mono ${activePage("/pages/extras")}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        EXTRAS
                    </Link>
                    <Link
                        href="/pages/about"
                        className={`font-mono ${activePage("/pages/about")}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="https://drive.google.com/file/d/1AxLbhBlEe7NUrERbya9bGG5koabBqhC5/view?usp=sharing"
                        className="font-mono text-black"
                        target="_blank"
                    >
                        RESUME
                    </Link>
                    {/* Icon links - Mobile */}
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/mchang17/" target="_blank">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/mchang85" target="_blank">
                            <GithubIcon />
                        </a>
                        <a href="mailto:ch.michael085@gmail.com" target="_blank">
                            <EmailIcon />
                        </a>
                    </div>
                </motion.div>
                {/* Icon links - Desktop */}
                <div className="hidden md:flex space-x-4">
                    <a href="https://www.linkedin.com/in/mchang17/" target="_blank">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/mchang85" target="_blank">
                        <GithubIcon />
                    </a>
                    <a href="mailto:ch.michael085@gmail.com" target="_blank">
                        <EmailIcon />
                    </a>
                </div>
            </div>
        </motion.nav >
    )

};

export default Navbar;