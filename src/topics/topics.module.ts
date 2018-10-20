import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsResolvers } from './topics.resolver'

@Module({
  controllers: [],
  providers: [TopicsService, TopicsResolvers]
})
export class TopicsModule {}
