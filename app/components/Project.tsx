interface ProjectProps {
    title: string;
    timeframe: string;
    type: string;
    imageSrc: string;
    link: string;
    description: string;
}

const Project = ({
    title,
    timeframe,
    type,
    imageSrc,
    link,
    description,
}: ProjectProps) => {
    return (
        <div className="w-full max-w-3xl mx-auto mb-20">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                {/* Project Card */}
                <div className="bg-jet bg-opacity-5 backdrop-blur-sm rounded-lg 
                            hover:scale-[1.01] transition-all duration-300 ease-out 
                            shadow-sm hover:shadow-md overflow-hidden">
                    {/* Image */}
                    <div
                        className="w-full h-96 bg-cover bg-center rounded-t-lg"
                        style={{ backgroundImage: `url(${imageSrc})` }}
                        aria-label={title}
                        role="img"
                    />
                    {/* Label */}
                    <div className="p-6">
                        <div className="bg-white py-3 px-4 rounded-lg flex flex-col items-center gap-1 mb-4">
                            <h3 className="text-4xl font-sans font-bold">{title}</h3>
                            <span className="text-jet font-mono text-md">
                                {timeframe}
                            </span>
                            <span className="text-blue font-mono text-sm">
                                {type}
                            </span>
                        </div>
                        {/* Description */}
                        <p className="text-jet text-lg leading-relaxed font-sans">
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Project;