import { useEffect, useState } from 'react';

const useUserLocation = () => {

    const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
    const [error, setError] = useState("");

    const getUserLocation = () => {
        console.log("Effect running")
        if ('geolocation' in navigator) {
            console.log("We got geolocation")
            console.log("Navigator", navigator)
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("position", position)
                    // Success callback
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    console.log("error", error)
                    // Error callback
                    setError(error.message);
                }
            );
        } else {
            console.log("We don't have geolocation")
            setError('Geolocation is not supported by your browser.');
        }
    }

    useEffect(() => {

        const getUserLocation = () => {
            console.log("Trying to get user location")
            if ('geolocation' in navigator) {
                console.log("We got geolocation")
                console.log("Navigator", navigator)
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        console.log("position", position)
                        // Success callback
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                    },
                    (error) => {
                        console.log("error", error)
                        // Error callback
                        setError(error.message);
                    }
                );
            } else {
                console.log("We don't have geolocation")
                setError('Geolocation is not supported by your browser.');
            }
        }

        getUserLocation()


    }, []);

    return {
        location,
        error
    }
}

export default useUserLocation