import * as motion from "motion/react-client"
import ChatBubble from "./components/Chatbubble"

export default function Home() {
  return (
    <main className="overflow-hidden h-full w-full">
      <div className="flex flex-col mt-24 sm:mt-40 justify-center items-center text-center text-jet relative">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: .3 }}
          className="text-8xl font-bold font-sans text-blue">
          Michael Chang
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: .5 }}
          className="w-52 sm:w-96 font-sans text-xl leading-6 mt-5"
        >
          is a
          <span className="mx-3">
            <ChatBubble />
          </span>
          <p>
            currently learning web dev, game dev, ui/ux, and other methods of
            creating experiences that leave <span className="font-bold">meaningful impressions</span>.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-end w-full absolute bottom-4 text-jet font-mono">
        <p className="text-sm mr-4">coded with <span className="text-pink">&lt;3</span></p>
      </div>
    </main>
  );
}
