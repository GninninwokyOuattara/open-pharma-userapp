'use client';

import Bottomsheet from "@/components/bottomsheet";


export default function Home() {
    return (
        <main
            className="h-screen w-screen border-2 border-red-500"
        >
            <div id="mainContainer"
                className="flex flex-column gap-2 h-full">
                <aside className="hidden md:flex w-[40%] max-w-[500px] p-2 border-2 border-red-500 h-full">Data </aside>
                <div>Map</div>
            </div>

            <Bottomsheet />
        </main>
    )
}
