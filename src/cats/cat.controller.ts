import {
  Controller,
  Get,
  Req,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common'
import { CreateCatDto } from './create-cat.dto'
import { CatService } from './cat.service'
import { Cat } from './cat.interface'

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id) {
    console.log('id', id)
    return `get a cat ${id}`
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateCatDto) {
    return `update the ${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `remove the ${id} cat`
  }
}
