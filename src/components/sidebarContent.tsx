import { useLeaflet } from "@/app/contexts/leafletContext";
import { FunctionalComponentWithPharmaciesAsProps } from "@/types";
import PharmacyItem from "./pharmacyItem";
import SearchInput from "./searchInput";

const SidebarContent: FunctionalComponentWithPharmaciesAsProps = ({ pharmacies }) => {

    const { leafletMapRef } = useLeaflet();
    return (

        <div className="flex flex-col w-full h-full overflow-hidden">

            <div className="h-32 border-2 border-red-500 p-2 flex flex-col gap-1">
                <SearchInput
                    className="bg-gray-200"
                />

                <div className="h-2 border-2">

                </div>

            </div>

            <div
                className="flex-1 overflow-y-scroll  w-full "
            >
                <div className="h-full overflow-y-scroll">
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
            </div>
        </div>
    )
}

export default SidebarContent