import { Controller, Post, Body, Get, Param, ParseIntPipe, Query, ParseEnumPipe } from '@nestjs/common'
import { DriversService } from '../services/drivers.service'
import { CoordinatesQuery, CreateDriverDto } from '../dtos/driver.dto'
import { CoordinatesValidationPipe } from '../pipes/coordinates.pipe'
import { DriverStatus } from '@prisma/client'

@Controller('drivers')
export class DriversController {
  constructor(private DriverService: DriversService) { }

  @Get()
  async findAll(@Query('status', new ParseEnumPipe({ ...DriverStatus, undefined })) status?: DriverStatus) {
    const drivers = await this.DriverService.findAll(status)
    return { drivers }
  }

  @Get('nearby')
  async findNearby(@Query(new CoordinatesValidationPipe()) coordinates: CoordinatesQuery) {
    const driver = await this.DriverService.findNearby(coordinates)
    return { driver }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const driver = await this.DriverService.findById(id)
    return { driver }
  }

  @Post()
  async create(@Body() input: CreateDriverDto) {
    const driver = await this.DriverService.create(input)
    return { driver }
  }
}
