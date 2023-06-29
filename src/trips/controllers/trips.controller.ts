import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common'
import { TripsService } from '../services/trips.service'
import { CreateTripDto } from '@trips/dtos/trips.dto'
import { TripsStatus } from '@prisma/client'

@Controller('trips')
export class TripsController {
  constructor(private readonly tripService: TripsService) { }

  @Get()
  async findAll() {
    const trips = await this.tripService.findAll()
    return { trips }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const trip = await this.tripService.findOne(id)
    return { trip }
  }

  @Post('request')
  async create(@Body() input: CreateTripDto) {
    const trip = await this.tripService.request(input)
    return { trip }
  }

  @Post(':id/:status')
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Param('status', ParseIntPipe) status: TripsStatus
  ) {
    const trip = await this.tripService.updateStatus(id, status)
    return { trip }
  }

}
