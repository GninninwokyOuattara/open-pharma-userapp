import { useLeaflet } from "@/app/contexts/leafletContext";
import { FunctionalComponentWithPharmaciesAsProps } from "@/types";
import PharmacyItem from "./pharmacyItem";

const SidebarContent: FunctionalComponentWithPharmaciesAsProps = ({ pharmacies }) => {

    const { leafletMapRef } = useLeaflet();
    return (
        <div
            className="overflow-y-scroll h-full w-full"
        >
            {
                pharmacies.map((pharmacy) => {
                    return (
                        <PharmacyItem
                            key={pharmacy.id}
                            pharmacy={pharmacy}
                            onClick={() => {
                                console.log("Flyint to !!")
                                leafletMapRef.current?.flyTo([pharmacy.coordinates.latitude, pharmacy.coordinates.longitude], 15)
                            }}
                        />
                    )
                })
            }

        </div>
    )
}

export default SidebarContent