'use client'
import { AppContext } from "@/context/AppProvider";
import { AppType } from "@/types/apps.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallBtn = ({app}:{app:AppType}) => {
    const {installedApp, setInstalledApp} = useContext(AppContext);
    console.log(installedApp, setInstalledApp);

    const handleInstall = () => {
        setInstalledApp([...installedApp, app])
        toast.success(`${app.title} installed successfully!`)
    };
    return <button onClick={() => handleInstall()} className="btn btn-primary">Install App</button>
};

export default InstallBtn;