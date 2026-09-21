import Image from "next/image";
import Banner from "./apps/components/Banner";
import TrandingApps from "./apps/components/TrandingApps";

export default function Home() {
  return (
   <div>
     <Banner />
    <TrandingApps />
   </div>
  );
}
