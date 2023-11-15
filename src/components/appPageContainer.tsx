'use client';

import { Pharmacy } from '@/types';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import Bottomsheet from './bottomsheet';
import SidebarContent from './sidebarContent';

interface Props {
    pharmacies: Pharmacy[]
}

const AppPageContainer: React.FC<Props> = ({ pharmacies }) => {

    const LeafletMap = useMemo(() => dynamic(
        () => import('@/components/leafletMap'),
        {
            loading: () => <p>Loading...</p>,
            ssr: false
        }
    ), [])


    return (
        <>
            <div id="mainContainer"
                className="flex flex-column h-full">
                <aside className="hidden md:flex w-[40%] max-w-[500px] p-2 h-full">
                    <SidebarContent pharmacies={pharmacies} />
                </aside>
                <div className=" flex-1 h-full md:p-2">
                    <LeafletMap pharmacies={pharmacies} />
                </div>
            </div>
            <Bottomsheet
                pharmacies={pharmacies} />
        </>
    )
}

export default AppPageContainer