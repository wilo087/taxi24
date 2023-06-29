import { Injectable } from '@nestjs/common'
import { PgDBService } from 'src/pgdb/pgdb.service'
import { Trip, TripsStatus } from '@prisma/client'

@Injectable()
export class TripsService {
  constructor(private db: PgDBService) { }

  async findAll(): Promise<Trip[]> {
    return this.db.trip.findMany();
  }

  async findOne(id: number): Promise<Trip | null | unknown> {
    return this.db.trip.findUnique({
      where: { id }
    })
  }

  async create(data: any): Promise<Trip> {
    return this.db.trip.create({
      data
    })
  }

  async completeTrip(id: number): Promise<Trip> {
    return this.db.trip.update({
      where: { id },
      data: { status: TripsStatus.COMPLETED }
    })
  }
}
