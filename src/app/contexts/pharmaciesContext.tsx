import { Pharmacy, PharmacyWithDistanceToUser } from "@/types"
import React, { createContext, useCallback, useContext, useMemo } from "react"

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

    return (
        <PharmaciesContext.Provider value={value}>
            {children}
        </PharmaciesContext.Provider>
    )
}


const usePharmacies = () => useContext(PharmaciesContext)


export { PharmaciesProvider }
