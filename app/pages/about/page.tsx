import Image from "next/image";
import * as motion from "motion/react-client"

export default function About() {
    return (
        <main className="h-screen flex items-center justify-center">
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
                        className="rounded-3xl -rotate-2 object-contain"
                    />
                </motion.div>
                {/* Paragraph */}
                <div className="flex flex-col items-center md:items-start md:ml-8 space-y-4 md:text-left text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: .3 }}
                        className="font-sans italic text-4xl md:text-6xl text-blue">
                        About me...
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: .3 }}
                        className="font-sans text-jet leading-relaxed max-w-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur tristique gravida risus eget ornare. Aenean sit amet laoreet augue,
                        eget porta ligula. Duis sit amet finibus turpis. Proin eu turpis quam. Nulla
                        molestie imperdiet risus nec interdum. Proin rhoncus efficitur est at laoreet.
                        Pellentesque euismod enim arcu. Maecenas lectus lacus, interdum at odio vitae,
                        malesuada aliquam tortor. Ut commodo dolor id quam facilisis laoreet. Proin et
                        aliquam augue, a viverra risus.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur tristique gravida risus eget ornare. Aenean sit amet laoreet augue,
                        eget porta ligula. Duis sit amet finibus turpis. Proin eu turpis quam. Nulla
                        molestie imperdiet risus nec interdum. Proin rhoncus efficitur est at laoreet.
                        Pellentesque euismod enim arcu. Maecenas lectus lacus, interdum at odio vitae,
                        malesuada aliquam tortor. Ut commodo dolor id quam facilisis laoreet. Proin et
                        aliquam augue, a viverra risus.
                    </motion.p>
                </div>
            </div>
        </main>
    );
}