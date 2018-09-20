import { Module } from '@nestjs/common'
import { CatResolvers } from './cat.resolvers'
import { CatService } from './cat.service'

@Module({
  providers: [CatService, CatResolvers]
})
export class CatModule {}