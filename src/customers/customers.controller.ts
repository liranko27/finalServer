import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customerService: CustomersService) { }
    @Get()
    getAll() {
        return this.customerService.getCustomers()
    }
}
