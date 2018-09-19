import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { CatsController } from 'cats/cat.controller'
import { CatService } from 'cats/cat.service'
import { AppService } from 'app.service'
import { join } from 'path'

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService],
})
export class AppModule {}
