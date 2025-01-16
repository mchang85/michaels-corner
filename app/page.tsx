import * as motion from "motion/react-client"
import ChatBubble from "./components/chatbubble"

export default function Home() {
  return (
    <main className="overflow-hidden h-full w-full">
      <div className="flex flex-col mt-24 sm:mt-40 justify-center items-center text-center text-gray-500 relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="w-52 sm:w-96 font-sans text-xl leading-6 mt-28"
        >
          is a
          <span className="mx-3">
            <ChatBubble />
          </span>
          <p>
            currently learning web dev, game dev, ui/ux, and other methods of
            creating experiences that leave meaningful impressions.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-end w-full absolute bottom-4 text-gray-500 font-mono">
        <p className="text-sm mr-4">coded with <span className="text-red-500">&lt;3</span></p>
      </div>
    </main>
  );
}
