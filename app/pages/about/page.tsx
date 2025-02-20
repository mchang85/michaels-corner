import Image from "next/image";
import * as motion from "motion/react-client";

export default function About() {
  return (
    <main className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col sm:flex-row items-center justify-center max-w-7xl p-6 space-y-6 sm:space-x-20 sm:space-y-2">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
          }}
          className="flex-shrink-0 w-64 sm:w-auto"
        >
          <Image
            src="/images/portrait.webp"
            width={500}
            height={800}
            alt="Michael Portrait"
            className="rounded-3xl object-contain border-4 border-blue"
          />
        </motion.div>
        {/* Paragraph */}
        <motion.div className="font-sans text-black leading-relaxed max-w-lg space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
            }}
            className="font-[fafo] text-5xl md:text-6xl text-blue text-center sm:text-left"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 15, 0] }}
              transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
              className="inline-block"
            >
              👋
            </motion.span>
            <span> so.. who am i?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
            }}
          >
            I fell in
            <span className="text-red"> love </span>
            with the world of art, media, and technology at an early age. The
            way these mediums work together to transport us into new worlds and
            settings is something I have always been inspired by. From the charm
            of classic video games to the captivating narratives of feature
            films, nothing beats the feeling of being fully immersed in the
            moment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.5,
            }}
          >
            These passions have led me to explore paths in programming, ui/ux
            design, and more ways to create moments that leave lasting
            impressions. I enjoy working at the bridge between creative and
            technical fields, and am constantly looking for new tools,
            techniques, and ideas to refine my skills and bring my visions to
            life.
          </motion.p>
          {/* Columns */}
          <div className="flex flex-row leading-10 gap-10">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.7,
              }}
            >
              <span className="font-bold">Currently learning</span>:
              <br />
              💻 web development
              <br />
              🎨 ui/ux design
              <br />
              🕹️ game design & development
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.7,
              }}
            >
              <span className="font-bold">Outside of work, I am often</span>:
              <br />
              🎮 playing my favorite games
              <br />
              🎧 making Spotify playlists
              <br />
              📷 practicing photography
            </motion.p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
