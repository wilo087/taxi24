import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDriverDto } from '../dtos/driver.dto';
import { Driver, DriverStatus } from '@prisma/client';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<Driver[]> {
    return this.prisma.driver.findMany({
      include: {
        company: true,
        vehicle: true
      }
    });
  }

  async findOne(id: number): Promise<Driver | null> {
    return this.prisma.driver.findUnique({
      where: {
        id
      },
      include: {
        company: true,
        vehicle: true
      }
    });
  }

  async findNearby(coordinates: unknown): Promise<Driver | null> {
    console.log(coordinates);

    return this.prisma.driver.findUnique({
      where: {
        id: 1
      },
      include: {
        company: true,
        vehicle: true
      }
    });
  }

  async create(driver: CreateDriverDto): Promise<Driver> {
    return this.prisma.driver.create({
      data: {
        firstName: driver.firstName,
        lastName: driver.lastName,
        email: driver.email,
        phone: driver.phone,
        companyId: driver.companyId,
        document: driver.document,
        documentType: driver.documentType,
        status: driver.status as DriverStatus,

        // picture?: string;
        // status?: string;
      },
    });
  }
}
