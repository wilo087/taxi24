import { Transform } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';


export class CoordinatesQuery {
  @IsNumber()
  @Min(-90)
  @Max(90)
  @Transform(({ value }) => parseFloat(value))
  public latitude: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  @Transform(({ value }) => parseFloat(value))
  public longitude: number;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  public distance: number;
}

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
