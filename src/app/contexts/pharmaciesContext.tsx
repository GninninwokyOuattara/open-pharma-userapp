"use client";

import { getPharmacies } from "@/queries/getPharmacies";
import { Pharmacy, PharmacyWithDistanceToUser } from "@/types";
import React, { createContext, useCallback, useContext, useEffect, useMemo } from "react";

interface PharmaciesCtx {
    pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[],
    set: (pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[]) => void
    setSearch: (value: string) => void,
    showOpenOnly: boolean,
    setShowOpenOnly: (value: boolean) => void
}

const PharmaciesContext = createContext<PharmaciesCtx>({
    pharmacies: [],
    set: () => {
        // do nothing
    },
    setSearch: () => {
        // do nothing
    },
    showOpenOnly: false,
    setShowOpenOnly: () => {

    }
})

export default PharmaciesContext

const PharmaciesProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [pharmacies, setPharmacies] = React.useState<Pharmacy[] | PharmacyWithDistanceToUser[]>([])
    const [searchString, setSearchString] = React.useState<string>("")
    const [showOpenOnly, setShowOpenOnly] = React.useState<boolean>(false)

    const set = useCallback((pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[]) => {
        setPharmacies(pharmacies)
    }, [setPharmacies])

    const timeoutId = React.useRef<NodeJS.Timeout | null>(null)

    const setSearch = useCallback((value: string) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
        }
        timeoutId.current = setTimeout(() => {
            setSearchString(value)
        }, 500)
    }, [setSearchString])

    const getOpenPharmaciesOnly = (pharmacies: Pharmacy[] | PharmacyWithDistanceToUser[]) => {

        return pharmacies.filter((pharmacy) => {
            return pharmacy.open
        })
    }

    // Filters


    const value = useMemo(() => {
        const outputObject = {
            set,
            setSearch,
            pharmacies,
            showOpenOnly,
            setShowOpenOnly
        }
        let filteredPharmacies: Pharmacy[] | PharmacyWithDistanceToUser[] = [];

        if (showOpenOnly) {
            filteredPharmacies = getOpenPharmaciesOnly(pharmacies)
        } else {
            filteredPharmacies = pharmacies
        }

        if (searchString !== "") {

            filteredPharmacies = filteredPharmacies.filter((pharmacy) => {
                return pharmacy.name.toLowerCase().includes(searchString.toLowerCase())
            })

        }



        return {
            ...outputObject,
            pharmacies: filteredPharmacies
        }
    }, [pharmacies, set, searchString, setSearch, showOpenOnly])

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

