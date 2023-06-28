import { Controller, Post, Body, Get, Param, ParseIntPipe, Query } from '@nestjs/common'
import { DriversService } from '../services/drivers.service'
import { CoordinatesQuery, CreateDriverDto } from '../dtos/driver.dto'
import { CoordinatesValidationPipe } from '../pipes/coordinates.pipe'

@Controller('drivers')
export class DriversController {
  constructor(private DriverService: DriversService) { }

  @Get()
  async findAll() {
    const drivers = await this.DriverService.findAll()
    return { drivers }
  }

  @Get('nearby')
  async findNearby(@Query(new CoordinatesValidationPipe()) coordinates: CoordinatesQuery) {
  // async findNearby(@Query() coordinates: CoordinatesQuery) {
    console.log(coordinates)
    const driver = await this.DriverService.findNearby(coordinates)
    return { driver }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const driver = await this.DriverService.findOne(id)
    return { driver }
  }

  @Post()
  async create(@Body() input: CreateDriverDto) {
    const driver = await this.DriverService.create(input)
    return { driver }
  }
}
