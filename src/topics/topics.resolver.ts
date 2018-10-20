
import { Query, Resolver } from '@nestjs/graphql';
import { Topics } from '../graphql.schema';
import { TopicsService } from './topics.service';

@Resolver('Topics')
export class TopicsResolvers {
  constructor(private readonly topicsService: TopicsService) {}

  @Query('topics')
  async findByCategory(): Promise<Topics[]> {
    return await this.topicsService.findByCategory();
  }
}