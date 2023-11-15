'use client';

import { usePharmacies } from '@/app/contexts/pharmaciesContext';
import { getPharmaciesWithDistanceToUser, sortPharmaciesByDistanceAsc } from '@/app/utils/pharmacies-processors';
import useUserLocation from '@/hooks/useUserLocation';
import { Pharmacy, PharmacyWithDistanceToUser } from '@/types';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import Bottomsheet from './bottomsheet';
import SidebarContent from './sidebarContent';

interface Props {
    pharmacies: Pharmacy[]
}

const AppPageContainer: React.FC<Props> = ({ pharmacies: pharmaciesDatas }) => {

    const { set, pharmacies } = usePharmacies()
    set(pharmaciesDatas)

    const LeafletMap = useMemo(() => dynamic(
        () => import('@/components/leafletMap'),
        {
            loading: () => <p>Loading...</p>,
            ssr: false
        }
    ), [])

    const { location } = useUserLocation()

    const processedPharmacies = useMemo(
        (): Pharmacy[] | PharmacyWithDistanceToUser[] => {
            if (location) {
                let processedDatas = getPharmaciesWithDistanceToUser(pharmacies, location)

                processedDatas = sortPharmaciesByDistanceAsc(processedDatas)
                return processedDatas
            } else {
                return pharmacies
            }
        }, [location, pharmacies])

    return (
        <>
            <div id="mainContainer"
                className="flex flex-column h-full">
                <aside className="hidden md:flex w-[40%] max-w-[500px] p-2 h-full">
                    <SidebarContent pharmacies={processedPharmacies} />
                </aside>
                <div className=" flex-1 h-full md:p-2">
                    <LeafletMap pharmacies={pharmacies} />
                </div>
            </div>
            <Bottomsheet
                pharmacies={processedPharmacies} />
        </>
    )
}

export default AppPageContainer