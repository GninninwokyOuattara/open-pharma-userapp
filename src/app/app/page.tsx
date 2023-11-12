'use client';

import Bottomsheet from "@/components/bottomsheet";
// import LeafletMap from "@/components/leafletMap";
import dynamic from "next/dynamic";
import { useMemo } from "react";



export default function Home() {

    const LeafletMap = useMemo(() => dynamic(
        () => import('@/components/leafletMap'),
        {
            loading: () => <p>Loading...</p>,
            ssr: false
        }
    ), [])
    return (
        <main
            className="h-screen w-screen"
        >
            <div id="mainContainer"
                className="flex flex-column h-full">
                <aside className="hidden md:flex w-[40%] max-w-[500px] p-2 h-full">Data </aside>
                <div className=" flex-1 h-full md:p-2">
                    <LeafletMap />
                </div>
            </div>
            <Bottomsheet />
        </main>
    )
}
