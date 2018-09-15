import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { CatsController } from './cat.controller'
import { AppService } from 'app.service'
import { CatService } from 'services/cat.service'

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService]
})
export class AppModule {}