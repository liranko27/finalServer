import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private userRepository: Repository<Products>) { }
    async getProducts(): Promise<Products[]> {
        return await this.userRepository.find();
    }
}
