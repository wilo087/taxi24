import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common'
import { DriversService } from '@drivers/services/drivers.service'
import { CoordinatesQuery } from '@drivers/dtos/driver.dto'
import { CoordinatesValidationPipe } from '@drivers/pipes/coordinates.pipe'
import { PassengersService } from '../services/passengers.service'

@Controller('passengers')
export class PassengersController {
  constructor(
    private readonly passengersService: PassengersService,
    private readonly driversService: DriversService
  ) { }

  @Get()
  async findAll() {
    const passengers = await this.passengersService.findAll()
    return { passengers }
  }

  @Get('trip')
  async requestTrip(@Query(new CoordinatesValidationPipe()) coordinates: CoordinatesQuery) {
    const drivers = await this.driversService.findNearby(coordinates)
    return { drivers }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const trip = await this.passengersService.findOne(id)
    return { trip }
  }
}
