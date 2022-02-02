export interface Location {
  typess: string;
  geometry: {
    types: string;
    coordinates: number[];
  };
  properties: {
    zip: string;
    city: string;
    phone: string;
    state: string;
    address: string;
    archCard: string;
    driveThru: string;
    freeWifi: string;
    playplace: string;
    storeNumber: string;
    storeType: string;
    storeUrl: string;
  };
}
