import React from 'react';
import * as motion from "motion/react-client"

const ChatBubble = () => {
    return (
        <motion.div className="inline-flex items-center bg-[#FFFFFF] rounded-2xl px-4 pt-3 pb-2">
            <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.25
                        }}
                        className="w-1.5 h-1.5 bg-[#BAC2C9] rounded-full"
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ChatBubble;