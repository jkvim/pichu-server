import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { CatsController } from 'cats/cat.controller'
import { CatService } from 'cats/cat.service'
import { CatModule } from './cats/cat.module'
import { AppService } from 'app.service'
import { join } from 'path'

@Module({
  imports: [
    CatModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
  ],
})
export class AppModule {}
