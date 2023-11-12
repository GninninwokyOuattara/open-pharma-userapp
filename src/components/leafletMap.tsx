'use client';

import "@/styles/leafletMap.style.css";
import { FunctionalComponentWithPharmaciesAsProps } from "@/types";
import L, { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import LeafletMarkers from "./leafletMarkers";

export const openIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41]
})

export const activeIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41]
})

export const closedIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41]
})



const LeafletMap: FunctionalComponentWithPharmaciesAsProps = ({ pharmacies }) => {


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

                >
                    <TileLayer
                        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']} // Google Maps subdomains
                        attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
                    />


                    <LeafletMapInitialCenterPaddingHandler />

                    {/* <Marker

                        position={[5.393471, -4.0055429]}
                        icon={openIcon}

                    >

                    </Marker> */}

                    <LeafletMarkers pharmacies={pharmacies} />
                </MapContainer>
            </div>


        </div>

    )
}


const LeafletMapInitialCenterPaddingHandler = () => {
    const map = useMap();
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

    useEffect(() => {
        initialRenderMapCenterPaddingHandler();
    }, [])

    return null
}

export default LeafletMap