"use client"
import { useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client"

export default function Extras() {
    const [activeTab, setActiveTab] = useState("photo");

    return (
        <main className="min-h-screen text-black">
            <div className="container mx-auto p-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25, delay: .3 }}
                    className="text-4xl sm:text-5xl font-bold font-sans text-center mb-8">
                    <span className="text-blue font-[fafo]">my view of the </span>
                    🌎
                </motion.h2>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25, delay: .5 }}
                    className="flex justify-center mb-6 space-x-6 px-5">
                    <button
                        onClick={() => setActiveTab("photo")}
                        className={`font-sans font-medium px-4 py-2 rounded-full transition-colors duration-150 
            ${activeTab === "photo" ? "bg-blue text-white" : "text-black hover:bg-grey hover:text-white"}`}
                    >
                        photography 📷
                    </button>
                    <button
                        onClick={() => setActiveTab("music")}
                        className={`text-lg font-sans font-medium px-4 py-2 rounded-full transition-colors duration-150 
            ${activeTab === "music" ? "bg-blue text-white" : "text-black hover:bg-grey hover:text-white"}`}
                    >
                        music 🎧
                    </button>
                </motion.div>



                {/* Photos */}
                {activeTab === "photo" && (
                    <motion.section
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: .7 }}
                        className="mb-12">
                        <h2 className="font-mono text-lg sm:text-xl mb-2 p-3">- fujifilm x-t30 II w/ 35mm f/2</h2>
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
                            <div className="mb-4">
                                <Image
                                    src="/images/photography/dana-point.webp"
                                    alt="Photo of Dana Point Harbor"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                            <div className="mb-4">
                                <Image
                                    src="/images/photography/sf.webp"
                                    alt="Photo of San Francisco Sky"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                            <div className="mb-4">
                                <Image
                                    src="/images/photography/joshua-tree.webp"
                                    alt="Photo of Joshua Tree Rocks"
                                    width={500}
                                    height={800}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                            <div className="mb-4">
                                <Image
                                    src="/images/photography/dana-point3.webp"
                                    alt="Photo of Dana Point Sunset"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                            <div className="mb-4">
                                <Image
                                    src="/images/photography/dana-point2.webp"
                                    alt="Photo of Dana Point Neighborhood"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                            <div className="mb-4">
                                <Image
                                    src="/images/photography/joshua-tree2.webp"
                                    alt="Photo of Joshua Tree"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                            <div className="mb-4">
                                <Image
                                    src="/images/photography/corona-del-mar.webp"
                                    alt="Photo of Corona Del Mar Beach"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* Music */}
                {activeTab === "music" && (
                    <motion.section
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: .7 }}
                        className="mb-12">
                        <h2 className="font-mono text-lg sm:text-xl mb-4 p-3">current rotation</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 p-4">
                            <div>
                                <Image
                                    src="/images/music/fred-again.webp"
                                    alt="fred again.. - Actual Life 3"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <p className="text-left font-sans mt-2 text-sm">delilah (pull me out of this)</p>
                                <p className="text-left font-sans text-sm text-black">fred again..</p>
                            </div>
                            <div>
                                <Image
                                    src="/images/music/hippocampus.webp"
                                    alt="Hippo Campus - Landmark"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <p className="text-left font-sans mt-2 text-sm">way it goes</p>
                                <p className="text-left font-sans text-sm text-black">hippo campus</p>
                            </div>
                            <div>
                                <Image
                                    src="/images/music/kendrick.webp"
                                    alt="Kendrick Lamar - Luther (with SZA)"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <p className="text-left font-sans mt-2 text-sm">luther (with sza)</p>
                                <p className="text-left font-sans text-sm text-black">kendrick lamar</p>
                            </div>
                            <div>
                                <Image
                                    src="/images/music/porter1.webp"
                                    alt="Porter Robinson - Russian Roulette"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <p className="text-left font-sans mt-2 text-sm">russian roulette</p>
                                <p className="text-left font-sans text-sm text-black">porter robinson</p>
                            </div>
                            <div>
                                <Image
                                    src="/images/music/porter2.webp"
                                    alt="Porter Robinson - Something Comforting"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <p className="text-left font-sans mt-2 text-sm">something comforting</p>
                                <p className="text-left font-sans text-sm text-black">porter robinson</p>
                            </div>
                            <div>
                                <Image
                                    src="/images/music/the1975-1.webp"
                                    alt="The 1975 - Robbers"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <p className="text-left font-sans mt-2 text-sm">robbers</p>
                                <p className="text-left font-sans text-sm text-black">the 1975</p>
                            </div>
                            <div>
                                <Image
                                    src="/images/music/the1975-2.webp"
                                    alt="The 1975 - It's Not Living (If It's Not With You)"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <p className="text-left font-sans mt-2 text-sm">it&apos;s not living (if it&apos;s not with you)</p>
                                <p className="text-left font-sans text-sm text-black">the 1975</p>
                            </div>
                            <div>
                                <Image
                                    src="/images/music/tomoko.webp"
                                    alt="Tomoko Aran - Midnight Pretenders"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <p className="text-left font-sans mt-2 text-sm"> midnight pretenders</p>
                                <p className="text-left font-sans text-sm text-black">tomoko aran</p>
                            </div>
                        </div>
                    </motion.section>
                )}
            </div>
        </main>
    );
}
