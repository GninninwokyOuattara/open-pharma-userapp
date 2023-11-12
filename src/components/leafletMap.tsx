'use client';

import "@/styles/leafletMap.style.css";
import L, { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

declare module 'leaflet' {
    interface Map {
        panToOffset(
            latlng: L.LatLngExpression,
            offset: L.PointExpression,
            options?: L.ZoomPanOptions
        ): L.Map;
        _zoom: number;
    }
}

const LeafletMap = () => {


    const openIcon = L.icon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        shadowSize: [41, 41]
    })



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


                    <MapCenterResponsiveController />

                    <Marker

                        position={[5.393471, -4.0055429]}
                        icon={openIcon}

                    >

                    </Marker>
                </MapContainer>
            </div>


        </div>

    )
}


const MapCenterResponsiveController = () => {

    const map = useMap();

    const recenter = (latlng: LatLngExpression, offsetx: number, offsety: number) => {
        console.log("REcentering")
        console.log("Map", map)
        let center = map.project(latlng);
        center = new L.Point(center.x - offsetx, center.y - offsety);
        let target = map.unproject(center);
        map.panTo(target);
    }

    useEffect(() => {
        // get the current window width
        let width = window.innerWidth
        console.log("inner width", innerWidth)
        if (width <= 768) {
            recenter([5.393471, -4.0055429], 0, -100)
        }
    }, [])

    return (
        <div
            className="z-100 w-10 h-10 bg-red-500 absolute"
            onClick={() => console.log("Map", map)}
        >Hello World</div>
    )
}

export default LeafletMap