export class DriverDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  companyId: number | null;
  document: string;
  documentType: string;
  picture: string | null;
  currentLat: number | null;
  currentLog: number | null;
  status: string | null;
}

export class CreateDriverDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyId: number;
  document: string;
  documentType: string;
  picture?: string;
  status?: string;
}

export enum DriverStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ONLINE = 'ONLINE',
  BUSY = 'BUSY',
}
