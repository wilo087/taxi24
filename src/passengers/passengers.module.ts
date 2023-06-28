import { Module } from '@nestjs/common'
import { PassengersController } from './controllers/passengers.controller'
import { PassengersService } from './services/passengers.service'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [PassengersController],
  providers: [PassengersService],
  exports: [PassengersService],
  imports: [PrismaModule],
})

export class PassengersModule { }
