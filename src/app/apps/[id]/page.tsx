import { getAllApps } from '@/lib/apps';
import { AppType } from '@/types/apps.type';
import React from 'react';

interface AppDetailsProps {
    params: {
        id: string;
    }
}

const AppDetails = async({params}: AppDetailsProps) => {
    const {id} = await params
    const allApp = await getAllApps();

    const app = allApp.find((app: AppType) => String(app.id) === String(id));

    console.log(app);

    return (
        <div>
            App details {id}
        </div>
    );
};

export default AppDetails;