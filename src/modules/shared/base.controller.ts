import { Controller, Get, Req, Post, Param, Body, Put } from '@nestjs/common';

export class BaseController {
  constructor(
    private entityService
  ) {}

  @Post()
  protected async create(entity) {
    return await this.entityService.save(entity);
  }

  @Put()
  protected async update(entity) {
    return await this.entityService.update(entity);
  }

  @Get()
  protected async findAll() {
    return await this.entityService.findAll();
  }

  @Get(':id')
  protected async find(id: string) {
    return await this.entityService.find(id);
  }
}