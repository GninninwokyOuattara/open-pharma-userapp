import { Coordinates } from "@/types";

const calculateDistance = (pos1: Coordinates, pos2: Coordinates): number => {
  const { latitude: lat1, longitude: lon1 } = pos1;
  const { latitude: lat2, longitude: lon2 } = pos2;
  // const [lat1, lon1] = pos1;
  // const [lat2, lon2] = pos2;

  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres
  return d;
};

const convertDistanceToHumanReadable = (distance: number) => {
  if (distance / 1000 >= 1) {
    distance = Math.round((distance / 1000 + Number.EPSILON) * 100) / 100;
    return distance + " Km";
  }
  return Math.ceil(distance) + " M";
};

export { calculateDistance, convertDistanceToHumanReadable };
