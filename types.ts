
export enum ServiceType {
  TIRE = 'Tire Service',
  OIL = 'Oil Change'
}

export enum LocationType {
  SHOP = 'In-Shop (Davie, FL)',
  MOBILE = 'At My Address (Mobile)'
}

export interface BookingState {
  step: number;
  serviceType: ServiceType;
  locationType: LocationType;
  name: string;
  phone: string;
  email: string;
  address: string;
  tireSize: string;
  brand: string;
  year: string;
  makeModel: string;
  oilType: string;
  date: string;
  time: string;
}

export interface NavItem {
  label: string;
  path: string;
}
