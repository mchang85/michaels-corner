import Image from "next/image";
import * as motion from "motion/react-client"

export default function About() {
    return (
        <main className="flex items-center justify-center py-12">
            <div className="flex items-center justify-center max-w-7xl w-full h-full p-6 space-x-20">
                {/* Portrait */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25, delay: .3 }}
                    className="flex-shrink-0">
                    <Image
                        src="/images/portrait.webp"
                        width={500}
                        height={800}
                        alt="Michael Portrait"
                        className="rounded-3xl object-contain"
                    />
                </motion.div>
                {/* Paragraph */}
                <motion.div className="font-sans text-jet leading-relaxed max-w-lg space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
                        className="font-sans text-4xl md:text-6xl text-jet">
                        <motion.span
                            animate={{ rotate: [0, 15, -15, 15, 0] }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                            className="inline-block"
                        >
                            👋
                        </motion.span>
                        <span className="italic"> i&apos;m michael!</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
                    >
                        I fell in love with the creative world at an early age. From the charm of classic video games
                        to the engaging narratives of feature films, I have always been fascinated by how media can transport
                        us into entirely new worlds and experiences. I believe consuming a great piece of media in any
                        form can be invaluable, because little can rival that feeling of being fully immersed in
                        an unforgettable story.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.5 }}
                    >
                        Inspired by this, I have set my goal to create experiences that evoke the same feeling of wonder.
                        My mission is to craft immersive and thoughtful designs that are both purposeful and memorable.
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