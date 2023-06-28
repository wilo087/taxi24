import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Passenger } from '@prisma/client'

@Injectable()
export class PassengersService {
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<Passenger[]> {
    return this.prisma.passenger.findMany();
  }

  async findOne(id: number): Promise<Passenger | null> {
    return this.prisma.passenger.findUnique({
      where: { id }
    })
  }

  // TODO: We need to calculate the distance between the passenger and the driver
  async requestTrip(lat: number, lng: number): Promise<Passenger[] | unknown> {
    const drivers = await this.prisma.driver.findMany({
      where: {
        AND: [{ currentLat: lat }, { currentLon: lng }]
      }
    })

    return drivers
  }
}
