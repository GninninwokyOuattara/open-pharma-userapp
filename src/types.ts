export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Pharmacy {
  id: string;
  name: string;
  coordinates: Coordinates;
  open: boolean;
}

export interface ComponentsWithPharmaciesAsProps {
  pharmacies: Pharmacy[];
}

export type FunctionalComponentWithPharmaciesAsProps =
  React.FC<ComponentsWithPharmaciesAsProps>;

export interface PharmacyWithDistanceToUser extends Pharmacy {
  distanceRaw: number;
  distanceFormatted: string;
}

export interface TrackingInformationResponse {
  active_pharmacies: number;
  open_pharmacies: number;
}
