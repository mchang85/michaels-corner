import Project from "@/app/components/Project";
import * as motion from "motion/react-client"

export default function Projects() {
    return (
        <main>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: .3 }}
            >
                {/* Boba */}
                <Project
                    title="Boba Shop Game Project 🧋"
                    timeframe="Self-Led, Started Nov. 2024"
                    type="Game Design/Game Development"
                    imageSrc="/images/projects/boba-idle.gif"
                    link=""
                    description="Currently working as the sole developer on an arcade-style video game 
                    that simulates working in a boba shop, inspired by my part-time work experience."
                />
            </motion.div>
        </main>
    );
}