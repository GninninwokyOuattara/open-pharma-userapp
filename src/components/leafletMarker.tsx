import { Pharmacy } from "@/types";
import { Icon, IconOptions } from "leaflet";
import React from "react";
import { Marker, Popup } from "react-leaflet";


interface Props {
    pharmacy: Pharmacy;
    icon: Icon<IconOptions>
}

const LeafletMarker: React.FC<Props> = ({ pharmacy, icon }) => {
    return (
        <Marker
            key={pharmacy.id}
            position={[pharmacy.coordinates.latitude, pharmacy.coordinates.longitude]}
            icon={icon}
        >

            <Popup>
                {pharmacy.name}
            </Popup>

        </Marker>
    )
}

export default React.memo(LeafletMarker);