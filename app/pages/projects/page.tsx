import Project from "../../components/Project";
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
                    link="https://snowy-leopon-ad7.notion.site/Boba-Shop-Game-Project-183363d62eb380979e70d5ff5b7b62d2?pvs=4"
                    description="Developing an arcade-style interactive game to increase employee engagement and streamline training process. 
                    Inspired by my part-time work experience."
                />
            </motion.div>
        </main>
    );
}