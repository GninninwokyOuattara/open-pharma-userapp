import { Pharmacy } from "@/types"
import Ping from "./ping"

interface Props {
    pharmacy: Pharmacy
}
const PharmacyItem = () => {
    return (
        <div
            className="border-b-2 py-4  flex flex-col gap-2"
        >
            <div className="flex flex-row gap-2 items-center">
                <p className="font-medium flex-auto">Pharmacie sainte odile</p>
                <div className="text-gray-500 font-medium w-20 ">5 mètres</div>
                <Ping />
            </div>

        </div>
    )
}

export default PharmacyItem