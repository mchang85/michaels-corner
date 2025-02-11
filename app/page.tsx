import * as motion from "motion/react-client"
import ChatBubble from "./components/Chatbubble"

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col max-w-4xl w-full px-4 sm:mt-48">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
            className="text-left"
          >
            <div className="text-6xl sm:text-8xl font-bold font-[fafo] text-blue">
              michael chang
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.5 }}
            className="mt-6 text-left max-w-3xl"
          >
            <div className="font-sans text-lg sm:text-xl">
              is currently a
              <span className="mx-3">
                <ChatBubble /> !
              </span>
              <br />
              He is studying ui/ux and front-end dev +
              other ways to create visual experiences for others that leave
              <span className="font-bold"> meaningful and lasting impressions</span>.
            </div>
          </motion.div>

          {/* Columns */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-8 mt-12 justify-left w-full"
          >
            {/* Specialize */}
            <div className="w-full sm:w-96">
              <div className="p-6 border-t-4 border-orange">
                <h2 className="text-orange font-serif italic text-2xl mb-4">specializes in...</h2>
                <ul className="space-y-2 text-black text-lg">
                  <li className="font-sans">○ ux & human-centered design</li>
                  <li className="font-sans">○ research and usability testing</li>
                  <li className="font-sans">○ software and web development</li>
                  <li className="font-sans">○ data and user insight</li>
                </ul>
              </div>
            </div>

            {/* Love */}
            <div className="w-full sm:w-96">
              <div className="p-6 border-t-4 border-red">
                <h2 className="text-red font-serif italic text-2xl mb-4">loves to...</h2>
                <ul className="space-y-2 text-black text-lg">
                  <li className="font-sans">○ design intuitive interfaces</li>
                  <li className="font-sans">○ build interactive experiences</li>
                  <li className="font-sans">○ develop games and apps</li>
                  <li className="font-sans">○ explore digital media mediums</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hidden sm:flex justify-end absolute bottom-4 w-full font-mono px-4">
          <p className="text-sm text-grey">coded with <span className="text-red">&lt;3</span></p>
        </div>
      </div>
    </main>
  );
}