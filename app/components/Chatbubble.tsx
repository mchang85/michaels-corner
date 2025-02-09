import React from 'react';
import * as motion from "motion/react-client"

const ChatBubble = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 15, delay: 1 }}
            className="inline-flex items-center bg-blue bg-opacity-50 rounded-2xl px-4 pt-4 pb-2">
            <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [-1, -4, -1] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.25
                        }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ChatBubble;
