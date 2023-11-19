"use client";

import { getPharmacies } from "@/queries/getPharmacies";
import { Pharmacy, PharmacyWithDistanceToUser } from "@/types";
import React, { createContext, useCallback, useContext, useEffect, useMemo } from "react";

interface PharmaciesCtx {
    pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[],
    set: (pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[]) => void
}

const PharmaciesContext = createContext<PharmaciesCtx>({
    pharmacies: [],
    set: () => {
        // do nothing
    }
})

export default PharmaciesContext

const PharmaciesProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [pharmacies, setPharmacies] = React.useState<Pharmacy[] | PharmacyWithDistanceToUser[]>([])

    const set = useCallback((pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[]) => {
        setPharmacies(pharmacies)
    }, [setPharmacies])


    const value = useMemo(() => {
        return {
            pharmacies,
            set
        }
    }, [pharmacies])

    useEffect(() => {
        getPharmacies().then((initialData) => {
            set(initialData)
        }).catch((error) => {
            console.error(error)
        })

    }, [])

    return (
        <PharmaciesContext.Provider value={value}>
            {children}
        </PharmaciesContext.Provider>
    )
}


export const usePharmacies = () => useContext(PharmaciesContext)


export { PharmaciesProvider };

