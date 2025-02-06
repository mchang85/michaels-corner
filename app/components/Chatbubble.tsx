import React from 'react';
import * as motion from "motion/react-client"

const ChatBubble = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10, delay: 1.5 }}
            className="inline-flex items-center bg-grey rounded-2xl px-4 pt-4 pb-3">
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
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ChatBubble;
