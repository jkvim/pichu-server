import { Controller, Get, Req, Post, Param, Body, Put, Delete } from '@nestjs/common'
import { CreateCatDto } from './create-cat.dto'

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'add a new cat'
  }

  @Get()
  findAll(@Req() request) {
    console.log('request', request);
    return 'all cats'
  }

  @Get(':id')
  findOne(@Param('id') id) {
    console.log('id', id);
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