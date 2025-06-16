import { AppItems } from "@/data/app";
import { AppCard } from "./components/AppCard";

export default function AppsPage() {
    return (
        <div className="bg-gradient-to-br from-gray-100 to-blue-100 text-gray-800 py-8 px-4 flex flex-col items-center">
            <h1 className="mt-24 mb-4">ウェブアプリ一覧</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {AppItems.map((app) => (
                    <AppCard key={app.title} app={app} />
                ))}
            </div>
      </div>
    );
};