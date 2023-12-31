
import { useLeaflet } from "@/app/contexts/leafletContext";
import useUserLocation from "@/hooks/useUserLocation";
import "@/styles/leafletEasyButton.style.css";
import "@/styles/leafletMap.style.css";
import { FunctionalComponentWithPharmaciesAsProps } from "@/types";
import L, { LatLngExpression } from "leaflet";
import "leaflet-easybutton";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { userLocationIcon } from "./leaflet-icons";
import LeafletMarkers from "./leafletMarkers";
import PharmacyShowModeController from "./pharmacyShowModeController";
import SearchInput from "./searchInput";


const LeafletMap: FunctionalComponentWithPharmaciesAsProps = ({ pharmacies }) => {


    const { leafletMapRef } = useLeaflet();

    return (
        <div id='map' className="w-full h-full flex flex-col shadow rounded-md bg-appPrimary">

            <div className="w-full flex-grow rounded-md overflow-hidden relative">
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
                        url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']} // Google Maps subdomains
                        attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
                    />


                    <LeafletMapInitialCenterPaddingHandler />

                    <LeafletMapUserLocation />
                    <LeafletMarkers pharmacies={pharmacies} />
                    <div className="md:hidden  absolute w-[70%]   left-1/2 transform -translate-x-1/2 top-3">
                        <SearchInput
                            className="shadow-md h-12 text-lg mb-1"
                        />
                        <PharmacyShowModeController />
                    </div>
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
    const { leafletMapRef } = useLeaflet()

    useEffect(() => {
        let easy: any
        if (leafletMapRef.current && location) {
            const easyButton = L.easyButton("<div class='user-location'><img src='/location-crosshairs-solid.svg' alt='SVG Image' style='width: 15px; height: 15px;'></div>", () => {
                leafletMapRef.current?.setView([location.latitude, location.longitude], 15)
            })
            easy = easyButton.addTo(leafletMapRef.current)
        }

        return () => {
            if (easy) {
                easy.remove()
            }
        }
    }, [leafletMapRef, location])


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