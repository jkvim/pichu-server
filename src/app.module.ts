import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { CatsController } from 'cats/cat.controller'
import { CatService } from 'cats/services/cat.service'
import { AppService } from 'app.service'

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService]
})
export class AppModule {}