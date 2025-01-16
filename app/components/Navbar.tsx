"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client"

const Navbar = () => {
    const pathname = usePathname();

    const activePage = (path: string) => {
        return pathname === path
            ? "text-green-600 font-bold"
            : "text-gray-600 hover:text-green-600"
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full px-4 sm:px-8 py-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Signature */}
                <div className="flex-shrink-0">
                    <Link href="/" aria-label="Home">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    </Link>
                </div>
                {/* Nav links */}
                <div className="flex flex-1 justify-center space-x-8 text-sm font-mono">
                    <Link
                        href="/pages/projects"
                        className={`inline-flex items-center transition-colors duration-150 ${activePage("/pages/projects")}`}
                    >
                        PROJECTS
                    </Link>
                    <Link
                        href="/pages/extras"
                        className={`inline-flex items-center transition-colors duration-150 ${activePage("/pages/extras")}`}
                    >
                        EXTRAS
                    </Link>
                    <Link
                        href="/pages/about"
                        className={`inline-flex items-center transition-colors duration-150 ${activePage("/pages/about")}`}
                    >
                        ABOUT
                    </Link>
                </div>
                {/* Icon links */}
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/mchang17/" target="_blank">
                        <Image
                            src="/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="https://github.com/mchang85" target="_blank">
                        <Image
                            src="/icons/github.svg"
                            alt="Github"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="mailto:ch.michael085@gmail.com" target="_blank">
                        <Image
                            src="/icons/email.svg"
                            alt="Email"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>
        </motion.nav >
    )

};

export default Navbar;