
export enum ServiceType {
  TIRE = 'Mobile Tire Service',
  OIL = 'Mobile Oil Change'
}

export interface BookingState {
  step: number;
  serviceType: ServiceType;
  tireSize: string;
  brand: string;
  year: string;
  makeModel: string;
  oilType: string;
}

export interface NavItem {
  label: string;
  path: string;
}
