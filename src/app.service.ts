import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloByName(name: string): string {
    //return this.getHello() + ' ' + name;
    return `${this.getHello()} ${name}`;
  }
  getHello(): string {
    return 'Hello World!';
  }

  getName(): string {
    return 'Mi nombre es Angie';
  }

  getProducts(limit: number, offset: number): string {
    return `Productos desde el id ${offset}, cantidad de elementos a mostrar: ${limit}`;
  }
}
