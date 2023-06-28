import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Trip, TripsStatus } from '@prisma/client'

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<Trip[]> {
    return this.prisma.trip.findMany();
  }

  async findOne(id: number): Promise<Trip | null | unknown> {
    return this.prisma.trip.findUnique({
      where: { id }
    })
  }

  async create(data: any): Promise<Trip> {
    return this.prisma.trip.create({
      data
    })
  }

  async completeTrip(id: number): Promise<Trip> {
    return this.prisma.trip.update({
      where: { id },
      data: { status: TripsStatus.COMPLETED }
    })
  }
}
