import { Controller, Post, Body, Get, Param, ParseIntPipe, Query, ParseEnumPipe } from '@nestjs/common'
import { DriversService } from '../services/drivers.service'
import { CoordinatesQuery, CreateDriverDto } from '../dtos/driver.dto'
import { CoordinatesValidationPipe } from '../pipes/coordinates.pipe'
import { DriverStatus } from '@prisma/client'

@Controller('drivers')
export class DriversController {
  constructor(private readonly driverService: DriversService) { }

  @Get()
  async findAll(@Query('status', new ParseEnumPipe({ ...DriverStatus, undefined })) status?: DriverStatus) {
    const drivers = await this.driverService.findAll(status)
    return { drivers }
  }

  @Get('nearby')
  async findNearby(@Query(new CoordinatesValidationPipe()) coordinates: CoordinatesQuery) {
    const driver = await this.driverService.findNearby(coordinates)
    return { driver }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const driver = await this.driverService.findById(id)
    return { driver }
  }

  @Post()
  async create(@Body() input: CreateDriverDto) {
    const driver = await this.driverService.create({ ...input, status: DriverStatus.PENDING })
    return { driver }
  }
}
