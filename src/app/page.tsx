'use client';

import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import 'react-spring-bottom-sheet/dist/style.css';


export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        onDismiss={() => setOpen(false)}
        snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight]}
        open={open}>My awesome content here</BottomSheet>
    </>
  )
}
