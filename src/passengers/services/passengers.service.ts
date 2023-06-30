import { Injectable } from '@nestjs/common'
import { PgDBService } from 'src/pgdb/pgdb.service'
import { Passenger } from '@prisma/client'

@Injectable()
export class PassengersService {
  constructor(private db: PgDBService) { }

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
