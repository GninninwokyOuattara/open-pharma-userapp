import { useLeaflet } from "@/app/contexts/leafletContext";
import { usePharmacies } from "@/app/contexts/pharmaciesContext";
import { FunctionalComponentWithPharmaciesAsProps } from "@/types";
import PharmacyItem from "./pharmacyItem";
import PharmacyShowModeController from "./pharmacyShowModeController";
import SearchInput from "./searchInput";

const SidebarContent: FunctionalComponentWithPharmaciesAsProps = ({ pharmacies }) => {

    const { leafletMapRef } = useLeaflet();
    const { showOpenOnly, setShowOpenOnly } = usePharmacies()
    return (

        <div className="flex flex-col w-full h-full overflow-hidden">

            <div className="p-2 flex flex-col gap-1">
                <SearchInput
                    className="bg-white border-[2px] shadow-md"
                />

                <PharmacyShowModeController />

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