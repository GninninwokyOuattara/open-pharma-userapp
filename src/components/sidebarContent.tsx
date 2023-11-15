import { FunctionalComponentWithPharmaciesAsProps } from "@/types"
import PharmacyItem from "./pharmacyItem"

const SidebarContent: FunctionalComponentWithPharmaciesAsProps = ({ pharmacies }) => {
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
                        />
                    )
                })
            }

        </div>
    )
}

export default SidebarContent