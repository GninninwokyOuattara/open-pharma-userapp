import "@/styles/bottomsheet.style.css"
import { BottomSheet } from "react-spring-bottom-sheet"
import PharmacyItem from "./pharmacyItem"


const Bottomsheet = () => {
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
                    <PharmacyItem />
                    <PharmacyItem />
                    <PharmacyItem />
                    <PharmacyItem />
                    <PharmacyItem />
                    <PharmacyItem />
                </div>
            </BottomSheet>
        </>
    )
}

export default Bottomsheet