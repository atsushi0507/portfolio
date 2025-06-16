import { AppData } from "@/types/app";

type Props = {
    app: AppData;
};

export const AppCard = ({app}: Props) => {
    return (
        <a
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden"
        >
            <img
                src={app.mainImage}
                alt={app.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{app.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{app.description}</p>
                {app.techStack && (
                    <ul className="flex flex-wrap gap-2 mt-3 text-xs text-gray-500">
                        {app.techStack.map((tech) => (
                            <li
                                key={tech}
                                className="px-2 py-1 bg-gray-100 rounded-full border"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </a>
    );
}