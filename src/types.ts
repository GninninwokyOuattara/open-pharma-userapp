interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Pharmacy {
  id: string;
  name: string;
  coordinates: Coordinates;
  open: boolean;
}
