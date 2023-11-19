import { useEffect, useState } from 'react';

const useUserLocation = () => {

    const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {

        const getUserLocation = () => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // Success callback
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                    },
                    (error) => {
                        // Error callback
                        setError(error.message);
                    }
                );
            } else {
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