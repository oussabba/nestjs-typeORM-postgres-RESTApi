import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  getAllCoffees(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeesService.findAll(paginationQuery);
    // const { limit, offset } = paginationQuery;
    // return `this is all the coffees we have. Limit: ${limit}, Offset: ${offset}`;
  }

  @Get(':id')
  getOneCoffee(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
    // return `this action returns coffee with id ${id}`;
  }

  @Post()
  create(@Body() ceateCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(ceateCoffeeDto);
    // return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
    // return `This action updates coffee # ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeesService.remove(id);
    // return `This action deletes coffee # ${id}`;
  }
}
