import Image from "next/image";
import * as motion from "motion/react-client"

export default function About() {
    return (
        <main className="flex items-center justify-center py-12">
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-7xl w-full h-full p-6 space-y-6 sm:space-x-20 sm:space-y-2">
                {/* Portrait */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25, delay: .3 }}
                    className="flex-shrink-0 w-64 sm:w-auto">
                    <Image
                        src="/images/portrait.webp"
                        width={500}
                        height={800}
                        alt="Michael Portrait"
                        className="rounded-3xl object-contain border-4 border-red"
                    />
                </motion.div>
                {/* Paragraph */}
                <motion.div className="font-sans text-brown leading-relaxed max-w-lg space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
                        className="font-[fafo] text-5xl md:text-6xl text-red">
                        <motion.span
                            animate={{ rotate: [0, 15, -15, 15, 0] }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                            className="inline-block"
                        >
                            👋
                        </motion.span>
                        <span> i&apos;m michael!</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
                    >
                        I fell in love with the world of art, media, and technology at an early age.
                        The way these mediums work together seamlessly to transport us into new worlds and settings is something I have always been inspired by.
                        From the charm of classic video games to the captivating narratives of feature films,
                        nothing beats the feeling of being fully immersed in the moment.


                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.5 }}
                    >

                        These passions have led me to explore paths in programming, ui/ux design, and more ways to create moments that leave lasting impressions.
                        I enjoy working at the bridge between creative and techinical fields, and am constantly seeking new tools, techniques, and ideas
                        to refine my skills and bring my visions to life.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.7 }}
                    >
                        Outside of personal work, I am often:
                        <br />
                        🎮 attempting to get masters in TFT
                        <br />
                        <br />
                        🎧 making yet another playlist in Spotify
                        <br />
                        <br />
                        📷 practicing amateur photography
                    </motion.p>
                </motion.div>
            </div>
        </main>
    );
}