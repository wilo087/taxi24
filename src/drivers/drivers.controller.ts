import { Controller, Post, Body } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dtos/driver.dto';

@Controller('drivers')
export class DriversController {
  constructor(private DriverService: DriversService) {}

  @Post('/')
  async create(@Body() input: CreateDriverDto) {
    const driver = await this.DriverService.create(input);
    return { driver };
  }
}
