import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StreamersModule } from './streamers/streamers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsGateway } from './gateways/events.gateway';
import { env } from './env';

@Module({
  imports: [
    MongooseModule.forRoot(env.DATABASE_URL, { dbName: 'streamers' }),
    StreamersModule,
  ],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
