import { Pharmacy, PharmacyWithDistanceToUser } from "@/types"
import Ping from "./ping"

interface Props {
    pharmacy: Pharmacy | PharmacyWithDistanceToUser
}
const PharmacyItem: React.FC<Props> = ({ pharmacy }) => {
    return (
        <div
            className="border-b-2 py-4  flex flex-col gap-2"
        >
            <div className="flex flex-row gap-2 items-center">
                <p className="font-medium flex-auto">{pharmacy.name}</p>
                <div className="flex flex-row items-center gap-2">
                    {
                        'distanceFormatted' in pharmacy && <div className="text-gray-500 font-medium w-24 text-right">{pharmacy.distanceFormatted}</div>
                    }

                    {pharmacy.open ? <Ping /> : <div className="w-1 h-2"></div>}

                </div>
            </div>

        </div>
    )
}

export default PharmacyItem