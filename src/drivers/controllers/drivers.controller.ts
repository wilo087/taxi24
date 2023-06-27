import { Controller, Post, Body, Get } from '@nestjs/common'
import { DriversService } from '../services/drivers.service'
import { CreateDriverDto } from '../dtos/driver.dto'

@Controller('drivers')
export class DriversController {
  constructor(private DriverService: DriversService) { }

  @Get()
  async get() {
    const driver = await this.DriverService.findAll()
    return { driver }
  }

  @Post('/')
  async create(@Body() input: CreateDriverDto) {
    const driver = await this.DriverService.create(input)
    return { driver }
  }
}
