import * as motion from "motion/react-client"

export default function Home() {
  return (
    <main className="overflow-hidden h-full w-full">
      <div className="flex flex-col mt-24 sm:mt-40 justify-center items-center text-center gap-2 text-neutral-600 relative">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="w-52 sm:w-96 font-sans text-lg leading-6 mt-28">
          is a
          <span className="mx-10">
            ...
          </span>
          who is learning web dev, game dev, ui/ux,
          and other methods of creating experiences that
          make a lasting impression.
        </motion.p>
      </div>
    </main>
  );
}
