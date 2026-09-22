import { AppType } from "@/types/apps.type";
import AppCard from "./AppCard";
import { getAllApps } from "@/lib/apps";


const TrandingApps = async() => {
    const data = await getAllApps()
    console.log(data);
    return (
        <div className="my-[80px] w-11/12 mx-auto">
            <div className="space-y-4 max-w-[400px] text-center mx-auto">
                <h2 className="font-bold text-4xl">All apps</h2>
                <p>
                    Explore all apps on the market developed by top developers.
                </p>
            </div>

        <div className="grid grid-cols-1 mt-10 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {
                data.slice(0, 5).map((app:AppType, ind:number) => {
                    return <AppCard key={ind} app={app} />
                })
            }
        </div>

        </div>
    );
};

export default TrandingApps;