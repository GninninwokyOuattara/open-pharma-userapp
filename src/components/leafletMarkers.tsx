import { Pharmacy } from '@/types';
import React from 'react';
import { activeIcon, openIcon } from './leafletMap';
import LeafletMarker from './leafletMarker';


interface Props {
    pharmacies: Pharmacy[];
}

const LeafletMarkers: React.FC<Props> = ({ pharmacies }) => {
    return (

        <>
            {
                pharmacies.map((pharmacy) => {

                    if (pharmacy.open) {
                        return (
                            <LeafletMarker
                                pharmacy={pharmacy}
                                icon={openIcon}
                            />
                        )
                    }

                    return (
                        <LeafletMarker
                            pharmacy={pharmacy}
                            icon={activeIcon}
                        />
                    )
                })
            }
        </>
    )
}




export default React.memo(LeafletMarkers)