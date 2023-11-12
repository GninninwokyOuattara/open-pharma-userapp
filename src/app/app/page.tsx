'use client';

import Bottomsheet from "@/components/bottomsheet";
import { getPharmacies } from "@/queries/getPharmacies";
// import LeafletMap from "@/components/leafletMap";
import dynamic from "next/dynamic";
import { useMemo } from "react";

// const getStaticProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await res.json()
//     return { props: { data } }
// }



export default async function Home() {


    const LeafletMap = useMemo(() => dynamic(
        () => import('@/components/leafletMap'),
        {
            loading: () => <p>Loading...</p>,
            ssr: false
        }
    ), [])

    const initialData = await getPharmacies()

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
