interface Coordinates {
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
