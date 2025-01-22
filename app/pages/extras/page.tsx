"use client"
import { useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client"

export default function Extras() {
    const [activeTab, setActiveTab] = useState("photo");

    return (
        <main className="min-h-screen text-jet">
            <div className="container mx-auto p-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25, delay: .3 }}
                    className="text-3xl font-bold font-sans text-center mb-8">
                    <span className="italic">my view of the world </span>
                    🌎
                </motion.h2>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25, delay: .5 }}
                    className="flex justify-center mb-6 space-x-6">
                    <button
                        onClick={() => setActiveTab("photo")}
                        className={`font-sans font-medium px-4 py-2 rounded-full transition-colors duration-300 
            ${activeTab === "photo" ? "bg-blue text-white hover:bg-darkblue" : "text-jet hover:bg-lightblue"}`}
                    >
                        photography 📷
                    </button>
                    <button
                        onClick={() => setActiveTab("music")}
                        className={`text-lg font-sans font-medium px-4 py-2 rounded-full transition-colors duration-300 
            ${activeTab === "music" ? "bg-blue text-white hover:bg-darkblue" : "text-jet hover:bg-lightblue"}`}
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
                        <h2 className="font-sans text-2xl mb-4">fujifilm x-t30 II w/ 35mm f/2</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                            <div className="photo-card">
                                <Image
                                    src="/images/photography/dana-point.webp"
                                    alt="Photo of Dana Point Harbor"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                            <div className="photo-card">
                                <Image
                                    src="/images/photography/sf.webp"
                                    alt="Photo of San Francisco Sky"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                            <div className="photo-card">
                                <Image
                                    src="/images/photography/joshua-tree.webp"
                                    alt="Photo of Joshua Tree Rocks"
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
                        <h2 className="font-sans text-2xl mb-4">my current rotation</h2>
                        <div className="flex space-x-6 overflow-x-auto p-4">
                            <div className="music-card">
                                <Image
                                    src="/images/music/fred-again.webp"
                                    alt="fred again. - Actual Life 3"
                                    width={150}
                                    height={150}
                                    className="rounded-lg"
                                />
                                <p className="text-left font-sans mt-2 text-sm">delilah (pull me out of this)</p>
                                <p className="text-left font-sans text-sm text-gray-500">fred again.</p>
                            </div>
                        </div>
                    </motion.section>
                )}
            </div>
        </main>
    );
}
