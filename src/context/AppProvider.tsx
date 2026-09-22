'use client'
import { AppType } from '@/types/apps.type';
import React, { createContext, ReactNode, useState } from 'react';

interface AppContextType{
    installedApp: AppType[];
    setInstalledApp: React.Dispatch<React.SetStateAction<AppType[]>>;
};

export const AppContext = createContext<AppContextType>({
    installedApp: [],
    setInstalledApp: () => {}
});

const AppProvider = ({ children }: {children: ReactNode}) => {
    const [installedApp, setInstalledApp] = useState([]);

    const sharedStates = {
        installedApp, setInstalledApp
    };

    return <AppContext.Provider value={sharedStates}>
        {children}
    </AppContext.Provider>
};

export default AppProvider;