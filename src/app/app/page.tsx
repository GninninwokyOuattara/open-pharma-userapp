'use client';

import Bottomsheet from "@/components/bottomsheet";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false)
    return (
        <main>
            <h1>Hello World</h1>
            <Bottomsheet />
        </main>
    )
}
