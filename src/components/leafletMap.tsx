'use client';

import { useLeaflet } from "@/app/contexts/leafletContext";
import useUserLocation from "@/hooks/useUserLocation";
import "@/styles/leafletMap.style.css";
import { FunctionalComponentWithPharmaciesAsProps } from "@/types";
import L, { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { userLocationIcon } from "./leaflet-icons";
import LeafletMarkers from "./leafletMarkers";


const LeafletMap: FunctionalComponentWithPharmaciesAsProps = ({ pharmacies }) => {


    const { leafletMapRef } = useLeaflet();

    return (
        <div id='map' className="w-full h-full flex flex-col shadow rounded-md bg-appPrimary">

            <div className="w-full flex-grow rounded-md overflow-hidden">
                <MapContainer
                    center={[5.393471, -4.0055429]}
                    zoom={15}
                    scrollWheelZoom={false}
                    style={{
                        height: "100%",

                    }}
                    ref={leafletMapRef}

                >
                    <TileLayer
                        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']} // Google Maps subdomains
                        attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
                    />


                    <LeafletMapInitialCenterPaddingHandler />

                    <LeafletMapUserLocation />
                    <LeafletMarkers pharmacies={pharmacies} />
                </MapContainer>
            </div>


        </div>

    )
}


const LeafletMapInitialCenterPaddingHandler = () => {
    const map = useMap();



    useEffect(() => {

        const centerMap = (latlng: LatLngExpression, offsetx: number, offsety: number) => {
            let center = map.project(latlng);
            center = new L.Point(center.x - offsetx, center.y - offsety);
            let target = map.unproject(center);
            map.panTo(target);
        }
        const initialRenderMapCenterPaddingHandler = () => {
            const windowWidth = window.innerWidth;
            const mapCurrentCenter = map.getCenter();
            if (windowWidth <= 768) {
                centerMap(mapCurrentCenter, 0, -100);
            } else {
                centerMap(mapCurrentCenter, 0, 0);
            }
        }

        initialRenderMapCenterPaddingHandler();
    }, [map])

    return null
}



const LeafletMapUserLocation = () => {
    const { location } = useUserLocation();

    if (location) {
        return <Marker
            position={[location.latitude, location.longitude]}
            icon={userLocationIcon}
        >
        </Marker>
    } else {
        return null
    }
}

export default LeafletMap