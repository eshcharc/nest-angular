import { Component, Inject } from '@nestjs/common';
import { Cat } from '../models/cat.model';
import { Repository } from 'typeorm';
import { CatDto } from '../dto/cat.dto';

@Component()
export class CatsService {
  constructor(
    @Inject('CatRepositoryToken') private readonly catRepository: Repository<Cat>
  ) {}

  async save(cat: CatDto): Promise<Cat> {
    return await this.catRepository.save(cat);
  }

  async update(cat: CatDto): Promise<Cat> {
    await this.catRepository.updateById(cat.id, cat);
    return cat;
  }

  async findAll(): Promise<Cat[]> {
    return await this.catRepository.find();
  }

  async find(id: string): Promise<Cat> {
    return await this.catRepository.findOneById(id);
  }
}