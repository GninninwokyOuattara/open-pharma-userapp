"use client";

import { getPharmacies } from "@/queries/getPharmacies";
import { Pharmacy, PharmacyWithDistanceToUser } from "@/types";
import React, { createContext, useCallback, useContext, useEffect, useMemo } from "react";

interface PharmaciesCtx {
    pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[],
    set: (pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[]) => void
    setSearch: (value: string) => void
}

const PharmaciesContext = createContext<PharmaciesCtx>({
    pharmacies: [],
    set: () => {
        // do nothing
    },
    setSearch: () => {
        // do nothing
    }
})

export default PharmaciesContext

const PharmaciesProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [pharmacies, setPharmacies] = React.useState<Pharmacy[] | PharmacyWithDistanceToUser[]>([])
    const [searchString, setSearchString] = React.useState<string>("")

    const set = useCallback((pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[]) => {
        setPharmacies(pharmacies)
    }, [setPharmacies])

    const timeoutId = React.useRef<NodeJS.Timeout | null>(null)

    const setSearch = useCallback((value: string) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
        }
        timeoutId.current = setTimeout(() => {
            console.log("Setting search to ", value)
            setSearchString(value)
        }, 500)
    }, [setSearchString])


    // Filters


    const value = useMemo(() => {
        const outputObject = {
            set,
            setSearch,
            pharmacies
        }

        if (searchString === "") {
            return outputObject
        }
        const filteredPharmacies = pharmacies.filter((pharmacy) => {
            return pharmacy.name.toLowerCase().includes(searchString.toLowerCase())
        })

        return {
            ...outputObject,
            pharmacies: filteredPharmacies
        }
    }, [pharmacies, set, searchString])

    useEffect(() => {
        getPharmacies().then((initialData) => {
            set(initialData)
        }).catch((error) => {
            console.error(error)
        })

    }, [set])

    return (
        <PharmaciesContext.Provider value={value}>
            {children}
        </PharmaciesContext.Provider>
    )
}


export const usePharmacies = () => useContext(PharmaciesContext)


export { PharmaciesProvider };

