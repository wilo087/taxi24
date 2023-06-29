import { Injectable } from '@nestjs/common'
import { PgDBService } from 'src/pgdb/pgdb.service'
import { Passenger } from '@prisma/client'

@Injectable()
export class PassengersService {
  constructor(private db: PgDBService) { }

  async findAll(): Promise<Passenger[]> {
    return this.db.passenger.findMany();
  }

  async findOne(id: number): Promise<Passenger | null> {
    return this.db.passenger.findUnique({
      where: { id }
    })
  }

  // TODO: We need to calculate the distance between the passenger and the driver
  async requestTrip(lat: number, lng: number): Promise<Passenger[] | unknown> {
    const drivers = await this.db.driver.findMany({
      where: {
        AND: [{ currentLat: lat }, { currentLon: lng }]
      }
    })

    return drivers
  }
}
