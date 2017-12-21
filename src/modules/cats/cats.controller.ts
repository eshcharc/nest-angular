import { Controller, Get, Req, Post, Param, Body, Put } from '@nestjs/common';
import { CatsService } from './services/cats.service';
import { CatDto } from './dto/cat.dto';
import { BaseController } from '../shared/base.controller';

@Controller('cats')
export class CatsController extends BaseController {
  constructor(
    private catsService: CatsService
  ) {
    super(catsService);
  }

  @Post()
  async create(@Body() cat: CatDto) {
    return super.create(cat);
  }

  @Put()
  async update(@Body() cat: CatDto) {
    return super.update(cat);
  }

  @Get()
  async findAll() {
    return super.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return super.find(id);
  }
}