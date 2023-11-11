import "@/styles/bottomsheet.style.css"
import { useState } from "react"
import { BottomSheet } from "react-spring-bottom-sheet"


const Bottomsheet = () => {
    const [open, setOpen] = useState(true)
    return (
        <>
            {/* <button onClick={() => setOpen(true)}
                className="text-red-500"
            >Open Me</button> */}
            <BottomSheet
                blocking={false}
                onDismiss={() => setOpen(false)}
                snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight]}
                open={open}>My awesome content here</BottomSheet>
        </>
    )
}

export default Bottomsheet