import "@/styles/bottomsheet.style.css"
import { BottomSheet } from "react-spring-bottom-sheet"


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
                <div>
                    Awesome content right there !
                </div>
            </BottomSheet>
        </>
    )
}

export default Bottomsheet