import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { DriversService } from '@drivers/services/drivers.service';
import { PassengersService } from '../services/passengers.service';
import { CoordinatesQuery } from '@drivers/dtos/driver.dto';
import { CoordinatesValidationPipe } from '@drivers/pipes/coordinates.pipe';

@Controller('passengers')
export class PassengersController {
  constructor(
    private readonly passengersService: PassengersService,
    private readonly driversService: DriversService
  ) { }

  @Get()
  findAll() {
    return this.passengersService.findAll();
  }


  @Get('trip')
  async requestTrip(@Query(new CoordinatesValidationPipe()) coordinates: CoordinatesQuery) {
    {
      return this.driversService.findNearby(coordinates);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const trip = await this.passengersService.findOne(id)
    return { trip }
  }
}
