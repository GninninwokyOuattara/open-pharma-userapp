'use client';

import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "./bottomsheet.css";
// import 'react-spring-bottom-sheet/dist/style.css';


export default function Home() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => setOpen(true)}>Open Me</button>
            <BottomSheet
                blocking={false}
                onDismiss={() => setOpen(false)}
                snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight]}
                open={open}>My awesome content here</BottomSheet>
        </>
    )
}
