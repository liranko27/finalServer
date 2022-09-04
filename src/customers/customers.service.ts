import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from './customer.entity';

@Injectable()
export class CustomersService {
    constructor(@InjectRepository(Customers) private customerRepository: Repository<Customers>) { }
    async getCustomers(): Promise<any> {
        return await this.customerRepository.find();
    }
}
