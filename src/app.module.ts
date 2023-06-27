import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [PrismaModule, DriversModule],
  // controllers: [AppController],
  // providers: [AppService],
})

export class AppModule { }
