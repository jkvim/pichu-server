import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { CatModule } from './cats/cat.module'
import { UsersModule } from './users/users.module'
import { join } from 'path'
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [
    CatModule,
    UsersModule,
    TopicsModule,
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
