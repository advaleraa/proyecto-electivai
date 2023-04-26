/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(): string {
    return this.appService.getName();
  }

  @Get('hello/:name')
  getHelloByName(@Param('name') name: string ): string {
    return this.appService.getHelloByName(name);
  }

  @Get('products')
  getProducts(@Query('limit') limit = 20, @Query('offset') offset = 0): string {
    return this.appService.getProducts(limit, offset);
  }

}
