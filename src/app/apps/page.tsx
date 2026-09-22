import React from 'react';
import AppCard from '../components/AppCard';
import { AppType } from '@/types/apps.type';
import { getAllApps } from '@/lib/apps';


const AppPage = async() => {
    const data = await getAllApps();
    console.log(data);
    return (
        <div className="my-[80px] w-11/12 mx-auto">
            <div className="space-y-4 max-w-[400px] text-center mx-auto">
                <h2 className="font-bold text-4xl">Trending apps</h2>
                <p>
                    Explore all tranding apps on the market developed by top developers.
                </p>
            </div>

        <div className="grid grid-cols-1 mt-10 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {
                data.map((app:AppType, ind:number) => {
                    return <AppCard key={ind} app={app} />
                })
            }
        </div>

        </div>
    );
};

export default AppPage;