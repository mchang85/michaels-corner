interface ProjectData {
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
}: ProjectData) => {
    return (
        <div className="w-full max-w-3xl mx-auto mb-20 px-4 sm:px-0">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                {/* Project Card */}
                <div className="bg-black bg-opacity-5 rounded-lg 
                            hover:scale-[1.02] transition-all duration-300 ease-out 
                            shadow-sm hover:shadow-lg overflow-hidden">
                    {/* Image */}
                    <div
                        className="w-full h-44 sm:h-96 bg-cover bg-center rounded-t-lg"
                        style={{ backgroundImage: `url(${imageSrc})` }}
                        aria-label={title}
                        role="img"
                    />
                    {/* Label */}
                    <div className="p-6">
                        <div className="bg-white py-3 px-4 rounded-lg flex flex-col items-center gap-1 mb-4">
                            <h3 className="text-xl sm:text-4xl font-[fafo] font-bold text-brown">{title}</h3>
                            <span className="text-brown font-mono text-xs sm:text-md">
                                {timeframe}
                            </span>
                            <span className="text-red font-mono text-xs sm:text-sm">
                                {type}
                            </span>
                        </div>
                        {/* Description */}
                        <p className="text-brown text-sm sm:text-lg leading-relaxed font-sans">
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Project;