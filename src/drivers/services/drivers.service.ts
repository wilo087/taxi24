import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CoordinatesQuery, CreateDriverDto } from '../dtos/driver.dto'
import { Driver, DriverStatus } from '@prisma/client'
import { Geo } from '@utils/geo.utils'

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) { }

  async findAll(status: DriverStatus | undefined = undefined): Promise<Driver[]> {
    return this.prisma.driver.findMany({
      where: { status },
      include: {
        company: true,
        vehicle: true
      }
    });
  }

  async findById(id: number): Promise<Driver | null> {
    return this.prisma.driver.findUnique({
      where: { id },
      include: {
        company: true,
        vehicle: {
          include: { brand: true }
        }
      }
    });
  }

  async findByStatus(status: DriverStatus): Promise<Driver | null> {
    return this.prisma.driver.findFirst({
      where: { status },
      include: {
        company: true,
        vehicle: {
          include: { brand: true }
        }
      }
    });
  }

  async findNearby(coordinates: CoordinatesQuery, limit: number | undefined = undefined): Promise<Driver[]> {
    const { latitude, longitude, distance } = coordinates
    // NOTA: para fines prueba agregamos la ubicación actual del conductor en la base de datos
    // pero en un escenario real esta información estaría en un broadcast de sockets

    // const drivers = await this.prisma.$queryRaw<Driver[]>(
    //   Prisma.sql` SELECT * FROM drivers
    //     WHERE 
    //       current_lat != 0 AND current_lon != 0 AND earth_distance(ll_to_earth(current_lat, current_lon), ll_to_earth(${latitude}, ${longitude}))::integer / 1000 <= ${distance}
    //     LIMIT ${limit}`
    // )

    const drivers = await this.prisma.driver.findMany({
      where: {
        AND: [
          {
            currentLat: {
              gte: latitude - Geo.latitudeDelta(distance),
              lte: latitude + Geo.latitudeDelta(distance),
            },
          },
          {
            currentLon: {
              gte: longitude - Geo.longitudeDelta(longitude, distance),
              lte: longitude + Geo.longitudeDelta(longitude, distance),
            },
          },
          {
            status: DriverStatus.ACTIVE
          }
        ],
      },
      take: limit,
      include: {
        vehicle: {
          include: { brand: true }
        }
      }
    })

    return drivers
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
