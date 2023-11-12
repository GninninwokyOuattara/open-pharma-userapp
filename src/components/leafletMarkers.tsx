import { Pharmacy } from '@/types';
import React from 'react';
import { Marker } from 'react-leaflet';
import { openIcon } from './leafletMap';


interface Props {
    pharmacies: Pharmacy[];
}

const LeafletMarkers: React.FC<Props> = ({ pharmacies }) => {
    return (

        <>
            {
                pharmacies.map((pharmacy) => {
                    return (
                        <Marker
                            key={pharmacy.id}
                            position={[pharmacy.coordinates.latitude, pharmacy.coordinates.longitude]}
                            icon={openIcon}
                        />
                    )
                })
            }
        </>
    )
}




export default React.memo(LeafletMarkers)