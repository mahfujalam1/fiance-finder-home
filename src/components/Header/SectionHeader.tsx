export const SectionHeader = ({
    title,
    description,
    color, // Default purple color
    borderWidth
}: any) => {
    return (
        <div className="text-center max-w-3xl mx-auto px-4 py-8">
            <h2
                className={`${color} text-3xl md:text-4xl font-bold mb-4`}
            >
                {title}
            </h2>
            <div className={`${borderWidth} h-0.5 bg-primary mx-auto my-2`} />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
};