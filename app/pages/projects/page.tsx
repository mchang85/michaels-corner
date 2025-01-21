import Image from "next/image";

export default function Projects() {
    return (
        <main>
            <div>
                {/* Portrait */}
                <Image
                    src="/images/portrait.webp"
                    width={300}
                    height={500}
                    alt="Michael Portrait"
                    className="rotate-2"
                />
                <div>

                </div>
            </div>
        </main>
    );
}