import { Coordinates, Pharmacy, PharmacyWithDistanceToUser } from "@/types";
import {
  calculateDistance,
  convertDistanceToHumanReadable,
} from "./geo-operation";

export const getDistanceToUser = (
  pharmacy: Pharmacy,
  userPosition: Coordinates
): PharmacyWithDistanceToUser => {
  try {
    const distanceRaw = calculateDistance(userPosition, pharmacy.coordinates);
    const distanceFormatted = convertDistanceToHumanReadable(distanceRaw);

    return {
      ...pharmacy,
      distanceRaw,
      distanceFormatted,
    };
  } catch (error) {
    throw error;
  }
};

export const getPharmaciesWithDistanceToUser = (
  pharmacies: Pharmacy[],
  userPosition: Coordinates
) => pharmacies.map((pharmacy) => getDistanceToUser(pharmacy, userPosition));

export const sortPharmaciesByDistanceAsc = (
  pharmacies: PharmacyWithDistanceToUser[]
) => {
  return [...pharmacies].sort((a, b) => a.distanceRaw - b.distanceRaw);
};
