'use client';

import { useLeaflet } from "@/app/contexts/leafletContext";
import "@/styles/bottomsheet.style.css";
import { Pharmacy } from "@/types";
import { BottomSheet } from "react-spring-bottom-sheet";
import PharmacyItem from "./pharmacyItem";


interface Props {
    pharmacies: Pharmacy[]
}

const Bottomsheet: React.FC<Props> = ({ pharmacies }) => {

    const { leafletMapRef } = useLeaflet();

    return (
        <>
            <BottomSheet
                className="md:hidden"
                blocking={false}
                // onDismiss={() => setOpen(false)}
                defaultSnap={({ maxHeight }) => maxHeight / 2.5}
                snapPoints={({ minHeight, maxHeight }) => [25, maxHeight / 2.5, maxHeight]}
                open>
                <div className="p-2">
                    {
                        pharmacies.map((pharmacy) => {
                            return (
                                <PharmacyItem
                                    key={pharmacy.id}
                                    pharmacy={pharmacy}
                                    onClick={() => {
                                        leafletMapRef.current?.flyTo([pharmacy.coordinates.latitude, pharmacy.coordinates.longitude], 15)
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </BottomSheet>
        </>
    )
}

export default Bottomsheet