import * as motion from "motion/react-client"
import ChatBubble from "./components/Chatbubble"

export default function Home() {
  return (
    <main className="overflow-hidden h-full w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center mt-32 sm:mt-32 w-full">
        <div className="flex flex-col sm:flex-row w-full max-w-7xl gap-8 items-center sm:items-start">
          {/* Name/Intro */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
            className="flex flex-col flex-1 text-center sm:text-right"
          >
            <div className="text-6xl sm:text-8xl font-bold font-[fafo] text-blue">
              MICHAEL
              <br />
              CHANG
            </div>
            <div className="font-sans text-lg sm:text-xl sm:leading-10">
              is currently a
              <span className="mx-3">
                <ChatBubble />
              </span>
              <p>
                who strives to use the things I
                <br />
                <span className="text-orange font-serif italic text-5xl sm:text-6xl py-4">know</span>
                <br />
                to make the things I
                <br />
                <span className="text-red font-serif italic text-5xl sm:text-6xl">love</span>
              </p>
            </div>
          </motion.div>

          {/* Stacked Columns */}
          <div className="flex flex-col gap-8 sm:gap-14 flex-1 sm:mt-32 items-center sm:items-start">
            {/* Know */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.5 }}
              className="w-full sm:w-fit p-6 border-4 border-orange rounded-lg"
            >
              <ul className="space-y-2 text-black text-lg text-center sm:text-left">
                <li className="font-sans">○ ux & human-centered design</li>
                <li className="font-sans">○ research and usability testing</li>
                <li className="font-sans">○ software and web development</li>
                <li className="font-sans">○ data and user insight</li>
              </ul>
            </motion.div>

            {/* Love */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.7 }}
              className="w-full sm:w-fit p-6 border-4 border-red rounded-lg"
            >
              <ul className="space-y-2 text-black text-lg text-center sm:text-left">
                <li className="font-sans">○ designing intuitive interfaces</li>
                <li className="font-sans">○ building interactive experiences</li>
                <li className="font-sans">○ developing games and apps</li>
                <li className="font-sans">○ exploring digital media</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-end w-full absolute bottom-4 font-mono px-3">
        <p className="text-sm text-grey">coded with <span className="text-red">&lt;3</span></p>
      </div>
    </main>
  );
}
