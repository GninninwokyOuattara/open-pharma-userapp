"use client";

import { Map, MapOptions } from "leaflet";
import { MutableRefObject, createContext, useContext, useRef } from "react";


type LeafletRefType = ((element: string | HTMLElement, options?: MapOptions | undefined) => Map)

interface LeafletCtx {
    leafletMapRef: MutableRefObject<Map | null>
}

const LeafletContext = createContext<LeafletCtx>({
    leafletMapRef: { current: null }
})


export const LeafletProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {


    const leafletMapRef = useRef<null | Map>(null)


    return (
        <LeafletContext.Provider
            value={{
                leafletMapRef
            }}
        >
            {children}
        </LeafletContext.Provider>
    )
}

export const useLeaflet = () => {
    return useContext(LeafletContext)
}