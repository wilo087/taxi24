import { Injectable } from '@nestjs/common'
import { PgDbService } from '../../pgdb/pgdb.service'
import { Passenger } from '@prisma/client'

@Injectable()
export class PassengersService {
  constructor(private db: PgDbService) { }

  async findAll(): Promise<Passenger[]> {
    const passengers = this.db.passenger.findMany()

    return passengers
  }

  async findOne(id: number): Promise<Passenger | null> {
    const passenger = await this.db.passenger.findUnique({
      where: { id }
    })

    return passenger
  }
}
