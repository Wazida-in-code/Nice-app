'use client'
import { AppContext } from "@/context/AppProvider";
import { useContext } from "react";
import AppCard from "../components/AppCard";
import { AppType } from "@/types/apps.type";


const InstallationPage = () => {
    const {installedApp} = useContext(AppContext)
    return (
        <div className="my-[80px] w-11/12 mx-auto">
            <div className="space-y-4 max-w-[400px] text-center mx-auto">
                <h2 className="font-bold text-4xl">Installed apps</h2>
                <p>
                    Explore all installedApp apps on the market developed by top developers.
                </p>
            </div>

            {installedApp.length > 0 ? (
        <div className="grid grid-cols-1 mt-10 gap-6 sm:grid-cols-2 md:grid-cols-3">

                {installedApp.map((app:AppType, ind:number) => {
                    return <AppCard key={ind} app={app} />
                })}
        </div>

            ) : (
                <p className="py-5 font-bold text-4xl text-slate-500 text-center w-11/12 mx-auto">No Installed App Found!</p>
            )
            }

        </div>
    );
};

export default InstallationPage;