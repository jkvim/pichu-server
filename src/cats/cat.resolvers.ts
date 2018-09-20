import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cat } from '../graphql.schema';
import { CatService } from './cat.service';
import { CreateCatDto } from './create-cat.dto';

@Resolver('Cat')
export class CatResolvers {
  constructor(private readonly catsService: CatService) {}

  @Query()
  async getCats() {
    return await this.catsService.findAll();
  }

  @Query('cat')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Cat> {
    return await this.catsService.findOneById(id);
  }

  @Mutation('create')
  async create(@Args('createCatInput') args: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catsService.create(args);
    return createdCat;
  }
}